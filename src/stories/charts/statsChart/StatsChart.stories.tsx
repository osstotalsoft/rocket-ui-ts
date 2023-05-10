// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatsChart as StatsChartComponent } from 'components'
import { statsChartData, statsChartOptions } from './mocks'
import { AccessTime } from '@mui/icons-material'
import BarPreview from './BarPreview'

const meta: Meta<typeof StatsChartComponent> = {
  title: 'Components/Charts/StatsChart',
  component: StatsChartComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    width: 500,
    height: 200
  }
} satisfies Meta<typeof StatsChartComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The StatsChart component provides a set of frequently and customizable used chart types (`line` and `bar`).
 */
export const Default: Story = {
  args: { data: statsChartData, options: statsChartOptions, StatIcon: AccessTime },
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

export const Bar: Story = {
  render: args => <BarPreview {...args} />
}
