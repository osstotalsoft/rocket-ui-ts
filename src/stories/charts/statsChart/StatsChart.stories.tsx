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
  title: 'Components/Charts/StatsChart',
  component: StatsChart
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof StatsChart>

/**
 * The Line Stat Chart.
 */
export const Line: Story = {
  render: () => <LinePreview />
}

/**
 * The Bar Stat Chart.
 */
export const Bar: Story = {
  render: () => <BarPreview />
}

/**
 * The Bar Stat Chart.
 */
export const Pie: Story = {
  render: () => <PiePreview />
}
/**
 * The Bar Stat Chart.
 */
export const Scatter: Story = {
  render: () => <ScatterPreview />
}
