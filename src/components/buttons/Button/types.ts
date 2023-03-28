// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { ButtonProps as MuiButtonProps } from '@mui/material'

export const variants = ['outlined', 'text', 'contained']
export type Variant = (typeof variants)[number]

export const sizes = ['tiny', 'small', 'medium', 'large']
export type Size = (typeof sizes)[number]

export const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'rose',
  'default',
  'white',
  'dark',
  'transparent',
  'inherit'
]
export type Color = (typeof colors)[number]

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size' | 'variant'> {
  variant?: Variant
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
