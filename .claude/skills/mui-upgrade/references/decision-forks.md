# Decision forks — when to ask the user

These are the spots where an MUI upgrade has more than one defensible answer. When the per-component phase hits one of these, **stop and ask** via AskUserQuestion with concrete options.

The goal is to surface real trade-offs, not to ask permission for every change. If you're not sure something is a fork, it probably isn't — ask only when the alternatives have different long-term consequences.

## Fork 1 — Public-API re-exports

**When it applies:** the project is a published library (has `main`/`module`/`exports` in `package.json` or `publishConfig`), AND a component re-exports an MUI prop name that the new major version renamed.

**Concrete example (v6→v9 `TextField`):**
- v6 exposes `InputProps`, `inputProps`, `InputLabelProps`.
- v9 expects `slotProps={{ input, htmlInput, inputLabel }}`.
- If the library's `TextFieldProps` type extends MUI's old names, downstream consumers will break when the library bumps.

**Options to present:**
- **A — Adopt v9 names, bump major.** Library's API now matches MUI 1:1. Breaking for downstream apps. Cleanest going forward.
- **B — Keep v6 names, translate internally.** Non-breaking for downstream. Carries a translation layer forever. API drifts from MUI docs.
- **C — Hybrid:** accept both, deprecate the old names with a warning, remove next major. Most ceremony, smoothest migration.

Present these as choices, recommend A for greenfield libraries, B for libraries with significant downstream usage.

## Fork 2 — `inputComponent` swap (v9-specific)

**When it applies:** v8 `InputProps.inputComponent={CustomInput}` for native input replacement (common with `react-number-format`, `react-imask`, Stripe Elements, and similar libraries).

**The correct migration — no fork needed for third-party wrappers:**

`InputProps.inputComponent={CustomInput}` → `slotProps.input.inputComponent={CustomInput}`

That is all. Do **not** use `slots.htmlInput = CustomInput`.

**Why this matters:** `slots.htmlInput` replaces the `<input>` slot directly on `InputBase`, bypassing `InputBaseInput` (MUI's internal styled `<input>` component). Because `InputBaseInput` is never rendered, its Emotion CSS rule (`.MuiInputBase-input { font: inherit; padding: 4px 0 5px; height: 1.4375em; … }`) is never injected into the DOM. The rendered `<input>` inherits browser defaults instead of MUI's reset — producing an input that compiles, runs, and passes tests, but looks visually wrong (wrong font, wrong height, wrong padding).

`slotProps.input.inputComponent` uses the legacy `inputComponent` prop on `InputBase`, which causes MUI to render `InputBaseInput` with `as={CustomInput}`. The CSS IS injected, and `CustomInput` gets the right props. This is [documented](https://mui.com/material-ui/react-text-field/#integration-with-3rd-party-input-libraries) as the correct v9 pattern.

**When to actually fork (ask the user):**
- The project is a published library and the `TextFieldProps` type publicly re-exports `InputProps.inputComponent` under that name. In that case, see Fork 1 (public API contract decision).
- The custom input component does NOT use `React.forwardRef`. In that case it can't hold a ref, and MUI will warn. Ask the user whether to add forwardRef or refactor.

For most internal usage and non-library projects: apply the fix mechanically (`InputProps.inputComponent` → `slotProps.input.inputComponent`) without asking.

**Double-wrapped InputAdornment check:** When migrating stepper or clearable inputs, check that `AddButton`/`SubtractButton` and similar helper components don't wrap themselves in `<InputAdornment>` if the parent `internalStartAdornment`/`internalEndAdornment` already wraps them. MUI v9's `InputAdornment` adds enough visual margin that the nesting is now noticeable. Remove the inner `<InputAdornment>` from the helper component and keep only the outer one.

## Fork 3 — Lab → Material relocations (v7-specific)

**When it applies:** the repo imports from `@mui/lab` something that moved to `@mui/material` in v7 (Alert, Autocomplete, Pagination, Rating, Skeleton, SpeedDial, ToggleButton, ToggleButtonGroup, TabContext/TabList/TabPanel for Tabs).

**Options:**
- **A — Run the codemod `v7.0.0/lab-removed-components`.** Mechanical, safe.
- **B — Skip if the codebase has any wrapper component that depends on the lab path.** Rare; only ask if you detect a `*Lab` wrapper.

Almost always A. Only fork if the codemod's output looks wrong.

## Fork 4 — `Grid` API (v6/v7-specific)

**When it applies:** the repo uses old `Grid` with `item xs={...}`. v6 introduced Grid2; v7 promoted Grid2 to `Grid` and renamed the old one `GridLegacy`.

**Options:**
- **A — Migrate to new Grid (`size={{ xs, md }}`).** Future-proof, matches v9.
- **B — Switch to `GridLegacy` to defer the rewrite.** Buys time but the work returns at v8.

Recommend A. Only ask if Grid is heavily customized via theme overrides.

## Fork 5 — System props (`mt`, `color` on Box/Stack/Typography)

**When it applies:** v9 removes system props on `Box`, `Typography`, `Stack`, `Grid`. They must move to `sx`.

**Options:**
- **A — Run `v9.0.0/system-props` codemod.** Mechanical, almost always correct.
- **B — Manual rewrite to extract repeated `sx` into `styled()` components.** Better long-term, more work.

Default to A. Only fork if the user mentioned wanting to deduplicate styles in the same conversation.

## Fork 6 — `disableEscapeKeyDown` removal (v9-specific)

**When it applies:** `<Dialog disableEscapeKeyDown>` or `<Modal disableEscapeKeyDown>`.

**Options:**
- **A — Check `reason === 'escapeKeyDown'` in `onClose` and return early.** Standard replacement.
- **B — If the component currently doesn't handle `onClose`, decide whether to ignore the key entirely (no-op `onClose`) or implement closing logic.**

Ask only if `onClose` isn't already wired up.

## Fork 7 — `@mui/x-*` major jumps

**When it applies:** the X package version target is more than one major ahead of current.

**Options:**
- **A — Jump in lockstep with core (e.g., x-charts v7 → v8 alongside core v7 → v8).**
- **B — Pin X packages to their latest compatible-with-current-core version and defer the X upgrade.**

The MUI X migration guides are independent and sometimes have their own breaking changes (e.g., date-pickers changed adapter API in v7). Always ask whether to bundle or defer.

## Fork 8 — Codemod produced ugly output

**When it applies:** after running a codemod, the diff is correct but the formatting is awkward (deeply nested slotProps objects, redundant fragments).

**Options:**
- **A — Accept the codemod output, run Prettier.** Fastest.
- **B — Hand-rewrite the affected file for clarity.** Slower, prettier diff in code review.

Ask only if the file is one a reviewer is likely to scrutinize (a high-traffic component, a public API surface). Don't ask for test files or stories.

## How to phrase decision-fork questions

Use `AskUserQuestion` with 2–3 options. Each option's `description` should state the trade-off in one sentence. Add `(Recommended)` to the option you'd default to. Examples:

```
{
  "question": "TextField re-exports InputProps publicly. v9 expects slotProps. How should we handle the API?",
  "header": "API contract",
  "options": [
    { "label": "Break to v9 names (Recommended)", "description": "Library API matches MUI 1:1. Major version bump. Downstream consumers must update call sites." },
    { "label": "Keep old names, translate", "description": "Accept InputProps/inputProps/InputLabelProps, map to slotProps internally. Non-breaking for consumers." },
    { "label": "Deprecate-and-migrate", "description": "Accept both, warn on old names. Remove next major." }
  ]
}
```

Don't ask the user to articulate the fork themselves — present it pre-analyzed.
