import {
  DatePickerProps,
  DateTimePickerProps,
  LocalizationProviderProps,
  MuiPickersAdapter,
  PickerChangeHandlerContext,
  TimePickerProps
} from '@mui/x-date-pickers'
import { Locale } from 'date-fns'

export type LocaleMapType = {
  de: Locale
  ['en-US']: Locale
  fr: Locale
  ro: Locale
}

export type DateTimeProps<TDate, TError> = Omit<
  DatePickerProps<Date> | DateTimePickerProps<Date> | TimePickerProps<Date>,
  'value' | 'onChange' | 'minDate' | 'maxDate'
> &
  Omit<LocalizationProviderProps<Date, Locale>, 'adapterLocale'> & {
    /**
     * Date library adapter class function.
     * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
     */
    dateAdapter?: new (...args: any) => MuiPickersAdapter<Date>
    /**
     * @default 'ro'
     * The adapterLocale object/string from the engine you use for displaying the date.
     */
    adapterLocale?: string | object
    /**
     * Callback fired when the value (the selected date) changes @DateIOType.
     * @param {Date} value The new parsed value.
     * @param {string} context The context containing the validation result of the current value.
     */
    onChange?: (value: TDate, context: PickerChangeHandlerContext<TError>) => void
    /**
     * @default 'ro'
     * A small sample of ISO format names that will be used to display the date.
     */
    localeFormat?: string & keyof LocaleMapType
    /**
     * @default 'date'
     * Choose the Picker to be displayed between: DateTimePicker, DatePicker, TimePicker, from Material UI.
     */
    showPicker?: 'date' | 'dateTime' | 'time'
    /**
     * @default: false
     * Choose if you want a dedicated button to clear the value from the picker.
     */
    isClearable?: boolean
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

    /**
     *The value currently displayed in the field
     */
    value: string | Date

    /**
     * The minimum selectable date.
     */
    minDate?: string | Date

    /**
     * The maximum selectable date.
     */
    maxDate?: string | Date
  }
