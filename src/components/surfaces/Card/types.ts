import { CardActionsProps, CardMediaProps as MuiCardMediaProps, CardProps as MuiCardProps } from '@mui/material'
import { CardHeaderProps } from './CardHeader/types'

export type CardMediaProps = MuiCardMediaProps & {
  /**
   * Select a default size:
   * @s 80px X 80px
   * @m 163px X 163px
   * @l 280px X 280px
   */
  size?: 's' | 'm' | 'l'
}

export type Variant = 'standard' | 'filled'

export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose'

export interface CardProps extends Omit<MuiCardProps, 'title' | 'variant'> {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: Variant
  /**
   * Color of card.
   */
  color?: Color
  /**
   * If true, the content padding is disabled.
   */
  disablePadding?: boolean
  /**
   * Actions to be displayed at the bottom of the card.
   */
  actions?: React.ReactNode
  /**
   * Props applied to the CardActions component.
   */
  actionsProps?: CardActionsProps
  /**
   * Content of the title.
   */
  title?: React.ReactNode
  /**
   * Content of the subheader.
   */
  subheader?: React.ReactNode
  /**
   * @default {}
   * Props applied to the CardHeader component.
   */
  headerProps?: CardHeaderProps
  /**
   * Icon to be displayed.
   */
  icon?: object
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor?: string
  /*
   * Props applied to the CardMedia component.
   */
  mediaProps?: CardMediaProps
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer: React.ReactNode
  /**
   * Props applied to the CardActions component.
   */
  footerProps: PropTypes.object
}
