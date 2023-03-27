// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { ButtonProps as MuiButtonProps } from '@mui/material'

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

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size'> {
  color?: Color
  size?: Size
  tooltip?: string
  round?: boolean
  right?: boolean
  justIcon?: boolean
  loading?: boolean
  wd?: boolean
  gradient?: boolean
  capitalize?: boolean
}
