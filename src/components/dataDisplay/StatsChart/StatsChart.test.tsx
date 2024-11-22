import React from 'react'
import { render, screen } from '../../../testingUtils'
import StatsChart from './StatsChart'
import {
  barChartOptions,
  gaugeChartOptions,
  lineChartOptions,
  pieChartOptions,
  scatterChartOptions
} from 'components/surfaces/StatsCard/_mocks'
import { ChartProps } from './types'

type ChartOption = {
  chartOptions: ChartProps
  testId: string
  text: string
}
const chartOptionsArray: ChartOption[] = [
  {
    chartOptions: { type: 'line', ...lineChartOptions },
    testId: 'line-chart',
    text: 'This is a line chart'
  },
  {
    chartOptions: { type: 'bar', ...barChartOptions },
    testId: 'bar-chart',
    text: 'This is a bar chart'
  },
  {
    chartOptions: { type: 'pie', ...pieChartOptions },
    testId: 'pie-chart',
    text: 'This is a pie chart'
  },
  {
    chartOptions: { type: 'scatter', ...scatterChartOptions },
    testId: 'scatter-chart',
    text: 'This is a scatter chart'
  },
  {
    chartOptions: { type: 'gauge', ...gaugeChartOptions },
    testId: 'gauge-chart',
    text: 'This is a gauge chart'
  }
]

describe('Stats Chart tests', () => {
  it.each(chartOptionsArray)('renders the correct type of chart', ({ text, chartOptions, testId }) => {
    // arrange
    render(<StatsChart title={text} text={text} chart={chartOptions} />)
    // act
    const element = screen.getByTestId(testId)
    // assert
    expect(element).toBeInTheDocument()
  })
})
