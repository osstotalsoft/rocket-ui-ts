# MUI Core v6 → v7 breaking changes

This file is a quick-reference snapshot of the most common breaking changes and their grep detection patterns. It may not be exhaustive. Before starting per-component work, query `mcp__mui_mcp__useMuiDocs` with `"migration guide v6 to v7"` and call `mcp__mui_mcp__fetchDocs` on the returned URL to get the authoritative and up-to-date list.

## Peer requirements

- TypeScript ≥4.9 (up from 4.7)
- React 18+ users: pin `react-is` resolution to match React version (otherwise prop-type checks fail at runtime)

## Grid restructuring (the big one)

- v6 `Grid2` is promoted to `Grid` in v7.
- v6 `Grid` (the original) is renamed `GridLegacy`.
- v6 codebases using `<Grid item xs={6}>` need to either move to `<Grid size={{ xs: 6 }}>` OR add the import rename to `GridLegacy`.

**Detection:**
```
<Grid\s+item|item\s+xs=|item\s+sm=|item\s+md=
```

**Codemod:** `npx @mui/codemod@latest v7.0.0/grid-props <path>`

**Severity:** Depends entirely on whether the codebase used `Grid` heavily. If `Grid2` was already adopted, near-zero work.

## Deep imports beyond one level removed

`import createTheme from '@mui/material/styles/createTheme'` no longer works. Must be `import { createTheme } from '@mui/material/styles'`.

**Detection:**
```
from ['"]@mui/material/[^'"/]+/[^'"]+['"]
```
(Filters: import depth >1 inside @mui/material.)

**Severity:** Low; mechanical.

## Lab components moved to Material

`@mui/lab` exports relocated to `@mui/material`: Alert, AlertTitle, Autocomplete, AvatarGroup, Pagination, PaginationItem, Rating, Skeleton, SpeedDial, SpeedDialAction, SpeedDialIcon, ToggleButton, ToggleButtonGroup. Also TabContext/TabList/TabPanel.

**Detection:**
```
from ['"]@mui/lab/(Alert|AlertTitle|Autocomplete|AvatarGroup|Pagination|PaginationItem|Rating|Skeleton|SpeedDial|SpeedDialAction|SpeedDialIcon|ToggleButton|ToggleButtonGroup|TabContext|TabList|TabPanel)
```

**Codemod:** `npx @mui/codemod@latest v7.0.0/lab-removed-components <path>`

**Severity:** Low-Medium; well-covered by codemod.

## Removed APIs

- `createMuiTheme` → use `createTheme`
- `experimentalStyled` → use `styled`
- `Hidden` component → use `useMediaQuery` or `sx={{ display: { xs: 'none', md: 'block' } }}`
- `Dialog.onBackdropClick` and `Modal.onBackdropClick` → use `onClose` with `reason === 'backdropClick'`

**Detection:**
```
createMuiTheme|experimentalStyled|@mui/material/Hidden|onBackdropClick
```

**Severity:** Medium per occurrence; rare in modern codebases.

## Preset

```
npx @mui/codemod@latest v7.0.0/preset-safe <path>
```
