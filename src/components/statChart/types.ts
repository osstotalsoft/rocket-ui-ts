// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { SvgIconComponent } from '@mui/icons-material'
import { Color } from '../types'

import { BarChartProps, LineChartProps, PieChartProps, ScatterChartProps } from '@mui/x-charts'

//ChartType defines the chart types that can be used with the Chart component.
export type ChartType = 'line' | 'bar' | 'pie' | 'scatter'

//ChartProps defines a discriminated union for handling multiple chart types.
export type ChartProps =
  | ({ type: 'line' } & LineChartProps)
  | ({ type: 'bar' } & BarChartProps)
  | ({ type: 'pie' } & PieChartProps)
  | ({ type: 'scatter' } & ScatterChartProps)

export type StatsChartProps = {
  chartColor: Color
  iconColor: StatsIconColor
  title: string
  text: string
  StatIcon: SvgIconComponent
  statText: string
  statAction: React.ReactNode
  chart: ChartProps
}

export type StatsIconColor = Exclude<Color, 'default' | 'white' | 'transparent' | 'dark' | 'rose'>
