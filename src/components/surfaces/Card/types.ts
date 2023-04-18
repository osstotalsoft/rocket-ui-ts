import {
  CardMediaProps as MuiCardMediaProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardProps as MuiCardProps
} from '@mui/material'
import { CardActionsProps as MuiCardActionsProps } from '@mui/material'
import { ElementType } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

export type CardMediaProps = MuiCardMediaProps & {
  /**
   * Select a default size:
   * @s 80px X 80px
   * @m 163px X 163px
   * @l 280px X 280px
   */
  size?: 's' | 'm' | 'l'
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType
}

export type Variant = 'standard' | 'filled'

export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose'

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
  icon?: SvgIconComponent
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
  footer?: React.ReactNode
  /**
   * Props applied to the CardActions component.
   */
  footerProps?: CardActionsProps
}
