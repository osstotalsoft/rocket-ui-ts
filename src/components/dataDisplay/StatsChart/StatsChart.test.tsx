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

describe('Stats Chart tests', () => {
  test('renders the line chart', () => {
    const title = 'Line Chart'
    // arrange
    render(
      <StatsChart
        title={title}
        text={'This is a line chart'}
        chart={{
          type: 'line',
          ...lineChartOptions
        }}
      />
    )
    // act
    const chart = screen.getByTestId('line-chart')
    // assert
    expect(chart).toBeInTheDocument()
  })

  test('renders the bar chart', () => {
    const title = 'Bar Chart'
    // arrange
    render(
      <StatsChart
        title={title}
        text={'This is a bar chart'}
        chart={{
          type: 'bar',
          ...barChartOptions
        }}
      />
    )
    // act
    const chart = screen.getByTestId('bar-chart')
    // assert
    expect(chart).toBeInTheDocument()
  })

  test('renders the pie chart', () => {
    const title = 'Pie Chart'
    // arrange
    render(
      <StatsChart
        title={title}
        text={'This is a pie chart'}
        chart={{
          type: 'pie',
          ...pieChartOptions
        }}
      />
    )
    // act
    const chart = screen.getByTestId('pie-chart')
    // assert
    expect(chart).toBeInTheDocument()
  })

  test('renders the scatter chart', () => {
    const title = 'Scatter Chart'
    // arrange
    render(
      <StatsChart
        title={title}
        text={'This is a scatter chart'}
        chart={{
          type: 'scatter',
          ...scatterChartOptions
        }}
      />
    )
    // act
    const chart = screen.getByTestId('scatter-chart')
    // assert
    expect(chart).toBeInTheDocument()
  })

  test('renders the gauge chart', () => {
    const title = 'Gauge Chart'
    // arrange
    render(
      <StatsChart
        title={title}
        text={'This is a gauge chart'}
        chart={{
          type: 'gauge',
          ...gaugeChartOptions
        }}
      />
    )
    // act
    const chart = screen.getByTestId('gauge-chart')
    // assert
    expect(chart).toBeInTheDocument()
  })
})
