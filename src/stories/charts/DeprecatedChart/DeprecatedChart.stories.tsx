// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Meta, StoryObj } from '@storybook/react'
import ShowChart from '@mui/icons-material/ShowChart'
import BarChart from '@mui/icons-material/BarChart'
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'
import { DeprecatedChart } from 'components'
import { barChartData, chartOptions, doughnutChartData, lineChartData } from './_mocks'

const meta: Meta<typeof DeprecatedChart> = {
  title: 'Components/Charts/DeprecatedChart',
  component: DeprecatedChart,
  args: {
    width: 500,
    height: 200
  }
} satisfies Meta<typeof DeprecatedChart>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default type is set to `line`.
 */

export const Line: Story = {
  args: {
    title: 'Line chart',
    subheader: 'Chart infos',
    Icon: ShowChart,
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
        <DeprecatedChart
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
            <DeprecatedChart
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

/**
 * Doughnut chart
 */

export const Doughnut: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <DeprecatedChart
              title='Doughnut chart'
              subheader={'Chart infos'}
              type='doughnut'
              Icon={RadioButtonUnchecked}
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
    title: 'Doughnut chart',
    subheader: 'Chart infos',
    type: 'doughnut',
    Icon: RadioButtonUnchecked,
    iconColor: 'info',
    data: doughnutChartData,
    options: chartOptions
  }
}
