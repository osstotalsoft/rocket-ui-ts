// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

// Available theme color options.
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

// Available gradient color options.
export type Gradient = Exclude<Color, 'transparent' | 'white'>

// Available size options.
export type Size = 'tiny' | 'small' | 'medium' | 'large'
