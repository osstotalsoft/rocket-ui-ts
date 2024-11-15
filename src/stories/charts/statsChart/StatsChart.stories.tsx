// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { statsChartData, statsChartOptions } from './_mocks'
import BarPreview from './BarPreview'
import LinePreview from './LinePreview'
import { StatsChart } from 'components'
import StatChartTypesPreview from './StatsChartTypesPreview'

const meta: Meta<typeof StatsChart> = {
  title: 'Components/Charts/StatsChart',
  component: StatsChart
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof StatsChart>

/**
 * The default StatsChart component.
 */
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<StatsChart
            data={{
                    labels: ['january', 'february], 
                    datasets: [{
                        data: [10, 35], 
                        label: 'Dataset 1', 
                        backgroundColor: 'white',
                        borderColor: 'white'}]
                }}
            chartColor={'info'}
            StatIcon={AccessTime}
            options={{
                responsive: true,
                maintainAspectRatio: false
            }}
          />`,
        format: true
      }
    }
  }
}

/**
 * Besides showing chart data, the content of the component can be improved using properties like `chartColor`, `StatIcon` and many more.
 */
export const Line: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <StatsChart
          type="line"
          title={'Line Chart'}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          data={DataToBeDisplayed}
          options={statsChartOptions}
        />
        `,
        format: true
      }
    }
  },
  render: () => <LinePreview />
}

/**
 * `Bar` chart type can be used beside `Line` (which is the default).
 */
export const Bar: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <StatsChart
          type="bar"
          title={'Bar Chart'}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          data={DataToBeDisplayed}
          options={statsChartOptions}
        />
        `,
        format: true
      }
    }
  },
  render: () => <StatChartTypesPreview />
}
