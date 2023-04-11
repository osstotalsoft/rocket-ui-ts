// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import BackToButtonComponent from '../../../components/buttons/BackToButton'
import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof BackToButtonComponent> = {
  title: 'Components/Buttons/BackToButton',
  component: BackToButtonComponent,
  tags: ['autodocs']
} satisfies Meta<typeof BackToButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The BackToButton component.
 */
export const BackToButton: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <BackToButton path={path}/>
        `,
        format: true
      }
    }
  },
  render: args => (
    <BrowserRouter>
      <BackToButtonComponent tooltip="redirect to provided path" path="/buttons/icon-button" {...args} />
    </BrowserRouter>
  )
}

/**
 * A BackToButton supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.
 */
export const Sizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <BackToButton size="size-code-here"/>
        `,
        format: true
      }
    }
  },
  render: () => (
    <Box columnGap="15px" display="flex">
      <BrowserRouter>
        <BackToButtonComponent size="small" tooltip="small" path="/buttons/icon-button" />
        <BackToButtonComponent size="medium" tooltip="medium (default)" path="/buttons/icon-button" />
        <BackToButtonComponent size="large" tooltip="large" path="/buttons/icon-button" />
      </BrowserRouter>
    </Box>
  )
}

/**
 * A BackToButton supports `inherit`, `small`, `medium`, `large` size. Default size is `small`.
 */
export const FontSizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <BackToButton fontSize="size-code-here"/>
        `,
        format: true
      }
    }
  },
  render: () => (
    <Box columnGap="15px" display="flex">
      <BrowserRouter>
        <BackToButtonComponent tooltip="small (default)" path="/buttons/icon-button" />
        <BackToButtonComponent tooltip="medium" fontSize="medium" path="/buttons/icon-button" />
        <BackToButtonComponent tooltip="large" fontSize="large" path="/buttons/icon-button" />
      </BrowserRouter>
    </Box>
  )
}
