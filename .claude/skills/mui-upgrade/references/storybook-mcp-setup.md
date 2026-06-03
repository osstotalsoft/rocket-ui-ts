# Storybook MCP setup

The skill uses `@storybook/addon-mcp` (or an equivalent Storybook MCP server) for per-component visual validation when available. It is optional — without it, visual verification falls back to asking the user to check components manually in a browser. The per-component loop still runs; only Step 7 changes.

## Detect whether it's connected

Two ways to check:

1. Call `ListMcpResourcesTool` (if available) and look for a resource whose server name contains "storybook".
2. Read the project's `.storybook/main.ts` or `.storybook/main.js` — does it include `@storybook/addon-mcp` in the `addons` array?
3. Read the Claude Code MCP config (`~/.claude/settings.json` or similar) — is there an `mcpServers` entry for Storybook?

Any one is enough; all three is the most reliable check.

## If missing — tell the user

```
The skill needs a Storybook MCP server for per-component visual validation.

Install:
  yarn add -D @storybook/addon-mcp
  # or
  npm install -D @storybook/addon-mcp

Then in .storybook/main.ts, add to the addons array:
  addons: [
    // ...existing addons
    '@storybook/addon-mcp',
  ]

Then add the MCP server to your Claude Code config. The simplest way:
  claude mcp add storybook -- npx -y @storybook/addon-mcp

Verify the connection by running:
  claude mcp list

Once "storybook" appears in the list, restart this session and re-invoke the upgrade.
```

If the project has no Storybook at all, skip this setup entirely and rely on manual browser verification in Phase 3 Step 7.

## What to expect from the MCP

A working Storybook MCP exposes at minimum:
- A resource per story (the rendered output)
- A way to fetch the rendered DOM/HTML
- Ideally, a screenshot endpoint

When validating a component, fetch the relevant story (or stories — most components have multiple variants) and compare against the pre-upgrade state. If no pre-upgrade snapshot exists, ask the user to glance at the rendered story and confirm.

## Per-component validation flow

For each component in the leaf-first task list:

1. Identify the story file (typically `<Component>.stories.tsx` in `src/stories/` or alongside the component).
2. Identify the relevant story IDs from the file's named exports.
3. Via the Storybook MCP, fetch the rendered output for each story.
4. Compare against any baseline (Git-tracked screenshots, prior MCP snapshot, or just-the-user's-eyes).
5. If a regression is suspected, surface it: "Story `TextField--clearable` lost its `X` icon's hover state. Look at it before I proceed?"
6. If everything looks right, mark the visual validation step complete and move to user confirmation.

## When the MCP isn't enough

Some regressions only appear during interaction (hover states, focus rings, drag handles). The MCP gives you the static render. For interactive regressions:

- Ask the user to spend 30 seconds in Storybook clicking through the relevant variants.
- Don't ask for every component — only ones the breaking-change scan flagged as visually risky (Slider, Stepper, ListItemIcon, anything where `slotProps` changed rendering).
