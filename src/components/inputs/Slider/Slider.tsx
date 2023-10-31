import React, { useCallback, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSlider, StyledTextField, FormControl, FormHelperText } from './SliderStyles'
import { SliderColor, SliderProps } from './types'
import useDebouncedCallback from 'hooks/useDebouncedCallback'

/**
 * Sliders allow users to make selections from a range of values.
 */

const Slider: React.FC<SliderProps> = ({
  label,
  fullWidth,
  value: origValue,
  min = 0,
  max = 100,
  onChange: origOnChange,
  error,
  helperText,
  required,
  decimalScale,
  thousandSeparator,
  decimalSeparator,
  disabled,
  showSliderLimits,
  color = 'primary' as SliderColor,
  ...rest
}) => {
  const [value, setValue] = useState(origValue || null)
  const [validationError, setValidationError] = useState(false)

  useLayoutEffect(() => {
    if (origValue != undefined) setValue(origValue)
  }, [origValue])

  const onSliderChange = useCallback(
    (_event: Event, value: any) => (origOnChange ? origOnChange(value) : setValue(value)),
    [origOnChange]
  )

  const onTextChanged = useCallback(
    (value: any) => {
      if (value >= min && value <= max) {
        onSliderChange(null, value)
        setValidationError(false)
      } else {
        setValidationError(true)
      }
    },
    [min, max, onSliderChange]
  )

  const debouncedOnChange = useDebouncedCallback(onTextChanged, 500)

  return (
    <FormControl fullWidth={fullWidth} error={error} required={required}>
      <StyledTextField
        label={label}
        fullWidth={fullWidth}
        required={required}
        value={value}
        onChange={debouncedOnChange}
        isNumeric
        inputProps={{ decimalScale, thousandSeparator, decimalSeparator }}
        InputProps={{ disableUnderline: true }}
        disabled={disabled}
        error={error || validationError}
      />
      <StyledSlider
        size="small"
        value={value}
        min={min}
        max={max}
        aria-labelledby="continuous-slider"
        onChange={onSliderChange}
        disabled={disabled}
        color={error || validationError ? 'error' : (color as SliderColor)}
        marks={
          showSliderLimits && [
            { value: min, label: min.toFixed(decimalScale).toString() },
            { value: max, label: max.toFixed(decimalScale).toString() }
          ]
        }
        {...rest}
      />
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

Slider.propTypes = {
  /**
   * @default "primary"
   * Slide color.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'rose', 'dark']),
  /**
   * The value of the label.
   */
  label: PropTypes.string,
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value: PropTypes.number,
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange: PropTypes.func,
  /**
   * If true, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * @default 0
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min: PropTypes.number,
  /**
   * @default 100
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max: PropTypes.number,
  /**
   * If true, the error styles are applied.
   */
  error: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.string,
  /**
   * If true, the label is displayed as required.
   */
  required: PropTypes.bool,
  /**
   * The number of decimals to be displayed.
   */
  decimalScale: PropTypes.number,
  /**
   * Add thousand separators on number; single character string or boolean true.
   */
  thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Character that separates decimals from integers.
   */
  decimalSeparator: PropTypes.string,
  /**
   * If true, the slider and input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the slider limits will be displayed.
   */
  showSliderLimits: PropTypes.bool
}

export default Slider
