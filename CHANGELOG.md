# Changelog

## [Unreleased] — MUI v9 upgrade

### Breaking Changes

#### Peer dependency: MUI v6 → v9
All `@mui/*` packages have been upgraded from v6 to v9. Consumers must upgrade their own peer dependencies accordingly:

| Package | Old version | New version |
|---|---|---|
| `@mui/material` | `^6.4.0` | `^9.0.1` |
| `@mui/icons-material` | `^6.4.0` | `^9.0.1` |
| `@mui/lab` | `6.0.0-beta.23` | `9.0.0-beta.3` |
| `@mui/system` | `^6.4.0` | `^9.0.1` |
| `@mui/types` | `^7.2.21` | `^9.0.0` |
| `@mui/x-charts` | `^7.24.0` | `^9.3.0` |
| `@mui/x-date-pickers` | `^7.24.0` | `^9.3.0` |

#### `DateTime` — date adapter import path changed
MUI X v9 dropped the `V3` suffix from the date-fns adapter. If your application directly imports the adapter:

```diff
- import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
+ import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
```

#### `Autocomplete` — `renderTags` prop removed
MUI v9 removed the `renderTags` prop in favor of `renderValue`. If you were passing `renderTags` through to the underlying MUI component via rest props, it will no longer have any effect. Use `renderValue` instead.

#### TypeScript — theme augmentation module path changed
The module augmentation path for custom typography variants has moved. Update any custom theme augmentation in your app:

```diff
- declare module '@mui/material/styles/createTypography' {
-   export interface TypographyOptions { ... }
-   export interface Typography { ... }
- }
+ declare module '@mui/material/styles' {
+   export interface TypographyVariantsOptions { ... }
+   export interface TypographyVariants { ... }
+ }
```

---

### Changes

#### `TextField`
- `InputProps`, `inputProps`, and `InputLabelProps` are now legacy-compatibility shims: they continue to be accepted as props but are translated internally to MUI v9's `slotProps.input`, `slotProps.htmlInput`, and `slotProps.inputLabel` respectively. No consumer-facing change is required.
- The numeric stepper `+`/`-` buttons no longer wrap in `InputAdornment` internally; this is handled via `slotProps`.

#### `Autocomplete`
- Internal chip rendering migrated from `renderTags` / `AutocompleteRenderGetTagProps` to `renderValue` / `AutocompleteRenderValueGetItemProps` (MUI v9 API).
- Slot props forwarding from Autocomplete params updated to use `params.slotProps` instead of `params.inputProps`.

#### `DeprecatedAutocomplete`
- Same `renderTags` → `renderValue` internal migration as `Autocomplete`.
- Fixed an edge case in the initial `loadOptions` call when `defaultOptions` is an array and `simpleValue` is false: the component now correctly calls `loadOptions` with the initial value's label on mount (MUI v9 no longer triggers `onInputChange` at mount when a value is set).
- Internal params access updated to use `params.slotProps.*` instead of `params.inputProps` / `params.InputProps` / `params.InputLabelProps`.

#### `Tags` (`TagsInput`)
- `startAdornment` (the tag chips) is now passed as a direct prop instead of through `slotProps.input.startAdornment`. The `textFieldProps` prop behaviour is unchanged.

#### `DateTime`
- Date picker slot prop generics removed (MUI X v9 no longer requires the date type parameter on `DatePickerProps`, `DateTimePickerProps`, etc.).

#### `Forbidden` / `NotFound`
- Reverted from `Grid2` back to `Grid` (Grid v1) for consistency with the rest of the component library.

#### `Pagination`
- Same `Grid2` → `Grid` revert as above.

#### Theme overrides
- **Button**: `containedInherit`, `outlinedInherit`, and `textInherit` styleOverrides replaced with a `variants` array entry — the MUI v9 way to apply variant+colour combination styles.
- **Card**: `MuiCardHeader.defaultProps.titleTypographyProps` / `subheaderTypographyProps` replaced with `slotProps.title` / `slotProps.subheader` (MUI v9 API).
- **Typography**: `TypographyOptions` import source changed from `@mui/material/styles/createTypography` to `TypographyVariantsOptions` from `@mui/material/styles`.

#### `Dialog`
- Internal layout props (`alignItems`, `justifyContent`, `p`) on `Stack` moved to the `sx` prop (MUI v9 drops shorthand layout props on `Stack`).

#### `NavPills`
- `padding` and shorthand spacing props on `Box` moved to `sx` (MUI v9 removes direct spacing shorthands on `Box`).

#### `Toast`
- Same `Stack` layout props → `sx` migration as `Dialog`.

#### `ExpandingText`
- `display` prop on `Typography` / `ExpandAction` moved to `sx={{ display }}` (MUI v9).

#### `StatsChart` (`Chart`)
- `GaugeContainerProps` cast now uses `Omit<GaugeContainerProps, 'ref'>` to satisfy MUI X v9 stricter ref typing.

---

### Tooling

#### Storybook v8 → v10
The Storybook setup has been upgraded from v8 to v10. This only affects the development environment and documentation site; it has no impact on library consumers.

- Replaced `@storybook/addon-essentials` with the individual `@storybook/addon-docs`.
- Added `@storybook/addon-mcp` for AI-assisted component inspection.
- Upgraded `@storybook/addon-webpack5-compiler-swc` to v4.
- Updated `eslint-plugin-storybook` to match the new Storybook version.

#### Test utilities
- `customRender` parameter type changed from `JSX.Element` to `React.ReactElement`.
- `userClick` helper updated to use `fireEvent.click()` instead of the native `.click()` method for more consistent test behaviour.
- Added `structuredClone` polyfill for JSDOM (required by `@mui/x-internal-gestures` in MUI X v9).
- Suppressed known MUI v9 internal "not wrapped in act()" warnings in the test environment; these originate from MUI's async internals (ripple animations, Autocomplete dropdown effects) and cannot be resolved from test code.
