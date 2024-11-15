// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { SvgIconComponent } from '@mui/icons-material'
import { Color } from '../../types'
import { ChartProps } from '../Chart'

// export interface DataSetsChart {
//   data: number[]
//   label: string
//   backgroundColor: string
//   borderColor: string
// }

export interface StatsChartProps {
text: string,
StatIcon: SvgIconComponent,
}

export type StatsIconColor = Exclude<Color, 'default' | 'white' | 'transparent' | 'dark' | 'rose'>

export interface StatsChartProps extends ChartProps{
  /**
   * Chart type.
   */
  type?: 'line' | 'bar'
  /**
   * The text content of chart.
   */
  text?: string
  /**
   * Chart icon.
   */
  StatIcon?: SvgIconComponent
  /**
   * @default 'grey'
   * Chart icon color.
   */
  iconColor?: StatsIconColor
  /**
   * @default 'info'
   * Chart color.
   */
  chartColor?: Color
  /**
   * Chart status text.
   */
  statText?: React.ReactNode
  /**
   * Chart data.
   */
  data: {
    labels: string[]
    datasets: DataSetsChart[]
  }
  /**
   *  Action to be displayed in the right corner of the card.
   */
  statAction?: React.ReactNode
}
