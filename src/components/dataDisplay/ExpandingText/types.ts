// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { TypographyProps } from '../Typography/types'

export type DisplayType = 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'none'

export interface ExpandingTextProps extends TypographyProps {
  text: string
  minLength?: number
  showLessText?: React.ReactNode
  showMoreText?: React.ReactNode
  display?: DisplayType
  textProps?: TypographyProps
  buttonProps?: TypographyProps
  expanded?: boolean
}
