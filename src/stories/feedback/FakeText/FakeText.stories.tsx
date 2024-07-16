// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FakeText } from 'components'
import AnimationsPreview from './AnimationsPreview'
import VariantsPreview from './VariantsPreview'

const meta: Meta<typeof FakeText> = {
  title: 'Components/Feedback/FakeText',
  component: FakeText,
} satisfies Meta<typeof FakeText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { lines: 4, onPaper: false, width: '400px' }
}

/**
 * The component supports 4 shape variants:
 * - `text` (default): represents a single line of text (you can adjust the height via font size).
 * - `circular`, `rectangular`, and `rounded`: come with different border radius to let you take control of the size.
 */

export const Variants: Story = {
  parameters: {
    docs: {
      source: {
        code: '<FakeText lines={4} variant={one of the above options}/>'
      }
    }
  },
  render: () => <VariantsPreview />
}

/**
 * By default, `animation` is set to `wave`, but you can change the animation to a `pulse` or disable it entirely.
 */
export const Animations: Story = {
  parameters: {
    docs: {
      source: {
        code: '<FakeText lines={4} variant={text} animation={your choice}/>'
      }
    }
  },
  render: () => <AnimationsPreview />
}
