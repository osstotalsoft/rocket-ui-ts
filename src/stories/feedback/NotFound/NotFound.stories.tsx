// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import type { Meta, StoryObj } from '@storybook/react'
import { NotFound } from 'components'

const meta: Meta<typeof NotFound> = {
  title: 'Components/Feedback/NotFound',
  component: NotFound,
} satisfies Meta<typeof NotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
