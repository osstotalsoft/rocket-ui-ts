# MUI X packages — per-major migration notes

MUI X has independent versioning from Core. A bump to `@mui/material@v9` does NOT require `@mui/x-*@v9`. But the X packages have their own peer-dep constraints, so realistic upgrades touch both.

## @mui/x-date-pickers

### v6 → v7
- Adapter API breaking change: `LocalizationProvider` now uses adapter classes from `@mui/x-date-pickers/AdapterDateFns` directly (no factory).
- `renderInput` prop on pickers removed → use `slots.textField` / `slotProps.textField`.

**Detection:**
```
renderInput=\{|LocalizationProvider
```

**Severity:** High if `renderInput` is used (touches every picker).

### v7 → v8
- Date library minimum versions bumped (`date-fns` ≥3, `dayjs` ≥1.11, etc.).
- `DateField`, `TimeField` reach stable.

### v8 → v9
- Smaller surface; slot/slotProps consolidation in line with Core v9.

## @mui/x-charts

### v6 → v7
- `XAxis` / `YAxis` series prop reshuffles.
- `barCategoryGap` → `categoryGap`.

### v7 → v8
- `slots`/`slotProps` consolidation (matches Core direction).
- Server-side rendering improvements; no app-side changes for most.

### v8 → v9
- Per-component slotProps rename, similar to Core.

## @mui/x-data-grid

The largest X surface. Breaking changes per major are extensive. For each hop, fetch the dedicated migration guide via the MUI MCP:

```
mcp__mui_mcp__useMuiDocs("data-grid migration guide v6 to v7")
mcp__mui_mcp__useMuiDocs("data-grid migration guide v7 to v8")
mcp__mui_mcp__useMuiDocs("data-grid migration guide v8 to v9")
```

Then call `mcp__mui_mcp__fetchDocs` on the returned URLs to read the full guide. If the MUI MCP is unavailable, fall back to WebFetch.

**Common patterns:**
- `apiRef` shape changes per major
- `columns` definition slot renames
- Pagination API (server-side vs client-side) sometimes reshuffled

## Detection: figure out what's installed

```
node -p "Object.keys(require('./package.json').dependencies || {}).concat(Object.keys(require('./package.json').devDependencies || {})).filter(k => k.startsWith('@mui/x-'))"
```

For each `@mui/x-*` package found, query `mcp__mui_mcp__useMuiDocs` with `"<package-name> migration guide v{N-1} to v{N}"` for each hop and fetch the returned docs.

## Asking the user

Per Fork 7 in `decision-forks.md`: always ask whether to bundle the X upgrade with Core, or pin X to the highest current-Core-compatible version and defer.
