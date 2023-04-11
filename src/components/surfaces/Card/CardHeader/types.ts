// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material'

export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'rose'

export interface CardHeaderProps extends MuiCardHeaderProps {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
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
