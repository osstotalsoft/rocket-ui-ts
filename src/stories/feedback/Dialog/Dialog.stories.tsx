// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog as DialogComponent } from 'components'
import { longText, text, title } from './_mocks'
import DefaultPreview from './DefaultPreview'
import ActionsPreview from './ActionsPreview'

const meta: Meta<typeof DialogComponent> = {
  title: 'Components/Feedback/Dialog',
  component: DialogComponent,
  tags: ['autodocs']
} satisfies Meta<typeof DialogComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).
 *
 * Touch mechanics:
 * - Choosing an option immediately commits the option and closes the menu
 * - Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
 */
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children="basic dialog" variant="outlined" onClick={toggle} />
        <Dialog id="default-dialog" title="Title" content="Some text content" open={open} onClose={toggle} />
        `,
        format: true
      }
    }
  },
  args: { title, content: text },
  render: args => <DefaultPreview button="Open Dialog" {...args} />
}

/**
 * Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component.
 */
export const TextContent: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children="basic dialog" maxWidth="lg" variant="outlined" onClick={toggle} />
        <Dialog id="default-dialog" title="Title" textContent="Some text content" open={open} onClose={toggle} />
        `,
        format: true
      }
    }
  },
  args: { title, textContent: longText, maxWidth: 'lg' },
  render: args => <DefaultPreview button="Open Dialog" {...args} />
}

/**
 * To add something more to your dialog design, you can set the `dividers` property to `true` and it will display dividers at the top and bottom of DialogContent.
 */
export const Dividers: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children="basic dialog" variant="outlined" onClick={toggle} />
        <Dialog id="default-dialog" dividers title="Title" textContent="Some text content" open={open} onClose={toggle} />
        `,
        format: true
      }
    }
  },
  args: { title, textContent: text, dividers: true },
  render: args => <DefaultPreview button="Open Dialog" {...args} />
}

/**
 * By setting the `transparentBackdrop` property to `true`, the backdrop (the outer background) will be transparent.
 */
export const TransparentBackground: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children="basic dialog" variant="outlined" onClick={toggle} />
        <Dialog id="default-dialog" transparentBackdrop title="Title" textContent="Some text content" open={open} onClose={toggle} />
        `,
        format: true
      }
    }
  },
  args: { title, textContent: text, transparentBackdrop: true },
  render: args => <DefaultPreview button="Open Dialog" {...args} />
}

/**
 * To implement additional actions to our Dialog content, take advantage of the `actions` property. It can receive any ReactNode value.
 */
export const Actions: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children={button} variant="outlined" onClick={toggle} />
        <Dialog
          id="default-dialog"
          open={open}
          onClose={toggle}
          showX={false}
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
          content={
            <Grid container spacing={2} justifyContent={'center'} sx={{ pt: 3 }}>
              <Grid item xs={10}>
                <TextField label="username" fullWidth />
              </Grid>
              <Grid item xs={10}>
                <TextField label="password" type="password" fullWidth />
              </Grid>
            </Grid>
          }
          actions={
            <>
              <Button onClick={toggle} color="primary" variant="contained" size="small">
                {'cancel'}
              </Button>
              <Button onClick={toggle} color="primary" variant="contained" size="small">
                {'continue'}
              </Button>
            </>
          }
        />
        `,
        format: true
      }
    }
  },
  args: { title, textContent: text },
  render: args => <ActionsPreview button="Open Dialog" {...args} />
}

/**
 * We can set default `Yes/No` actions by passing `defaultActions` property to `true.`
 *
 * If `true`, the following properties would be required: `onYes` and @onClose.
 *
 * The two default buttons can be configured using `defaultActionsProps` property.
 */
export const DefaultActions: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <Button children="basic dialog" variant="outlined" onClick={toggle} />
        <Dialog id="default-dialog" defaultActions title="Title" textContent="Some text content" open={open} onClose={toggle} />
        `,
        format: true
      }
    }
  },
  args: { title, textContent: text, defaultActions: true },
  render: args => <DefaultPreview button="Open Dialog" {...args} />
}
