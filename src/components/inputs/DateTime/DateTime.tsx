import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  TimePicker,
  LocalizationProvider,
  DatePicker,
  DateTimePicker,
  DateTimePickerProps,
  TimePickerProps,
  DatePickerProps
} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CalendarTodaySmallIcon } from './DateTimeStyles'
import * as R from 'ramda'
import ro from 'date-fns/locale/ro'
import fr from 'date-fns/locale/fr'
import ru from 'date-fns/locale/ru'
import de from 'date-fns/locale/de'
import enUS from 'date-fns/locale/en-US'
import DateTimeEndAdornment from './DateTimeEndAdornment'
import TextField, { TextFieldProps } from '../TextField'
import { T, DateTimeProps, CustomSlotsComponent } from './types'
import { SvgIconComponent } from '@mui/icons-material'
import { DateTimePickerSlotsComponent } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker'
import { TimePickerSlotsComponent } from '@mui/x-date-pickers/TimePicker/TimePicker'
import { DatePickerSlotsComponent } from '@mui/x-date-pickers/DatePicker/DatePicker'

const localeMap = {
  de: de,
  ['en-US']: enUS,
  fr: fr,
  ro: ro,
  ru: ru
}

const defaultComponents = {
  OpenPickerIcon: CalendarTodaySmallIcon
} as CustomSlotsComponent

const DateTime: React.FC<DateTimeProps> = ({
  dateAdapter = AdapterDateFns,
  adapterLocale,
  showPicker = 'date',
  components,
  inputProps,
  format = 'ro',
  open: origOpen = false,
  onClose,
  value: origValue = null,
  onChange: origOnChange,
  clearable,
  disabled,
  error,
  helperText,
  ...rest
}) => {
  // Code to serve the "Open/Close" functionality
  const [open, setOpen] = useState(origOpen)
  useLayoutEffect(() => {
    setOpen(origOpen)
  }, [origOpen])

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
    if (onClose) onClose()
  }, [onClose])
  // ---------------------------------------------

  // Code to serve the "Clearable" functionality
  const [value, setValue] = useState(origValue)
  useLayoutEffect(() => {
    setValue(origValue)
  }, [origValue])
  const handleChange = useCallback(
    (value: T) => {
      const changeValue = origOnChange ?? setValue
      changeValue(value)
    },
    [origOnChange]
  )
  const isClearable = useMemo(() => Boolean(clearable) && Boolean(value), [clearable, value])
  const handleClear = useCallback(() => {
    handleChange(null)
  }, [handleChange])
  // ---------------------------------------------

  const mergedComponents = useMemo(() => R.mergeRight(defaultComponents, components), [components])

  const renderInput = useCallback(
    (params: Partial<TextFieldProps>) => {
      const OpenPickerIcon = mergedComponents.OpenPickerIcon as SvgIconComponent
      return (
        <TextField
          fullWidth
          {...inputProps}
          {...params}
          error={error}
          helperText={helperText}
          InputProps={{
            endAdornment: (
              <DateTimeEndAdornment
                isClearable={isClearable}
                onClear={handleClear}
                onOpen={handleOpen}
                OpenPickerIcon={OpenPickerIcon}
                disabled={disabled}
              />
            )
          }}
        />
      )
    },
    [disabled, error, handleClear, handleOpen, helperText, inputProps, isClearable, mergedComponents.OpenPickerIcon]
  )

  const localeUsed = useMemo(() => localeMap[format] ?? adapterLocale ?? localeMap.ro, [format, adapterLocale])

  const commonProps = { renderInput, open, onClose: handleClose, value, onChange: handleChange, disabled }
  const renderPicker = () => {
    switch (showPicker) {
      case 'dateTime':
        return (
          <DateTimePicker
            components={mergedComponents as Partial<DateTimePickerSlotsComponent & CustomSlotsComponent>}
            {...commonProps}
            {...(rest as DateTimePickerProps<T, T>)}
          />
        )
      case 'time':
        return (
          <TimePicker
            components={mergedComponents as Partial<TimePickerSlotsComponent & CustomSlotsComponent>}
            {...commonProps}
            {...(rest as TimePickerProps<T, T>)}
          />
        )

      default:
        return (
          <DatePicker
            components={mergedComponents as Partial<DatePickerSlotsComponent & CustomSlotsComponent>}
            {...commonProps}
            {...(rest as DatePickerProps<T, T>)}
          />
        )
    }
  }
  return (
    <LocalizationProvider dateAdapter={dateAdapter} adapterLocale={localeUsed}>
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
   * Choose the type of picker you want displayed by the component
   * @default 'date'
   */
  showPicker: PropTypes.oneOf(['date', 'dateTime', 'time']),
  /**
   * The components used for each slot. Either a string to use a HTML element or a component.
   */
  components: PropTypes.shape({
    LeftArrowButton: PropTypes.any,
    LeftArrowIcon: PropTypes.any,
    OpenPickerIcon: PropTypes.any,
    RightArrowButton: PropTypes.any,
    RightArrowIcon: PropTypes.any,
    SwitchViewButton: PropTypes.any,
    SwitchViewIcon: PropTypes.any
  }),
  /**
   *  Properties that will be passed to the rendered input. This is a TextField.
   */
  inputProps: PropTypes.object,
  /**
   * A small sample of ISO format names that will be used to display the date.
   * @default 'ro'
   */
  format: PropTypes.oneOf(['de', 'en-US', 'fr', 'ro', 'ru']),
  /**
   * @default null
   * Value of the picker
   */
  value: PropTypes.any,
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   */
  onChange: PropTypes.func,
  /**
   * Dedicated button for clearing the value
   */
  clearable: PropTypes.bool,
  /**
   * @default false
   * Control the popup or dialog open state.
   */
  open: PropTypes.bool,
  /**
   * Callback fired when the popup requests to be closed. Use in controlled mode (see open).
   */
  onClose: PropTypes.func,
  /**
   * If true, the picker and text field are disabled.
   */
  disabled: PropTypes.bool,
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
