// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { BarChartProps, LineChartProps, PieChartProps } from '@mui/x-charts'

//ChartProps defines a discriminated union for handling multiple chart types.
export type ChartProps =
  | ({ type: 'line' } & LineChartProps)
  | ({ type: 'bar' } & BarChartProps)
  | ({ type: 'pie' } & PieChartProps)

//ChartType defines the chart types that can be used with the Chart component.
export type ChartType = 'line' | 'bar' | 'pie'
