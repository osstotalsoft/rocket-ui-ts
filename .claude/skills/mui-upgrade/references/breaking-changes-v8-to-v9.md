# MUI Core v8 → v9 breaking changes

This file is a quick-reference snapshot of the most common breaking changes and their grep detection patterns. It may not be exhaustive. Before starting per-component work, query `mcp__mui_mcp__useMuiDocs` with `"migration guide v8 to v9"` and call `mcp__mui_mcp__fetchDocs` on the returned URL to get the authoritative and up-to-date list.

This reference focuses on detection (how to find each pattern in the repo) and remediation (codemod or manual). Severity reflects how visible/risky the regression is if missed.

## Browser support floor

- Chrome ≥117, Firefox ≥121, Safari ≥17.0, Edge ≥121
- **Detection:** `package.json` → `browserslist`
- **Fix:** update browserslist arrays. Low risk, do it during Finalize.

## Slot props consolidation (highest-impact change)

These v8 props are **removed** in v9; all move under `slotProps`:

| v8 prop | v9 location |
|---|---|
| `InputProps` | `slotProps.input` |
| `inputProps` | `slotProps.htmlInput` |
| `SelectProps` | `slotProps.select` |
| `InputLabelProps` | `slotProps.inputLabel` |
| `FormHelperTextProps` | `slotProps.formHelperText` |

**Detection (Grep):**
```
\b(InputProps|inputProps|SelectProps|InputLabelProps|FormHelperTextProps)\b
```

**Codemod:** `npx @mui/codemod@latest v9.0.0/textfield-props <path>` and per-component variants.

**Severity:** High. The codemod handles ~70% of cases; the remainder is hand work for components that re-export these props publicly (see `decision-forks.md` Fork 1).

**Known gotcha — third-party input wrappers (react-number-format, react-imask, etc.):**
`InputProps.inputComponent = CustomWrapper` moves to `slotProps.input.inputComponent = CustomWrapper`.

