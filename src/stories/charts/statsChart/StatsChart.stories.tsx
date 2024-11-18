// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatsChart } from 'components'
import StatChartTypesPreview from './StatsChartTypesPreview'

const meta: Meta<typeof StatsChart> = {
  title: 'Components/Charts/StatsChart',
  component: StatsChart
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof StatsChart>

/**
 * The Stat Chart components.
 */
export const Types: Story = {
  render: () => <StatChartTypesPreview />
}
