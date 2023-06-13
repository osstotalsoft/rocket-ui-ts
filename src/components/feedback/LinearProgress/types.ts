import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material'
import { TypographyProps } from '../../dataDisplay/Typography'
import { Color } from '../../types'

export type ProgressColor = Exclude<Color, 'default' | 'white' | 'transparent' | 'inherit'> | 'grey'

export interface LinearProgressProps extends Omit<MuiLinearProgressProps, 'color'> {
  /**
   *  @default "grey"
   *  Color of the component.
   */
  color?: ProgressColor
  /**
   * Props applied to the label.
   */
  labelProps?: TypographyProps
  /**
   * If true it shows the progress indicator value (%).
   */
  showLabel?: boolean
  /**
   * If true, the bar is shown at the top of the page, spanning the entire width
   */
  global?: boolean
}
