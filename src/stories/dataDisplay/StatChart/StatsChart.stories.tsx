// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatsChart } from 'components'
import LinePreview from './LinePreview'
import BarPreview from './BarPreview'
import PiePreview from './PiePreview'
import ScatterPreview from './ScatterPreview'

const meta: Meta<typeof StatsChart> = {
  title: 'Components/DataDisplay/StatChart',
  component: StatsChart
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof StatsChart>

/**
 * The Line Stat Chart.
 */
export const Line: Story = {
  parameters: {
    docs: {
      source: {
        code: `<StatsChart
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          title={'Line Chart'}
          chartColor="secondary"
          iconColor="info"
          text={'This is a line chart'}
          statAction={<Button size="tiny">Ok</Button>}
          chart={{
            type: 'line',
            xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
            series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
            width: 450,
            height: 300
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <LinePreview />
}

/**
 * The Bar Stat Chart.
 */
export const Bar: Story = {
  render: () => <BarPreview />
}

/**
 * The Pie Stat Chart.
 */
export const Pie: Story = {
  render: () => <PiePreview />
}
/**
 * The Scatter Stat Chart.
 */
export const Scatter: Story = {
  render: () => <ScatterPreview />
}
