import {
  CardMediaProps as MuiCardMediaProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardActionsProps as MuiCardActionsProps,
  CardProps as MuiCardProps,
  CardContentProps as MuiCardContentProps
} from '@mui/material'
import { ElementType } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

export type CardVariant = 'elevation' | 'outlined'

export type CardColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose'

export type ActionAlign = 'left' | 'right'

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
  alt?: string
  controls?: boolean
  height?: string
}

export interface CardActionsProps extends MuiCardActionsProps {
  /**
   * If 'true', the card footer will be filled with a grayish color
   */
  filled?: boolean
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align?: ActionAlign
}

export interface CardHeaderProps extends Omit<MuiCardHeaderProps, 'action'> {
  /**
   * Actions to be displayed in the upper right corner of the card. If an array, will display all items with spacing between them.
   */
  actions?: React.ReactNode
  /**
   * If 'true', the card header will be filled with a grayish color
   */
  filled?: boolean
  /**
   * Indicates if the parent Card component contains an icon element or not
   */
  hasIcon?: boolean
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor?: CardColor
}

export interface CardProps extends Omit<MuiCardProps, 'title'> {
  /**
   * @default 'elevation'
   * Variant to use.
   */
  variant?: CardVariant
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation?: number
  /**
   * Color of card.
   */
  color?: CardColor
  /**
   * If 'true', the card header and footer will be filled with a grayish color
   */
  filled?: boolean
  /**
   * If true, the content padding is disabled.
   */
  disablePadding?: boolean
  /**
   * Actions to be displayed in the upper right corner of the card. If an array, will display all items with spacing between them.
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
  /**
   * Props applied to the CardContent component
   */
  contentProps?: MuiCardContentProps
}
