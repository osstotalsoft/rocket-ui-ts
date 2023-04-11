// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material'
import { Color, Variant } from '../types'

export interface CardHeaderProps extends MuiCardHeaderProps {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: Variant
  /**
   * Indicates if the parent Card component contains an icon element or not
   */
  hasIcon?: boolean
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor?: Color
}
