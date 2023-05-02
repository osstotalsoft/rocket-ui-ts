import { NumericFormatProps, PatternFormatProps } from 'react-number-format'
import { InputProps, OutlinedInputProps, FilledInputProps, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { InputBaseComponentProps } from '@mui/material'

export type TextFieldVariant = 'standard' | 'outlined' | 'filled'

export interface NumericFormatCustomProps extends NumericFormatProps {
  language?: string
  currency?: string
  isStepper?: boolean
  minValue?: number
  maxValue?: number
}

export type NumberFormatProps = InputPropsVariant & NumericFormatCustomProps & PatternFormatProps

export interface ClearButtonProps {
  onClearInput: () => void
  disabled?: boolean
}

export interface AddButtonProps {
  onAdd: () => void
}

export interface SubtractButtonProps {
  onSubtract: () => void
}

export type InputPropsVariant = Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>

export type InputCustomProps = InputPropsVariant | NumberFormatProps

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant' | 'InputProps' | 'inputComponent'> {
  /**
   * @default false
   * If `true`, the input will accept only numeric values.
   */
  isNumeric?: boolean
  /**
   * Start adornment of component. (Usually an InputAdornment from Material-UI)
   */
  startAdornment?: React.ReactNode
  /**
   * End adornment of component. (Usually an InputAdornment from Material-UI)
   */
  endAdornment?: React.ReactNode
  /**
   * @default 0
   * The delay of debouncing.
   */
  debounceBy?: number
  /**
   * @default 2
   * If defined, it limits to given decimal scale. Used with `isNumeric` prop.
   */
  decimalScale?: number
  /**
   * @default true
   * If `true`, it add 0s to match given decimalScale. Used with `isNumeric` prop.
   */
  fixedDecimalScale?: boolean
  /**
   * @default true
   * Character that separates thousands from hundreds. Used with `isNumeric` prop.
   */
  thousandSeparator?: string | boolean
  /**
   * @default '.'
   * Character that separates decimals from integers. Used with `isNumeric` prop.
   */
  decimalSeparator?: string
  /**
   * The current language, preferably taken from the i18next (i18.language) or another internationalization library.
   */
  language?: string
  /**
   * The currency that will be displayed as a pre-fix.
   */
  currency?: string
  /**
   * If `true`, a clear button is shown.
   */
  isClearable?: boolean
  /**
   * If `true`, will display `+` and `-` buttons for increasing/decreasing the value.
   */
  isStepper?: boolean
  /**
   * Used together with `isStepper` prop; the value by which the current input increases.
   */
  step?: number
  /**
   * Lower limit for the input.
   */
  minValue?: number
  /**
   * Upper limit for the input.
   */
  maxValue?: number
  /**
   * @default 'standard'
   * The variant to use.
   */
  variant?: TextFieldVariant
  /**
   * Props applied to the Input element. It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.
   */
  InputProps?: InputCustomProps
  inputComponent?: React.ElementType<InputCustomProps>
}
