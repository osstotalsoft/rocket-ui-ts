// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { TypographyProps } from '../Typography/types'

export type DisplayType = 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'none'

export interface ExpandingTextProps extends TypographyProps {
  /**
   * Text to be displayed.
   */
  text: string
  /**
   * Length of text to be displayed.
   */
  minLength?: number
  /**
   * @default 'Show less'
   * Text of `showLess` button.
   */
  showLessText?: React.ReactNode
  /**
   * @default 'Show more'
   * Text of `showMore` button.
   */
  showMoreText?: React.ReactNode
  /**
   * @default 'block'
   * CSS `display` prop applied to the text.
   */
  display?: DisplayType
  /**
   * Props applied to the text.
   */
  textProps?: TypographyProps
  /**
   * Props applied to the ShowLess/ShowMore component.
   */
  expandingActionProps?: TypographyProps
  /**
   * @default false
   * Expanded state of the text.
   */
  expanded?: boolean
}
