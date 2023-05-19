// // Copyright (c) TotalSoft.
// // This source code is licensed under the MIT license.

import { SvgIconComponent } from '@mui/icons-material'
import {
  DatePickerProps,
  DateTimePickerProps,
  DesktopDateTimePickerProps,
  MobileDateTimePickerProps,
  TimePickerProps
} from '@mui/x-date-pickers'
import { Locale } from 'date-fns'

export type PickerType = {
  date: DatePickerProps<any, any>
  dateTime: DateTimePickerProps<any, any>
  time: TimePickerProps<any, any>
}

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
  OpenPickerIcon?: SvgIconComponent
  disabled?: boolean
}

export interface DateProps
  extends DateTimePickerProps<Date, Date>,
    Omit<DatePickerProps<Date, Date>, 'onError' | 'onViewChange' | 'openTo' | 'views'>,
    Omit<TimePickerProps<Date, Date>, 'components' | 'componentsProps' | 'onError' | 'onViewChange' | 'openTo' | 'views'> {}

// export interface DateTimeProps<TDate = unknown>
//   extends DesktopDateTimePickerProps<TDate, any>,
//     MobileDateTimePickerProps<TDate, any> {
//   //   /** DateIO adapter class function */
//   //   dateAdapter?: new (...args: []) => MuiPickersAdapter<unknown>
//   /** Locale for the date library you are using */
//   locale?: LocaleMapType
//   /**
//    * @default 'date'
//    * Choose the Picker to be displayed between: DateTimePicker, DatePicker, TimePicker, from material ui.
//    */
//   showPicker?: 'date' | 'dateTime' | 'time'
//   //   /**
//   //    * The props that will be passed down to the TextField component that will act as the `renderInput` for the picker.
//   //    */
//   //   inputProps?: TextFieldProps
//   /**
//    * @default 'ro'
//    * A small sample of ISO format names that will be used to display the date.
//    */
//   format?: 'de' | 'en-US' | 'fr' | 'ro' | 'ru'
//   //   /**
//   //    * Choose if you want a dedicated button to clear the value from the picker
//   //    */
//   //   clearable?: boolean
//   //   /**
//   //    * This property will be passed to the renderInput
//   //    * If `true`, the label is displayed in an error state.
//   //    */
//   //   error?: boolean
//   //   /**
//   //    * This property will be passed to the renderInput
//   //    * The helper text content.
//   //    */
//   //   helperText?: React.ReactNode
// }
