// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Meta, StoryObj } from '@storybook/react'
import InsertChart from '@mui/icons-material/InsertChart'
import BarChart from '@mui/icons-material/BarChart'
import { Chart } from 'components'
import { barChartData, chartOptions, lineChartData } from './_mocks'

const meta: Meta<typeof Chart> = {
  title: 'Components/Charts/Chart',
  component: Chart,
  tags: ['autodocs'],
  args: {
    width: 500,
    height: 200
  }
} satisfies Meta<typeof Chart>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default type is set to `line`.
 */

export const Line: Story = {
  args: {
    title: 'Line chart',
    subheader: 'Chart infos',
    Icon: InsertChart,
    iconColor: 'info',
    data: lineChartData,
    options: {
      ...chartOptions,
      plugins: { ...chartOptions.plugins, legend: { ...chartOptions.plugins.legend, display: false } }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Chart
          title='Line chart'
          subheader={'Chart infos'}
          type='line'
          Icon={InsertChart}
          iconColor='info'
          data={lineChartData}
          options={chartOptions}
        />
        `,
        format: true
      }
    }
  }
}

/**
 * You can show the `legend` by providing it to the `options` prop. It will use the `label` text to display it.
 */

export const Bar: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <Chart
              title='Bar chart'
              subheader={'Chart infos'}
              type='bar'
              Icon={BarChart}
              iconColor='info'
              data={barChartData}
              options={chartOptions}
            />
            `,
        format: true
      }
    }
  },
  args: {
    title: 'Bar chart',
    subheader: 'Chart infos',
    type: 'bar',
    Icon: BarChart,
    iconColor: 'info',
    data: barChartData,
    options: chartOptions
  }
}
