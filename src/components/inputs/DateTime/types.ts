// // Copyright (c) TotalSoft.
// // This source code is licensed under the MIT license.

import { DatePickerProps, DateTimePickerProps, LocalizationProviderProps, TimePickerProps } from '@mui/x-date-pickers'
import { Locale } from 'date-fns'
import { TextFieldProps } from '../TextField'
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals'

export type LocaleMapType = {
  de: Locale
  ['en-US']: Locale
  fr: Locale
  ro: Locale
  ru: Locale
}

export interface DateTimeEndAdornmentProps {
  isClearable?: boolean
  onClear?: React.MouseEventHandler<HTMLButtonElement>
  onOpen?: React.MouseEventHandler<HTMLButtonElement>
  OpenPickerIcon?: React.ElementType
  disabled?: boolean
}

export type CustomSlotsComponent = {
  OpenPickerIcon?: React.ElementType
}

export type DateTimeProps = (
  | Omit<DateTimePickerProps<Date, Date>, 'onChange' | 'renderInput'>
  | Omit<DatePickerProps<Date, Date>, 'onChange' | 'renderInput'>
  | Omit<TimePickerProps<Date, Date>, 'onChange' | 'renderInput'>
) &
  Omit<LocalizationProviderProps, 'dateAdapter'> & {
    /**
     * Callback fired when the value (the selected date) changes @DateIOType.
     * @template TValue
     * @param {Date} value The new parsed value.
     * @param {string} keyboardInputValue The current value of the keyboard input.
     */
    onChange?: (value: Date, keyboardInputValue?: string) => void
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `props` argument of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props) that you need to forward.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example ```jsx
     * renderInput={props => <TextField {...props} />}
     * ````
     * @param {TextFieldProps} props The props of the input.
     * @returns {React.ReactNode} The node to render as the input.
     */
    renderInput?: (props: TextFieldProps) => React.ReactElement
    /**
     * @default 'ro'
     * A small sample of ISO format names that will be used to display the date.
     */
    format?: string & keyof LocaleMapType
    /**
     * @default 'date'
     * Choose the Picker to be displayed between: DateTimePicker, DatePicker, TimePicker, from material ui.
     */
    showPicker?: 'date' | 'dateTime' | 'time'
    /**
     * The props that will be passed down to the TextField component that will act as the `renderInput` for the picker.
     */
    inputProps?: TextFieldProps
    /**
     * Choose if you want a dedicated button to clear the value from the picker
     */
    clearable?: boolean
    /**
     * This property will be passed to the renderInput
     * If `true`, the label is displayed in an error state.
     */
    error?: boolean
    /**
     * This property will be passed to the renderInput
     * The helper text content.
     */
    helperText?: React.ReactNode
    /** DateIO adapter class function */
    dateAdapter?: new (...args: any) => MuiPickersAdapter<unknown>
  }
