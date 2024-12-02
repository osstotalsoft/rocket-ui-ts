import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteOwnerState,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  AutocompleteValue,
  ChipTypeMap,
  AutocompleteProps as MuiAutocompleteProps
} from '@mui/material'
import { TextFieldProps } from '../TextField'

export interface OptionProps {
  /**
   * The display value for a given option
   */
  label: React.ReactNode
  /**
   * The props to apply on the li element.
   */
  liProps: React.HTMLAttributes<HTMLLIElement> & { key: any }
  /**
   *  The selected option(s)
   */
  selected?: boolean
  /**
   * @default false
   * If true, the options list will have checkboxes.
   */
  withCheckboxes?: boolean
  /**
   * Item option.
   */
  option: any
}

export type LoadOptionsPaginatedResult<T> = { loadedOptions: ReadonlyArray<T>; more: boolean; additional: unknown }

export type LoadOptionsPaginated<T> = (
  input: string,
  options: ReadonlyArray<T>,
  additional?: any
) => Promise<LoadOptionsPaginatedResult<T>>

export type LoadOptions<T> = (input: string) => Promise<T[]>

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<
    MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    | 'options'
    | 'getOptionLabel'
    | 'renderOption'
    | 'onChange'
    | 'loadingText'
    | 'loading'
    | 'open'
    | 'onOpen'
    | 'onClose'
    | 'onInputChange'
    | 'renderInput'
  > {
  /**
   * Array of options.
   */
  options?: ReadonlyArray<T>
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if renderOption is not provided).
   * If used in free solo mode, it must accept both the type of the options and a string.
   * @param {T} option The option to render.
   * @returns {string} The string value of the option that should be displayed.
   */
  getOptionLabel?: (option: T) => string
  /**
   * The key of values from options.
   * @default "id"
   */
  valueKey?: string | ((option: T) => string)
  /**
   * Which property of our option object will be displayed as label.
   * @default "name"
   */
  labelKey?: string | ((option: T) => string)
  /**
   * If true, the user can select multiple values from list.
   * @default false
   */
  isMultiSelection?: boolean
  /**
   * If true, the options list will have checkboxes.
   * @default false
   */
  withCheckboxes?: boolean
  /**
   * If true, the user can clear the selected value.
   * @default false
   */
  isClearable?: boolean
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {T} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & { key: any },
    option: T,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
  ) => React.ReactNode
  /**
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
   * his own values.
   * @default false
   */
  creatable?: boolean
  /**
   * The value of label when a new option is added.
   */
  createdLabel?: string
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange?: (
    value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    event: React.SyntheticEvent,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>
  ) => void
  /**
   * Label to be displayed in the heading component.
   */
  label?: string
  /**
   * Text to be displayed as a placeholder in the text field.
   */
  placeholder?: string
  /**
   * If true, the helper text is displayed when an error pops up.
   * @default false
   */
  error?: boolean
  /**
   * The content of the helper under the input.
   */
  helperText?: React.ReactNode
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required?: boolean
  /**
   * If false, the user cannot type in Autocomplete, filter options or create new ones.
   * @default true
   */
  isSearchable?: boolean
  /**
   *  Properties that will be passed to the rendered input. This is a TextField.
   */
  inputTextFieldProps?: Partial<TextFieldProps>
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText?: React.ReactNode
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading?: boolean
  /**
   * Function that returns a promise, which resolves to the set of options to be used once the promise resolves.
   */
  loadOptions?: LoadOptions<T> | LoadOptionsPaginated<T>
  /**
   * If `true`, the component is shown.
   */
  open?: boolean
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @returns {void}
   */
  onOpen?: (event: React.SyntheticEvent) => void
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose?: (event: React.SyntheticEvent, reason: AutocompleteCloseReason) => void
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   * @returns {void}
   */
  onInputChange?: (event: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => void
  /**
   * If true, the options list will be loaded incrementally using the paginated loadOptions callback
   * @default false
   */
  isPaginated?: boolean
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode
}
