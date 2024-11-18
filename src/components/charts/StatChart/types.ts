// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { SvgIconComponent } from '@mui/icons-material'
import { Color } from '../../types'
import { ChartProps } from '../Chart'

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
