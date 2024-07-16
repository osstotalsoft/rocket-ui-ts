// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import type { Meta, StoryObj } from '@storybook/react'
import { Forbidden } from 'components'

const meta: Meta<typeof Forbidden> = {
  title: 'Components/Feedback/Forbidden',
  component: Forbidden,
} satisfies Meta<typeof Forbidden>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
