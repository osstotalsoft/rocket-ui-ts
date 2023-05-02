import { SvgIconComponent } from '@mui/icons-material'
import type { CardActionsProps, CardColor, CardHeaderProps, CardVariant } from 'components'

export interface StatsCardProps {
  /**
   * Icon to be displayed.
   */
  icon?: SvgIconComponent
  /**
   * @default 'info'
   * Icon color.
   */
  iconColor?: CardColor
  /**
   * Content of the title.
   */
  title?: React.ReactNode
  /**
   * Content of the description.
   */
  description?: React.ReactNode
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer?: React.ReactNode
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
   * Props applied to the CardActions component.
   */
  footerProps?: CardActionsProps
  /**
   * @default {}
   * Props applied to the CardHeader component.
   */
  headerProps?: CardHeaderProps
}
