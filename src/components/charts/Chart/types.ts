// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { SvgIconComponent } from '@mui/icons-material'
import { CardProps } from '../../../components'
import { ChartProps as Chart } from 'react-chartjs-2'

export interface ChartProps extends Omit<Chart, 'title'> {
  /**
   * Chart subtitle.
   */
  subheader?: React.ReactNode
  /**
   * Chart icon.
   */
  Icon?: SvgIconComponent
  /**
   * Chart icon color.
   */
  iconColor?: string
  /**
   * Content of the title.
   */
  title?: React.ReactNode
  cardProps?: CardProps
}
