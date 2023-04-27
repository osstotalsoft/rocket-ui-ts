// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

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

export type Gradient = Exclude<Color, 'transparent' | 'white'>

export type Size = 'tiny' | 'small' | 'medium' | 'large'
