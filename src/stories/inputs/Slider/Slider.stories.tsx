// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from 'components'

const meta: Meta<typeof Slider> = {
  title: 'Components/Inputs/Slider',
  component: Slider,
  tags: ['autodocs']
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Sliders reflect a range of values along a bar, from which users may select a single value.
 * They are ideal for adjusting settings such as volume, brightness, or applying image filters.
 */
export const Default: Story = {
  args: { label: 'Basic', min: 1, max: 12, step: 1, decimalScale: 0, fullWidth: true, onChange: null }
}

export const WithLimits: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'With slider limits',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    showSliderLimits: true,
    fullWidth: true,
    onChange: null
  }
}

export const Required: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'Required',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    required: true,
    fullWidth: true,
    onChange: null
  }
}

export const Error: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'Error',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    error: true,
    helperText: 'Mandatory field.',
    fullWidth: true,
    onChange: null
  }
}

export const WithHelperText: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'Helper text',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    helperText: 'Enter the number of months.',
    fullWidth: true,
    onChange: null
  }
}

/**
 * You can have custom marks by providing a rich array to the `marks` prop.
 */
export const WithCustomMarks: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'With custom marks',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    marks: [
      { value: 1, label: '1 month' },
      { value: 6, label: '6 months' },
      { value: 12, label: '12 months' }
    ],
    fullWidth: true,
    onChange: null
  }
}
/**
 * You can restrict the selectable values to those provided with the `marks` prop with `step={null}`.
 */
export const Restricted: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'With custom marks',
    min: 1,
    max: 12,
    decimalScale: 0,
    step: null,
    marks: [
      { value: 1, label: '1 month' },
      { value: 6, label: '6 months' },
      { value: 12, label: '12 months' }
    ],
    fullWidth: true,
    onChange: null
  }
}

/**
 * Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with `marks={true}`.
 */
export const Discrete: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    label: 'Discrete',
    min: 1,
    max: 12,
    step: 1,
    decimalScale: 0,
    marks: true,
    fullWidth: true,
    onChange: null
  }
}
