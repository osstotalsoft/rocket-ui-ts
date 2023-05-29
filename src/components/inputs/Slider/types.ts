// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { SliderProps as MuiSliderProps } from '@mui/material'
import { TextFieldProps } from '../TextField'
import { Color } from 'components/types'

export type SliderColor = Exclude<Color, 'error' | 'default' | 'white' | 'transparent'>

export type SliderProps = Omit<MuiSliderProps, 'value' | 'onChange' | 'color'> &
  Omit<TextFieldProps, 'value' | 'onChange'> & {
    /**
     * @default "primary"
     * Slide color.
     */
    color?: SliderColor
    /**
     * The value of the label.
     */
    label?: string
    /**
     * The value of the slider
     */
    value?: number
    /**
     * Callback function that is fired when the slider's value changed.
     *
     * @param {number} value The new value.
     */
    onChange?: (value: number) => void
    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * If true, the error styles are applied.
     */
    error?: boolean
    /**
     * The helper text content.
     */
    helperText?: string
    /**
     * If true, the label is displayed as required.
     */
    required?: boolean
    /**
     * The number of decimals to be displayed.
     */
    decimalScale?: number
    /**
     * Add thousand separators on number; single character string or boolean true.
     */
    thousandSeparator?: boolean | string
    /**
     * Character that separates decimals from integers.
     */
    decimalSeparator?: string
    /**
     * If true, the slider and input will be disabled.
     */
    disabled?: boolean
    /**
     * If true, the slider limits will be displayed.
     */
    showSliderLimits?: boolean
  }
