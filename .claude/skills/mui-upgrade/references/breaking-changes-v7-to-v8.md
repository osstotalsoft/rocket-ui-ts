# MUI Core v7 → v8 breaking changes

This file is a quick-reference snapshot of the most common breaking changes and their grep detection patterns. It may not be exhaustive. Before starting per-component work, query `mcp__mui_mcp__useMuiDocs` with `"migration guide v7 to v8"` and call `mcp__mui_mcp__fetchDocs` on the returned URL to get the authoritative and up-to-date list.

v8 is primarily a CSS-variables-and-theming overhaul plus accessibility groundwork for v9. Smaller diff than v6→v7 or v8→v9.

## CSS variables become opt-in by default

The `extendTheme()` / CssVarsProvider path is now the standard; the older runtime-theme path is deprecated but still works. No urgent migration; revisit at v9 if you want to drop the deprecated path.

## Pigment CSS preview removed

If the project experimented with the Pigment CSS package (rare), it was rolled back. Move back to emotion or styled-components.

**Detection:** dependencies `@pigment-css/react`, `@pigment-css/nextjs-plugin`.

## Theme `Mui*Classes` interfaces consolidated

Several internal classes interfaces were merged. Affects only projects with manual type augmentation of MUI classes.

**Detection:** `declare module '@mui/material/styles'` or `@mui/material/<Component>` with classes additions.

## Codemod preset

```
npx @mui/codemod@latest v8.0.0/preset-safe <path>
```

**Effort note:** for most projects this hop is a version bump and a build verification. Don't budget more than half a day unless the project uses CSS Variables or custom classes extensions.
