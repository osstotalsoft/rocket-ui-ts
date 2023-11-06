import { FilledInputProps, InputProps, TextFieldProps as MuiTextFieldProps, OutlinedInputProps } from '@mui/material'
import { InputBaseComponentProps } from '@mui/material'
import { NumberFormatProps } from 'react-number-format'

export type TextFieldVariant = 'standard' | 'outlined' | 'filled'

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

export type NumberTextFieldProps = InputBaseComponentProps &
  Omit<NumberFormatProps, 'onChange'> & {
    //InputPropsVariant & NumericFormatCustomProps & PatternFormatProps
    /**
     * Callback fired when the value is changed.
     *
     * @param {unknown} value The target value from the event source of the callback.
     */
    onChange?: (value?: unknown, event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    /**
     * The current language, preferably taken from the i18next (i18.language) or another internationalization library.
     */
    language?: string
    /**
     * The currency that will be displayed as a pre-fix.
     */
    currency?: string
    /**
     * If `true`, will display `+` and `-` buttons for increasing/decreasing the value.
     */
    isStepper?: boolean
    /**
     * Lower limit for the input.
     */
    minValue?: number
    /**
     * Upper limit for the input.
     */
    maxValue?: number
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
  }

export type TextFieldProps = Omit<MuiTextFieldProps, 'onChange' | 'variant' | 'InputProps'> &
  NumberTextFieldProps & {
    /**
     * Callback fired when the value is changed.
     *
     * @param {unknown} value The target value from the event source of the callback.
     */
    onChange?: (value?: unknown, event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    /**
     * @default false
     * If `true`, the input will accept only numeric values.
     */
    isNumeric?: boolean
    /**
     * Props applied to the Input element.
     */
    InputProps?:
      | Omit<Partial<FilledInputProps>, 'startAdornment' | 'endAdornment'>
      | Omit<Partial<OutlinedInputProps>, 'startAdornment' | 'endAdornment'>
      | Omit<Partial<InputProps>, 'startAdornment' | 'endAdornment'>
    /**
     * Start adornment of component.
     */
    startAdornment?: React.ReactNode
    /**
     * End adornment of component.
     */
    endAdornment?: React.ReactNode
    /**
     * @default 0
     * The delay of debouncing.
     */
    debounceBy?: number
    /**
     * If `true`, a clear button is shown.
     */
    isClearable?: boolean
    /**
     * Used together with `isStepper` prop; the value by which the current input increases.
     */
    step?: number
    /**
     * @default 'standard'
     * The variant to use.
     */
    variant?: TextFieldVariant
  }
