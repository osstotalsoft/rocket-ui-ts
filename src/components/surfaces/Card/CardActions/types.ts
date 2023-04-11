import { CardActionsProps as MuiCardActionsProps } from '@mui/material'
import { Variant } from '../types'

export type Align = 'left' | 'right'
export interface CardActionsProps extends MuiCardActionsProps {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: Variant
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align?: Align
}
