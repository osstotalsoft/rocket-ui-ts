---
name: mui-upgrade
description: Plan and execute a Material UI version upgrade (any @mui/* package). Trigger whenever the user asks to upgrade @mui/material, @mui/icons-material, @mui/lab, @mui/system, @mui/x-charts, @mui/x-date-pickers, @mui/x-data-grid, or any other @mui/* package, OR mentions migrating between MUI major versions (v5, v6, v7, v8, v9...), OR says things like "bump MUI", "MUI v9", "migrate Material UI", "what would it take to upgrade Material UI". Also trigger when the user asks for the effort/scope of an MUI upgrade, or asks to fix breaking changes from a recent MUI bump. Produces a written audit + plan, then walks one component at a time leaf-first (children before parents), running codemods, applying manual fixes, getting each component's tests green, and validating visuals via @storybook/addon-mcp before moving on. Halts and asks the user whenever a component admits more than one valid migration path or a decision affects the library's public API.
---

# mui-upgrade

A staged, low-risk way to take a repo from one MUI major to another. The skill assumes you (the agent) will be the one doing the work, not handing it back to the user — you fetch the migration guides, run the codemods, write the diffs, fix the tests, and only stop to ask the user when something genuinely needs their judgment.

## Why this skill exists

MUI upgrades fail in two predictable ways:

1. **Big-bang migrations** — run every codemod, fix the build, claim victory, ship regressions. Storybook reveals them weeks later.
2. **Endless ceremony** — pause for the user on every mechanical rename. The user disengages, the upgrade stalls.

The skill threads between those failure modes: aggressive on mechanical changes, deliberate on anything that affects external behavior or public API.

## The four phases

You will always work through these in order. Don't skip Audit even if the user is in a hurry — the plan is what makes per-component work tractable.

### Phase 1 — Audit

1. **Read `package.json`** at the repo root. List every `@mui/*` entry (dependencies + devDependencies + peerDependencies) with its current version.
2. **Confirm target version** with the user. If they said "v9" but the package list spans multiple majors (e.g., `@mui/material` v6 and `@mui/x-charts` v7), confirm what target version they want for each family. MUI Core and MUI X have independent versioning — `@mui/material@v9` does not imply `@mui/x-charts@v9`.
3. **Identify version hops.** If current `@mui/material` is v6 and target is v9, the hops are v6→v7, v7→v8, v8→v9. You will need each hop's migration guide; codemods are typically per-hop.
4. **Fetch migration guides** using `mcp__mui_mcp__useMuiDocs` for each hop (e.g., query `"migration guide v{N-1} to v{N}"`), then call `mcp__mui_mcp__fetchDocs` with the returned URLs to get the full content. Fall back to WebFetch at `https://mui.com/material-ui/migration/upgrade-to-v{N}/` only if the MCP is unavailable.
5. **Scan the repo for breaking-change hits.** Use the detection patterns in `references/breaking-changes-v{N-1}-to-v{N}.md` for each hop. Patterns are grep/regex-based; run them with the Grep tool and consolidate hits per breaking change, per file.
6. **Detect "is this a library?"** Check `package.json` for `main`, `module`, `exports`, or `publishConfig`. If the project is published, **public-API decisions become much more important** — they're breaking changes for downstream consumers. Note this in the plan.
7. **Check for Material UI MCP** (see "Material UI MCP requirement" below).
8. **Check for Storybook MCP** (see "Storybook MCP (optional)" below). Note in the plan whether it is available.

### Phase 2 — Plan

Produce a single markdown plan with these sections. Show it to the user, get sign-off before any code changes.

- **Current → target versions** (table per `@mui/*` package)
- **Hops** required (e.g., v6 → v7 → v8 → v9)
- **What's already done** — surface migrations the repo has already adopted (e.g., Grid v2 API, no `tss-react`/`makeStyles`). These reduce effort and are worth calling out so the user trusts the estimate.
- **Breaking-change inventory** — per hop, per breaking change: severity (Low/Medium/High), file hit count, whether a codemod covers it, and any manual residue.
- **Decision forks** — list every place where the migration admits more than one defensible choice. See `references/decision-forks.md` for the catalog of known forks. The user will be asked about each one when its component comes up; listing them upfront sets expectations.
- **Effort estimate** — a rough day count, broken down by phase. Be honest about uncertainty.
- **Risks** — things that go wrong silently (numeric formatting in custom `inputComponent`, visual regressions like `ListItemIcon` width changes, accessibility role changes like `Stepper` → `<ol role="tablist">`).

After the user approves the plan, **bump the package versions and lockfile**. Do NOT touch source code yet. The build will be red — that's expected and useful as a checklist for what's left.

### Phase 3 — Per-component execution (the bulk of the work)

This is the heart of the skill. Work leaf-first: a component must only be migrated after every component it imports has already been migrated, tested, and visually verified.

#### Step 3a — Build the dependency order

Run `scripts/build_dep_graph.py` against the repo's component root (usually `src/components/`):

```
python scripts/build_dep_graph.py --root <repo>/src/components --out tasks.json
```

This emits a topologically-sorted list (leaves first). Each entry has `{ name, path, depends_on: [...], test_file, story_file }`.

Use this list to create tasks via TaskCreate — one per component, in order. Add `blockedBy` edges so the parent task can't start until the children finish.

#### Step 3b — For each component, in order

This is the loop. Do every step. Don't skip step 4 even if the component looks trivial.

1. **Read the component, its test file, its stories.** Understand what it does before you change anything.
2. **Identify which breaking changes apply** by re-running the detection patterns scoped to this component's file paths.
3. **Surface decision forks.** If `references/decision-forks.md` flags this component or this pattern as having multiple valid rewrites, stop and ask the user via AskUserQuestion. Examples:
   - Component re-exports a prop the new MUI version renames → keep old prop name + translate internally, or break and adopt the new name?
   - `inputComponent` swap could become `slots.input` (direct) or `slotProps.input.slots.input` (nested) — which form does the user prefer?
   - A codemod's output is correct but ugly — accept it, or hand-write a cleaner version?
4. **Run applicable codemods** scoped to this component's files. Example:
   ```
   npx @mui/codemod@latest v{N}.0.0/preset-safe path/to/Component
   ```
   Show the user the diff before any edits to files outside the component's directory. If a codemod touches more than the intended scope, narrow the path and re-run.
5. **Apply manual fixes** for everything codemods can't handle. Be especially careful with:
   - Custom prop forwarding (the library wraps an MUI component and re-exposes its props)
   - Type definitions referencing renamed MUI types
   - Internal `styled(MuiThing)` wrappers — usually unaffected, but check that the wrapped component's slot names didn't change.

   **TypeScript typing rules — read before writing any type annotation:**

   Never use `any` (or `as any`) to silence a type error. `any` is forbidden unless it accompanies a `// TODO: remove when MUI fixes <link-to-issue>` comment and no other approach is viable after exhausting the options below. The bar is deliberately high.

   When a TypeScript error appears after migration, resolve it in this order:
   - **Look up the correct MUI type** via `mcp__mui_mcp__useMuiDocs` (e.g., query the component name + "TypeScript props" or "API"). If the type was renamed in this MUI version, the docs will say so. Use the new name.
   - **Instantiate the correct generic** if the MUI component is generic (e.g., `Autocomplete<OptionType>`). Check the component's API docs via `mcp__mui_mcp__fetchDocs`.
   - **Extract the prop type** from the component rather than re-declaring it: `ComponentPropsWithoutRef<typeof MuiComponent>['propName']` or `Parameters<typeof handler>[0]`.
   - **Use `unknown` + a type guard** when the value is a genuinely open union. `unknown` is not a cop-out — it forces the narrowing to live at the call site where it belongs.
   - Only after all of the above fail: use a targeted `as SpecificType` cast (never `as any`), and leave a comment explaining why the cast is needed and what would remove it.

   **No intermediary shim components:**

   Do not create wrapper components (e.g., `AutocompleteCompact`, `TextFieldLegacySlots`) as a bypass for type errors in the underlying MUI component. If a component fails to type-check after migration, investigate the root cause: use `mcp__mui_mcp__useMuiDocs` to look up the correct props and types for the new version, then fix the component directly. A shim hides the incompatibility without resolving it and will cause confusion for future maintainers.

6. **Run only this component's tests.** Don't run the full suite — too slow and noisy.
   ```
   yarn jest path/to/Component --no-coverage
   ```
   (or `npm test --` / `pnpm test` depending on what's in `package.json`'s `scripts.test`).
   Iterate: read failure, fix component or fix test, re-run. **Do not move on until tests are green.** "Green" means no failures, not "no new failures."
7. **Visually validate.** If Storybook MCP is connected, open the component's stories and verify rendering matches pre-upgrade. If not, ask the user to check the component in a browser and confirm it looks correct before proceeding.
8. **Ask the user to confirm** the component is done. A short summary is fine: "TextField done — 14 InputProps → slotProps rewrites, 7 tests still green, stepper/numeric/clearable variants all render. OK to proceed?"
9. **Mark the task complete** via TaskUpdate. Move to the next component.

If the user wants to pause, the leaf-first order means you're always in a consistent state — every completed component compiles, tests, and renders. That's the whole point of the ordering.

### Phase 4 — Finalize

1. **Run the full test suite.** Fix anything cross-component that slipped through.
2. **Run the production build.**
3. **Update `browserslist`** in `package.json` if the new MUI major requires it (v9 dropped support for Chrome <117, Safari <17, etc.).
4. **Update `@mui/icons-material`** to the matching major (it tracks core).
5. **Sweep deprecated patterns** that aren't tied to a specific component — e.g., `createMuiTheme` → `createTheme`, deep imports, `@mui/lab` components that moved to `@mui/material`.
6. **Verify the dev server starts without compilation errors.** Read the `scripts` field of `package.json` and identify the command that starts the local dev/preview server. Common keys in priority order: `storybook`, `start`, `dev`, `serve`. Run the command in the background with a generous timeout (at least 120 seconds for projects with many components) and watch its output for one of:
   - A "compiled successfully" / "ready" / "Storybook started" message → success.
   - Any `ERROR in` / `Module not found` / `Cannot resolve` line → compilation failure; fix the root cause before proceeding.

   The goal is to catch issues that are invisible to the TypeScript compiler and test suite but break the bundler (e.g., trailing-slash directory imports blocked by a package's `exports` field, missing peer dependencies, SWC/Babel transform failures on new syntax). Kill the process once the outcome (success or failure) is clear.

   If `package.json` has no recognizable dev-server script, note that in the summary and ask the user to start the project manually and confirm it opens without errors.

7. **Produce a summary diff** for the user: file count changed, lines added/removed, decision forks resolved, anything intentionally left.

## Material UI MCP requirement

The skill uses the MUI MCP server (`@mui/mcp`) throughout the upgrade for two purposes: fetching migration guides in Phase 1, and looking up correct component types and API surfaces in Phase 3. Without it, type lookups fall back to WebFetch, which is slower and misses context.

The MUI MCP exposes two tools:
- `mcp__mui_mcp__useMuiDocs` — search MUI documentation (takes a natural-language query, returns relevant doc snippets and URLs)
- `mcp__mui_mcp__fetchDocs` — fetch full content for one or more URLs returned by `useMuiDocs`

**How to check:** look at the MCP server list. If no server named `mui-mcp` is present, tell the user:

> The skill uses the MUI MCP server for documentation lookups. Please add it to your project's `.mcp.json`:
>
> ```json
> {
>   "mcpServers": {
>     "mui-mcp": {
>       "type": "stdio",
>       "command": "npx",
>       "args": ["-y", "@mui/mcp@latest"]
>     }
>   }
> }
> ```
>
> Then restart Claude Code to connect the server, and re-invoke the upgrade.

If the MUI MCP is unavailable, the skill can continue using WebFetch for migration guides, but type lookups in Phase 3 must then use `https://mui.com/material-ui/api/{component-name}/` via WebFetch. Note this in the plan.

## Storybook MCP (optional)

Visual regressions are common in MUI upgrades — tests catch broken event handlers, but not a `ListItemIcon` whose default min-width changed from 56px to 36px and now overlaps menu text. Storybook MCP enables per-component visual verification and is strongly recommended when the project has stories.

**How to check:** look at the MCP server list. If a server matching `storybook` is present, use it in Phase 3 Step 7 to preview components after migration.

If no Storybook server is connected, the skill continues without visual validation. In that case, note the gap in the Phase 2 plan and ask the user to manually verify affected components in a browser. The per-component loop still runs — just skip Step 7 and replace the visual-confirmation sentence in Step 8 with a request for the user to visually check the component themselves.

If the project has Storybook but the MCP addon is not yet connected, suggest it to the user:

> For visual validation during the upgrade, consider connecting Storybook MCP:
>
> ```
> yarn add -D @storybook/addon-mcp
> ```
>
> Then add it to `.storybook/main.ts` per the docs at https://storybook.js.org/addons/@storybook/addon-mcp and restart Claude Code. It is not required to proceed.

See `references/storybook-mcp-setup.md` for the full setup walkthrough.

## When to ask the user vs decide yourself

The skill is opinionated: do mechanical work without asking. Ask only when there's a real fork. The catalog of forks is in `references/decision-forks.md`, but the principle is:

**Always ask** when:
- The library's public API would change (a published package re-exports a prop name MUI renamed).
- Two codemods could produce different valid output for the same surface.
- A migration choice trades off ergonomics vs strict-MUI-conformance (relevant for design-system libraries).
- The user has expressed preference and the next change conflicts with it.

**Never ask** when:
- The change is purely mechanical (rename an import, swap a deep import for a shallow one).
- A codemod handles the change and its diff is straightforward.
- The change is required for the build to compile.

When you do ask, use AskUserQuestion with concrete options, not "what do you want to do?" The user needs to see the alternatives side by side, not improvise.

## Working with the task list

Use TaskCreate / TaskUpdate / TaskList aggressively. Every component is a task. Every fork the user resolves becomes a note on the relevant task. When a component is done, mark it complete immediately — don't batch.

If the user asks "where are we?", `TaskList` should answer the question without you having to think.

## Reference files

- `references/breaking-changes-v6-to-v7.md` — v6 → v7 detection patterns and codemods
- `references/breaking-changes-v7-to-v8.md` — v7 → v8
- `references/breaking-changes-v8-to-v9.md` — v8 → v9
- `references/breaking-changes-x-packages.md` — MUI X (charts, date-pickers, data-grid) per-major notes
- `references/decision-forks.md` — every place the skill should stop and ask
- `references/storybook-mcp-setup.md` — installing and connecting `@storybook/addon-mcp`

Read each reference only when its phase is active — they're long, and loading them all upfront wastes context. The audit phase reads the breaking-change docs; the per-component phase consults `decision-forks.md` per-component.
