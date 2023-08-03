import { AutocompleteChangeReason, AutocompleteValue, AutocompleteProps as MuiAutocompleteProps } from '@mui/material'
import { TypographyColor } from '../../dataDisplay/Typography'
import { TextFieldProps } from '../TextField'
import { AutocompleteRenderInputParams } from '@mui/material'

export interface OptionProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * The string value for a given option
   */
  optionLabel?: String
  /**
   * Custom label displayed when @creatable is true
   */
  createdLabel?: String
  /**
   *  The selected option(s)
   */
  selected?: boolean
  /**
   * @default false
   * If true, the options list will have checkboxes.
   */
  withCheckboxes?: boolean
}

export type LoadOptionsPaginated = (input: string, options: ReadonlyArray<any>, additional?: any) => Promise<{loadedOptions: ReadonlyArray<any>, more: Boolean, additional: any}>

export type LoadOptions = (input: string) => Promise<any>

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends Omit<
    MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    | 'onChange'
    | 'renderInput'
    | 'options'
    | 'clearOnBlur'
    | 'disableCloseOnSelect'
    | 'filterSelectedOptions'
    | 'filterOptions'
    | 'isOptionEqualToValue'
    | 'multiple'
    | 'disableClearable'
    | 'renderTags'
  > {
  /**
   * Array of options.
   */
  options?: ReadonlyArray<T>
  /**
   * Callback fired when the value changes.
   * @param {T|T[]} value The new value of the component.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onChange?: (
    value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    event?: React.SyntheticEvent,
    reason?: AutocompleteChangeReason
  ) => void
  /**
   * The content of the helper under the input.
   */
  helperText?: React.ReactNode
  /**
   * Text to be displayed as a placeholder in the text field.
   */
  placeholder?: string
  /**
   * @default false
   * If true, the user can select multiple values from list.
   */
  isMultiSelection?: boolean
  /**
   * @default false
   * If true, the user can clear the selected value.
   */
  isClearable?: boolean
  /**
   * @default true
   * If false, the user cannot type in Autocomplete, filter options or create new ones.
   */
  isSearchable?: boolean
  /**
   * @default false
   * If true, the value set on change will be set to option[valueKey]/
   * We use this prop when our options are objects.
   * If our options are strings, we do not need to send this prop
   * as this functionality is handled by default.
   */
  simpleValue?: boolean
  /**
   * Label to be displayed in the heading component.
   */
  label?: string
  /**
   * @default "id"
   * The key of values from options.
   */
  valueKey?: string
  /**
   * @default "name"
   * Which property of our option object will be displayed as label.
   */
  labelKey?: string
  /**
   * @default false
   * If true, the helper text is displayed when an error pops up.
   */
  error?: boolean
  /**
   * The value of label when a new option is added.
   */
  createdLabel?: string
  /**
   * Function that returns a promise, which resolves to the set of options to be used once the promise resolves.
   */
  loadOptions?: LoadOptions | LoadOptionsPaginated
  /**
   * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
   */
  defaultOptions?: boolean | object[]
  /**
   * @default "textSecondary"
   * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
   */
  typographyContentColor?: TypographyColor
  /**
   * Text to display when there are no options.
   * For localization purposes, you can use the provided translations.
   */
  noOptionsText?: React.ReactNode
  /**
   * The color of selected input.
   */
  inputSelectedColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string
  /**
   *  Properties that will be passed to the rendered input. This is a TextField.
   */
  inputTextFieldProps?: Partial<TextFieldProps>
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required?: boolean
  /**
   * @default false
   * If true, the options list will have checkboxes.
   */
  withCheckboxes?: boolean
  /**
   * @default false
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
   * his own values.
   */
  creatable?: boolean
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode
  /**
  * @default false
  * If true, the options list will be loaded incrementally using the paginated loadOptions callback
  */
  isPaginated?: boolean
}
