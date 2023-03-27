import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'
import { colors, sizes } from '../components/buttons/Button/types'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'select' }, options: colors },
    size: { control: { type: 'select' }, options: sizes }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  }
}
