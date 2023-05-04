import React, { useCallback, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NumberFormatValues, NumericFormat, PatternFormat } from 'react-number-format'
import { TextField as MuiTextField, StepButton, classes } from './TextFieldStyles'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { is, isNil } from 'ramda'
import i18n from 'i18next'
import { debounce } from 'lodash'
import { AddButtonProps, ClearButtonProps, NumberTextFieldProps, SubtractButtonProps, TextFieldProps } from './types'

const NumberTextField = React.forwardRef<HTMLElement, NumberTextFieldProps>(function NumberFormatCustom(props, ref) {
  const {
    value,
    onChange,
    decimalScale = 2,
    fixedDecimalScale = true,
    thousandSeparator = true,
    decimalSeparator,
    language = i18n.language,
    currency,
    isStepper,
    minValue,
    maxValue,
    format,
    mask,
    allowEmptyFormatting,
    ...other
  } = props

  const isAllowed = useCallback(
    ({ formattedValue, floatValue, value }: NumberFormatValues) => {
      if (floatValue && floatValue.toString().includes('e')) return false

      if (isNil(floatValue)) {
        return format ? value === '' : formattedValue === ''
      } else {
        return floatValue <= maxValue && floatValue >= minValue
      }
    },
    [maxValue, minValue, format]
  )

  const formatter = new Intl.NumberFormat(language)
  const thousandSep = thousandSeparator === true ? formatter.format(1111).replace(/1/g, '') : thousandSeparator
  const decimalSep = decimalSeparator || formatter.format(1.1).replace(/1/g, '')

  const currencyFormatter = currency && new Intl.NumberFormat(language, { style: 'currency', currency })
  const currencySymbol = currencyFormatter?.format(1).replace(/[\d,.\s]/g, '')

  const valueIsNumericString = is(String, value) && is(Number, Number(value))

  const handleValueFormatChange = useCallback(
    ({ value }: NumberFormatValues) => {
      onChange(value)
    },
    [onChange]
  )

  const handleValueChange = useCallback(
    ({ floatValue }: NumberFormatValues) => {
      onChange(floatValue)
    },
    [onChange]
  )

  return format ? (
    <PatternFormat
      format={format}
      mask={mask}
      getInputRef={ref}
      value={value}
      allowEmptyFormatting={allowEmptyFormatting}
      onValueChange={handleValueFormatChange}
      isAllowed={isAllowed}
      valueIsNumericString={valueIsNumericString}
    />
  ) : (
    <NumericFormat
      style={{ textAlign: isStepper ? 'center' : 'right' }}
      value={value}
      getInputRef={ref}
      onValueChange={handleValueChange}
      isAllowed={isAllowed}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      thousandSeparator={thousandSep}
      decimalSeparator={decimalSep}
      prefix={currencySymbol}
      valueIsNumericString={valueIsNumericString}
      {...other}
    />
  )
})

