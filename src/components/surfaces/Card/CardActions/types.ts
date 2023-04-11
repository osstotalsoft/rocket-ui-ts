import { CardActionsProps as MuiCardActionsProps } from '@mui/material'

export interface CardActionsProps extends MuiCardActionsProps {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align?: 'left' | 'right'
}
