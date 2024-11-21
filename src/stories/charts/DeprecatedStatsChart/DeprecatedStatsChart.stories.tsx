// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { statsChartData, statsChartOptions } from './_mocks'
import BarPreview from './BarPreview'
import LinePreview from './LinePreview'
import { DeprecatedStatsChart } from 'components'

const meta: Meta<typeof DeprecatedStatsChart> = {
  title: 'Components/Charts/DeprecatedStatsChart',
  component: DeprecatedStatsChart,
  args: {
    width: 500,
    height: 200
  }
} satisfies Meta<typeof DeprecatedStatsChart>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default StatsChart component.
 */
export const Default: Story = {
  args: { data: statsChartData, options: statsChartOptions },
  parameters: {
    docs: {
      source: {
        code: `<DeprecatedStatsChart
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
        <DeprecatedStatsChart
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
        <DeprecatedStatsChart
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
  render: args => <BarPreview {...args} />
}
