// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { TypographyProps as MuiTypographyProps } from '@mui/material'

/**
 * The color of the text.
 */
export type Color = 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'

/**
 * Controls the text emphasis. Different font styles can be used individually or in combination.
 */
export type Emphasis = 'bold' | 'italic' | 'underline' | 'line-through' | 'overline'

export interface TypographyProps extends MuiTypographyProps {
  /**
   * The color of the text
   */
  color?: Color
  /**
   * If provided, a text will appear on hover.
   */
  tooltip?: React.ReactNode
  /**
   * Controls the text emphasis. Different font styles can be used individually or in combination
   */
  emphasis?: Emphasis | Emphasis[]
}
