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
  parameters: {
    docs: {
      source: {
        code: `const VariantsPreview = () => {
  const addToast = useToast()
  const addPromiseToast = usePromiseToast()

  const resolveAfter3Sec = () => new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() =>
            addToast(
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
              'success'
            )
          }
        >
          {'Success toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info')}>
          {'Info toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a warning message!', 'warning')}>
          {'Warning toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error')}>
          {'Error toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a default message!')}>
          {'Default toast'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() =>
            addPromiseToast(
              resolveAfter3Sec(),
              {
                render() {
                  return 'Promise is pending'
                },
                icon: Icons.spinner
              },
              {
                render() {
                  return 'Promise resolved 👌'
                },
                icon: Icons.success
              },
              {
                render() {
                  return 'Promise rejected 🤯'
                },
                icon: Icons.error
              },

              {
                draggable: true
              }
            )
          }
        >
          {'Promise toast'}
        </Button>
      </Grid>
    </Grid>
  )
}`,
        format: true
      }
    }
  },
  render: args => <VariantsPreview {...args}  />
}
/**
 * Different positions are available for rendering toast.
 */
export const Positions: Story = {
  parameters: {
    docs: {
      source: {
        code: `const PositionsPreview = () => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a success message!', 'success', { position: 'top-left' })}
        >
          {'Top Left Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This the default position!', 'info', { position: 'top-center' })}
        >
          {'Top Center Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { position: 'top-right' })}
        >
          {'Top Right Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an error message!', 'error', { position: 'bottom-right' })}
        >
          {'Bottom Right Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'success', { position: 'bottom-center' })}
        >
          {'Bottom Center Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'warning', { position: 'bottom-left' })}
        >
          {'Bottom Left Position'}
        </Button>
      </Grid>
    </Grid>
  )
}`,
        format: true
      }
    }
  },
  render: args => <PositionsPreview {...args}/>
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
  parameters: {
    docs: {
      source: {
        code: `<Grid container spacing={2} justifyContent={'space-evenly'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a success message!', 'success', { transitionType: 'Slide' })}
        >
          {'Slide transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an info message!', 'info', { transitionType: 'Zoom' })}
        >
          {'Zoom transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { transitionType: 'Bounce' })}
        >
          {'Bounce transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an error message!', 'error', { transitionType: 'Flip' })}
        >
          {'Flip transition'}
        </Button>
      </Grid>
    </Grid>`,
        format: true
      }
    }
  },
  render: args => <TransitionsPreview {...args} />
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

  const AppBar = styled(MuiAppBar)(() => ({
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    bottom: 0,
    top: 'auto',
    marginTop: '8px'
  }))

  const CustomMessageWithActions = () => (
    <AppBar position="sticky" color="transparent">
      <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" gap={1}>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 1'}</Typography>
        </Button>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 2'}</Typography>
        </Button>
      </Stack>
    </AppBar>
  )

  return (
    <Button
      size={'medium'}
      color={'primary'}
      onClick={() =>
        addToast('This is a custom toast with actions!', 'success', {
          actions: <CustomMessageWithActions />
        })
      }
    >
      {'Actions toast'}
    </Button>
  )
}`,
        format: true
      }
    }
  },
  render: args => <ActionsPreview {...args} />
}
