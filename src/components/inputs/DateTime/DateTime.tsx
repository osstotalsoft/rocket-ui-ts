import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  DatePicker,
  DatePickerProps,
  DatePickerSlotProps,
  DatePickerSlots,
  DateTimePicker,
  DateTimePickerProps,
  DateTimePickerSlotProps,
  DateTimePickerSlots,
  LocalizationProvider,
  TimePicker,
  TimePickerProps,
  TimePickerSlotProps,
  TimePickerSlots
} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { de, enUS, fr, ro } from 'date-fns/locale'
import { DateTimeProps } from './types'
import { cond, equals } from 'ramda'

const localeMap = { de, ['en-US']: enUS, fr, ro }

const DateTime: React.FC<DateTimeProps<Date, string>> = ({
  dateAdapter = AdapterDateFns,
  adapterLocale,
  value,
  onChange,
  isClearable = false,
  showPicker = 'date',
  slotProps = {},
  slots = {},
  localeFormat = 'ro',
  helperText,
  error,
  ...rest
}) => {
  const locale = useMemo(() => adapterLocale ?? localeMap[localeFormat] ?? ro, [adapterLocale, localeFormat])
  const commonSlotProps = useMemo(
    () => ({
      ...slotProps,
      field: { ...slotProps?.field, clearable: isClearable },
      textField: { ...slotProps?.textField, helperText, error }
    }),
    [error, helperText, isClearable, slotProps]
  )

  const renderPicker = useCallback(
    () =>
      cond([
        [
          equals('date'),
          () => (
            <DatePicker
              value={value}
              onChange={onChange}
              slotProps={commonSlotProps as DatePickerSlotProps<Date, false>}
              slots={slots as DatePickerSlots<Date>}
              {...(rest as DatePickerProps<Date>)}
            />
          )
        ],
        [
          equals('dateTime'),
          () => (
            <DateTimePicker
              value={value}
              onChange={onChange}
              slotProps={commonSlotProps as DateTimePickerSlotProps<Date, false>}
              slots={slots as DateTimePickerSlots<Date>}
              {...(rest as DateTimePickerProps<Date>)}
            />
          )
        ],
        [
          equals('time'),
          () => (
            <TimePicker
              value={value}
              onChange={onChange}
              slotProps={commonSlotProps as TimePickerSlotProps<Date, false>}
              slots={slots as TimePickerSlots<Date>}
              {...(rest as TimePickerProps<Date>)}
            />
          )
        ]
      ])(showPicker),
    [commonSlotProps, onChange, rest, showPicker, slots, value]
  )

  return (
    <LocalizationProvider dateAdapter={dateAdapter} adapterLocale={locale}>
      {renderPicker()}
    </LocalizationProvider>
  )
}

DateTime.propTypes = {
  /**
   * @default AdapterDateFns
   * DateIO adapter class function
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  dateAdapter: PropTypes.func,
  /**
   * The adapterLocale object/string from the engine you use for displaying the date
   */
  adapterLocale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * @default null
   * Value of the picker
   */
  value: PropTypes.instanceOf(Date),
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   */
  onChange: PropTypes.func,
  /**
   * @default 'date'
   * Choose the type of picker you want displayed by the component
   */
  showPicker: PropTypes.oneOf(['date', 'dateTime', 'time']),
  /**
   * @default {}
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,
  /**
   * @default {}
   * Override component slots.
   */
  slots: PropTypes.object,
  /**
   * @default 'ro'
   * A small sample of ISO format names that will be used to display the date.
   */
  localeFormat: PropTypes.oneOf(['de', 'en-US', 'fr', 'ro']),
  /**
   * If true, the label is displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node
}

export default DateTime
