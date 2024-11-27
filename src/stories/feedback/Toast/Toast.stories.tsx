// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToastContainer } from 'components'
import VariantsPreview from './VariantsPreview'
import PositionsPreview from './PositionsPreview'
import TransitionsPreview from './TransitionsPreview'
import ActionsPreview from './ActionsPreview'

const meta: Meta<typeof ToastContainer> = {
  title: 'Components/Feedback/Toast',
  component: ToastContainer
} satisfies Meta<typeof ToastContainer>

export default meta
type Story = StoryObj<typeof meta>

/**
 * There are multiple variants form which you can choose from:
 * - success
 * - info
 * - warning
 * - error
 * - promise
 */
export const Variants: Story = {
  render: () => <VariantsPreview />
}
/**
 * Different positions are available for rendering toast.
 */
export const Positions: Story = {
  render: () => <PositionsPreview />
}

/**
 * You can change the direction of the Toast transition.
 * Available options are:
 * - Slide
 * - Bounce
 * - Flip
 * - Zoom
 * Default is set to 'Slide'.
 */
export const Transitions: Story = {
  render: () => <TransitionsPreview />
}

/**
 * You can add customized actions to the toast.
 */
export const Actions: Story = {
  parameters: {
    docs: {
      source: {
        code: `const ActionsPreview = () => {
  const addToast = useToast()

  const CustomMessageWithActions = () => (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>{'This is a custom toast with actions'}</Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={emptyFunction}>
          {'Button 1'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={emptyFunction}>
          {'Button 2'}
        </Button>
      </Grid>
    </Grid>
  )

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Button size={'medium'} color={'primary'} onClick={() => addToast(CustomMessageWithActions, 'success')}>
        {'Actions toast'}
      </Button>
    </Grid>
  )
}`,
        format: true
      }
    }
  },
  render: () => <ActionsPreview />
}