NumberTextField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  decimalScale: PropTypes.number,
  fixedDecimalScale: PropTypes.bool,
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  decimalSeparator: PropTypes.string,
  language: PropTypes.string,
  currency: PropTypes.string,
  isStepper: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  format: PropTypes.string,
  allowEmptyFormatting: PropTypes.bool
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClearInput, disabled }) => (
  <InputAdornment position="end">
    <IconButton disabled={disabled} aria-label="Clear" size="small" onClick={onClearInput}>
      <CloseIcon fontSize="small" />
    </IconButton>
  </InputAdornment>
)
ClearButton.propTypes = {
  onClearInput: PropTypes.func,
  disabled: PropTypes.bool
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => (
  <InputAdornment position="end">
    <StepButton onClick={onAdd}>+</StepButton>
  </InputAdornment>
)
AddButton.propTypes = {
  onAdd: PropTypes.func
}

const SubtractButton: React.FC<SubtractButtonProps> = ({ onSubtract }) => (
  <InputAdornment position="start">
    <StepButton onClick={onSubtract}>-</StepButton>
  </InputAdornment>
)
SubtractButton.propTypes = {
  onSubtract: PropTypes.func
}

/**
 * Text Fields let users enter and edit text.
 * At its core, it uses [Material-UI TextField](https://mui.com/material-ui/react-text-field/#basic-textfield).
 */
const TextField: React.FC<TextFieldProps> = ({
  isNumeric: receivedIsNumeric,
  inputProps,
  InputProps,
  endAdornment,
  startAdornment,
  fullWidth,
  InputLabelProps,
  value,
  onChange = () => {},
  debounceBy = 0,
  decimalScale = 2,
  fixedDecimalScale,
  thousandSeparator,
  decimalSeparator,
  language,
  currency,
  disabled,
  isClearable,
  isStepper = false,
  step = 1,
  minValue = -Infinity,
  maxValue = Infinity,
  variant = 'standard',
  ...rest
}) => {
  const isNumeric = receivedIsNumeric || isStepper

  const [liveValue, setLiveValue] = useState(value)
  useLayoutEffect(() => {
    setLiveValue(value)
  }, [value])

  // we need to disable this warning since the useCallback hook is not sure about the dependencies of debounce
  const debouncedOnChange = useCallback(disabled ? onChange : debounce(onChange, debounceBy), [debounceBy, onChange]) //eslint-disable-line react-hooks/exhaustive-deps

  const handleClearInput = useCallback(() => {
    onChange(null)
  }, [onChange])

  const handleSubtract = useCallback(() => {
    const nextValue = !value ? -step : Number(value) - Number(step)
    if (nextValue >= minValue) onChange(nextValue)
  }, [minValue, onChange, step, value])

  const handleAdd = useCallback(() => {
    const nextValue = !value ? Number(step) : Number(value) + Number(step)
    if (nextValue <= maxValue) onChange(nextValue)
  }, [maxValue, onChange, step, value])

  const muiInputProps = {
    startAdornment: isStepper ? <SubtractButton onSubtract={handleSubtract} /> : startAdornment,
    endAdornment: isStepper ? (
      <AddButton onAdd={handleAdd} />
    ) : isClearable ? (
      <ClearButton onClearInput={handleClearInput} disabled={disabled} />
    ) : (
      endAdornment
    ),
    className: `${isStepper && !fullWidth ? classes.stepperFixedWidth : ''}`,
    ...InputProps,
    style: InputProps?.style
  }

  const numericProps = {
    decimalScale,
    fixedDecimalScale,
    thousandSeparator,
    decimalSeparator,
    language,
    currency,
    isStepper,
    minValue,
    maxValue,
    ...inputProps
  }

  // props applied to the Input element
  const customMuiInputProps = isNumeric
    ? {
        ...muiInputProps,
        inputComponent: NumberTextField,
        inputProps: numericProps
      }
    : muiInputProps

  // attributes applied to the input element
  const customReactInputProps = {
    ...(isNumeric && numericProps),
    className: `${classes.input} ${inputProps?.className ? inputProps.className : ''}`
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | (string | number)) => {
      const value = isNumeric
        ? (event as string | number)
        : (event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)?.target?.value
      setLiveValue(value)
      debouncedOnChange(value)
    },
    [debouncedOnChange, isNumeric]
  )

  return (
    <MuiTextField
      onChange={handleChange}
      value={liveValue ?? ''}
      fullWidth={fullWidth}
      disabled={disabled}
      variant={variant}
      {...rest}
      InputProps={customMuiInputProps}
      inputProps={customReactInputProps}
      InputLabelProps={{
        className: classes.label,
        ...InputLabelProps
      }}
    />
  )
}

TextField.propTypes = {
  /**
   * @default false
   * If `true`, the input will accept only numeric values.
   */
  isNumeric: PropTypes.bool,
  /**
   * Attributes applied to the input element.
   * For the numeric input, you can provide properties like thousandSeparator, decimalScale and allowNegative.
   */
  inputProps: PropTypes.object,
  /**
   * Other properties you can provide to the Input component.
   */
  InputProps: PropTypes.object,
  /**
   * End adornment of component. (Usually an InputAdornment from material-ui)
   */
  endAdornment: PropTypes.node,
  /**
   * Start adornment of component. (Usually an InputAdornment from material-ui)
   */
  startAdornment: PropTypes.node,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * Props applied to the InputLabel element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * @default '() => {}'
   * Callback fired when the value is changed.
   * @param {unknown} value The target value from the event source of the callback.
   */
  onChange: PropTypes.func,
  /**
   * The delay of debouncing.
   */
  debounceBy: PropTypes.number,
  /**
   * If defined, it limits to given decimal scale.
   */
  decimalScale: PropTypes.number,
  /**
   * If `true`, it add 0s to match given decimalScale.
   */
  fixedDecimalScale: PropTypes.bool,
  /**
   * Character that separates thousands from hundreds.
   */
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Character that separates decimals from integers.
   */
  decimalSeparator: PropTypes.string,
  /**
   * The current language, preferably taken from the i18next (i18.language) or another internationalization library.
   */
  language: PropTypes.string,
  /**
   * The currency that will be displayed as a pre-fix.
   */
  currency: PropTypes.string,
  /**
   * If `true`, the component is disabled
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, a clear button is shown.
   */
  isClearable: PropTypes.bool,
  /**
   * @default false
   * If `true`, will display `+` and `-` buttons for increasing/decreasing the value.
   */
  isStepper: PropTypes.bool,
  /**
   * @default 1
   * Used together with `isStepper` prop; the value by which the current input increases.
   */
  step: PropTypes.number,
  /**
   * @default -Infinity
   * Lower limit for the input.
   */
  minValue: PropTypes.number,
  /**
   * @default Infinity
   * Upper limit for the input.
   */
  maxValue: PropTypes.number,
  /**
   * @default 'standard'
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined'])
}

export default TextField
