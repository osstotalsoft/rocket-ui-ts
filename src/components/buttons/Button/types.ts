// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { ButtonProps as MuiButtonProps } from '@mui/material'

export type Variant = 'outlined' | 'text' | 'contained'

export type Size = 'tiny' | 'small' | 'medium' | 'large'

export type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'rose'
  | 'default'
  | 'white'
  | 'dark'
  | 'transparent'
  | 'inherit'

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size' | 'variant'> {
  variant?: Variant
  /**
   * The color of the button.
   */
  color?: Color
  /**
   * The size of the button.
   */
  size?: Size
  /**
   * The tooltip of the button.
   */
  tooltip?: string
  /**
   * If true, rounded corners are enabled.
   */
  round?: boolean
  /**
   * If true, the button will float to the right.
   */
  right?: boolean
  /**
   * If true, the button will be smaller.
   */
  justIcon?: boolean
  /**
   * If true, button is in loading state.
   */
  loading?: boolean
  /**
   * If true,  the button's min width will be set to 160px.
   */
  wd?: boolean
  /**
   * If true, a gradient background is applied.
   */
  gradient?: boolean
  /**
   * @default true
   * If true, button text is capitalized.
   */
  capitalize?: boolean
  /**
   *  Used for upload 
   */
  component?: string
}
