// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BackToButton as BackToButtonComponent } from 'components'
import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router'

const meta: Meta<typeof BackToButtonComponent> = {
  title: 'Components/Buttons/BackToButton',
  component: BackToButtonComponent
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
      <BackToButtonComponent tooltip="redirect to provided path" path={-1} {...args} />
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
        <BackToButtonComponent size="small" tooltip="small" path={-1} />
        <BackToButtonComponent size="medium" tooltip="medium (default)" path={-1} />
        <BackToButtonComponent size="large" tooltip="large" path={-1} />
      </BrowserRouter>
    </Box>
  )
}

/**
 * The icon display on the BackToButton can be customized as desired.
 */
export const IconProps: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <BackToButton iconProps={{ fontSize:"font-size-here", color: "error" }}/>
        `,
        format: true
      }
    }
  },
  render: () => (
    <Box columnGap="15px" display="flex">
      <BrowserRouter>
        <BackToButtonComponent tooltip="small (default)" path={-1} />
        <BackToButtonComponent tooltip="medium" iconProps={{ fontSize: 'medium' }} path={-1} />
        <BackToButtonComponent tooltip="large" iconProps={{ fontSize: 'large' }} path={-1} />
      </BrowserRouter>
    </Box>
  )
}
