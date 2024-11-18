// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ChartComponent from 'components/charts/Chart'
import ChartTypesPreview from './ChartTypesPreview'

const meta: Meta<typeof ChartComponent> = {
  title: 'Components/Charts/Chart',
  component: ChartComponent
} satisfies Meta<typeof ChartComponent>

export default meta
type Story = StoryObj<typeof ChartComponent>

/**
 * The Chart components.
 */
export const Types: Story = {
  render: () => <ChartTypesPreview />
}
