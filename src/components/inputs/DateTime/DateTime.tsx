import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  TimePicker,
  LocalizationProvider,
  DatePicker,
  DateTimePicker,
  DatePickerProps,
  DateTimePickerProps
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
import TextField from '../TextField'
import { DateProps } from './types'

const localeMap = {
  de: de,
  ['en-US']: enUS,
  fr: fr,
  ro: ro,
  ru: ru
}

const defaultComponents = {
  OpenPickerIcon: CalendarTodaySmallIcon
}

const displayType = {
  date: DatePicker,
  dateTime: DateTimePicker,
  time: TimePicker
}

const DateTime = React.forwardRef<HTMLDivElement, DateProps>(
  ({
    dateAdapter = AdapterDateFns,
    locale,
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
      v => {
        const changeValue = origOnChange ?? setValue
        changeValue(v)
      },
      [origOnChange]
    )
    const isClearable = useMemo(() => Boolean(clearable) && Boolean(value), [clearable, value])
    const handleClear = useCallback(() => {
      handleChange(null)
    }, [handleChange])
    // ---------------------------------------------

    const Picker = useMemo(() => displayType[showPicker] ?? displayType.date, [showPicker])
    const mergedComponents = useMemo(() => R.mergeRight(defaultComponents, components), [components])

    const renderInput = useCallback(
      params => {
        const OpenPickerIcon = mergedComponents.OpenPickerIcon
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

    const localeUsed = useMemo(() => localeMap[format] ?? locale ?? localeMap.ro, [format, locale])

    return (
      <LocalizationProvider dateAdapter={dateAdapter} adapterLocale={localeUsed}>
        <Picker
          renderInput={renderInput}
          components={mergedComponents}
          open={open}
          onClose={handleClose}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
      </LocalizationProvider>
    )
  }
)

DateTime.propTypes = {
  /**
   * @default AdapterDateFns
   * DateIO adapter class function
   */
  dateAdapter: PropTypes.func,
  /**
   * The locale object/string from the engine you use for displaying the date
   */
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Choose the type of picker you want displayed by the component
   * @default 'date'
   */
  showPicker: PropTypes.oneOf(['date', 'dateTime', 'time']),
  /**
   * The components used for each slot. Either a string to use a HTML element or a component.
   */
  components: PropTypes.shape({
    LeftArrowButton: PropTypes.elementType,
    LeftArrowIcon: PropTypes.elementType,
    OpenPickerIcon: PropTypes.elementType,
    RightArrowButton: PropTypes.elementType,
    RightArrowIcon: PropTypes.elementType,
    SwitchViewButton: PropTypes.elementType,
    SwitchViewIcon: PropTypes.elementType
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
