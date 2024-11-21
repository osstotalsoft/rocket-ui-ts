import React from 'react'
import {
  BarChart,
  BarChartProps,
  Gauge,
  GaugeContainerProps,
  LineChart,
  LineChartProps,
  PieChart,
  PieChartProps,
  ScatterChart,
  ScatterChartProps
} from '@mui/x-charts'
import { ChartProps } from './types'

/**
 * The Chart component serves as a unified interface for rendering all available chart types in MUI X,
 * providing flexibility and simplicity in chart selection.
 */
const Chart: React.FC<ChartProps> = ({ type, ...props }) => {
  switch (type) {
    case 'line':
      return <LineChart {...(props as LineChartProps)} />
    case 'bar':
      return <BarChart {...(props as BarChartProps)} />
    case 'pie':
      return <PieChart {...(props as PieChartProps)} />
    case 'scatter':
      return <ScatterChart {...(props as ScatterChartProps)} />
    case 'gauge':
      return <Gauge {...(props as GaugeContainerProps)} />
    default:
      return <p>Unsupported chart type</p>
  }
}

export default Chart