**Do NOT** use `slots.htmlInput = CustomWrapper` for this case. `slots.htmlInput` replaces the `<input>` element directly, which bypasses `InputBaseInput` (MUI's styled input component). Because `InputBaseInput` is never rendered, its Emotion CSS (the `.MuiInputBase-input` rule covering `font: inherit`, `padding: 4px 0 5px`, `height: 1.4375em`, etc.) is never injected into the DOM. The result is an unstyled or visually broken input that passes tests but looks wrong.

`slotProps.input.inputComponent = CustomWrapper` preserves the old `inputComponent` code path: MUI renders `InputBaseInput` with `as={CustomWrapper}`, injecting its CSS while delegating the actual element to your wrapper. This is the documented MUI v9 pattern for all third-party input libraries.

See Fork 2 for the decision prompt and phrasing.

## System props removed from Box/Typography/Grid/Stack

Direct system props (`mt`, `mb`, `mx`, `px`, `color`, `bgcolor`, `fontSize`, `fontWeight`, etc.) no longer work as top-level props. Must use `sx`.

**Detection (Grep):**
```
<(Box|Stack|Typography|Grid)\s+(mt|mb|ml|mr|mx|my|pt|pb|pl|pr|px|py|color|bgcolor|fontSize|fontWeight)=
```

**Codemod:** `npx @mui/codemod@latest v9.0.0/system-props <path>`

**Severity:** Medium. Codemod is reliable; visual regressions rare.

## GridLegacy removed

If the codebase still imports `GridLegacy` (from v7's renaming), it must move to the new `Grid` API.

**Detection (Grep):**
```
GridLegacy
```

Also look for residual `<Grid item xs={...}>` patterns — these are v6-shape Grid that should have been migrated at v7.

**Severity:** Medium if present, zero if already on the new API.

## Stepper accessibility

`<Stepper>` now renders as `<ol role="tablist">`; `<Step>` renders as `<li>`. Children that override the root element type may break.

**Detection (Grep):**
```
<Stepper|<Step\b
```

**Severity:** Low for most use sites; High if there are custom `component` overrides on `Stepper`/`Step`. Hand-check.

## MenuItem outside Menu/MenuList throws

In v9, rendering `<MenuItem>` outside a `<Menu>` or `<MenuList>` throws an error (previously a warning).

**Detection:** grep for `<MenuItem` and verify the parent is `Menu`, `MenuList`, `Select`, or `Autocomplete`.

**Severity:** High if violated — runtime crash. Often used inside `<TextField select>` which is fine (Select wraps MenuList internally).

## ListItemIcon default min-width 56 → 36px

Visual-only change. Existing icons may overlap text.

**Detection (Grep):** `ListItemIcon`

**Severity:** Low-Medium. Always inspect visually after migration.

## Backdrop aria-hidden removed

Components that relied on Backdrop adding `aria-hidden="true"` need to add it explicitly.

**Detection:** `<Backdrop` usage with screen-reader-sensitive content nearby.

**Severity:** Low. Manual a11y review.

## Slider pointer events

`Slider` now uses Pointer Events instead of Mouse Events. Custom drag handlers built on `onMouseDown` need updating.

**Detection (Grep):** `<Slider` plus custom mouse-event handlers in the same file.

**Severity:** Medium if there are custom handlers, Low otherwise.

## ButtonBase keyboard dispatches MouseEvent

Custom code reading `event.type === 'keydown'` inside a `ButtonBase` onClick may break — keyboard activations now produce a synthesized `MouseEvent`.

**Detection:** any `onClick` handler that inspects `event.type` on Button/IconButton/MenuItem.

**Severity:** Low; rare pattern.

## Disabled non-native buttons stop firing handlers

In v8, `<Button disabled onClick={...}>` could still fire in some paths. v9 reliably suppresses. Check tests that asserted handler-was-called-on-disabled.

**Detection:** tests using `userEvent.click` on disabled buttons.

**Severity:** Low; usually a test-only fix.

## Dialog/Modal `disableEscapeKeyDown` removed

**Detection (Grep):** `disableEscapeKeyDown`

**Fix:** Check `reason === 'escapeKeyDown'` in `onClose`. See Fork 6.

**Severity:** Low.

## Material icons: legacy `*Outline` exports removed

23 icons that ended in `Outline` (duplicates of `Outlined`) removed.

**Detection (Grep):**
```
from ['"]@mui/icons-material/[A-Z][A-Za-z]*Outline['"]
```

**Codemod:** None; mechanical rename `Outline` → `Outlined` for affected imports.

**Severity:** Low.

## CSS class utilities removed

Deprecated classes like `.MuiButton-textPrimary`, `.MuiButton-containedSuccess` removed. Use compound selectors.

**Detection (Grep):**
```
\.Mui[A-Z][A-Za-z]*-(textPrimary|textSecondary|outlinedPrimary|outlinedSecondary|containedPrimary|containedSecondary|containedSuccess|containedError|containedWarning|containedInfo)
```

**Severity:** Medium if used in custom CSS / theme overrides; Low otherwise.

## TextField select variant root element

`<TextField select>` renders the InputLabel against a `<div>` instead of `<label>`. Affects custom label styling.

**Detection:** `<TextField select` and custom `InputLabelProps` or styled InputLabel.

**Severity:** Low; visual.

## Test environment

v9 replaced `NODE_ENV === 'test'` with feature detection. If tests set `NODE_ENV=test` to disable transitions, switch to `theme.transitions.create(...)` overrides or the `Transition`'s `appear` prop.

**Detection:** test setup files referencing `NODE_ENV`.

**Severity:** Low.

## Codemod presets

For wholesale migration:
```
npx @mui/codemod@latest v9.0.0/preset-safe <path>
```
Runs every "safe" codemod (system props, slot props for common components, deprecations). Always review the diff.
