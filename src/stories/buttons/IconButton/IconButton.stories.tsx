// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import IconButtonComponent from '../../../components/buttons/IconButton'
import { ColorsPreview } from './ColorsPreview'
import { LoadingPreview } from './LoadingPreview'
import { SizesPreview } from './SizesPreview'
import { Box } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket'
import { TypesPreview } from './TypesPreview'

const meta: Meta<typeof IconButtonComponent> = {
  title: 'Components/Buttons/IconButton',
  component: IconButtonComponent,
} satisfies Meta<typeof IconButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The Add button component.
 */
export const IconButton: Story = {
  args: { tooltip: 'Add button', type: 'add' }
}

/**
 * To prettify an IconButton, it comes with a large variety of available colors that can be applied.Default color is 'secondary'
 *
 */
export const Colors: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <IconButton color="color-code-here">
          Primary
        </IconButton>
        `,
        format: true
      }
    }
  },
  render: () => <ColorsPreview />
}

/**
 * The IconButton comes with three variants: `contained` (default), `text` and `outlined`.
 *
 * - `(undefined)`: the button appears with the default style
 * - `contained`: contains background styling
 * - `outlined`: removes background styling
 * - `text`: removes background and border styling
 */
export const Variants: Story = {
  render: args => (
    <Box columnGap="15px" display="flex">
      <IconButtonComponent {...args} variant="contained" tooltip="Variant contained">
        <RocketIcon />
      </IconButtonComponent>
      <IconButtonComponent {...args} variant="outlined" tooltip="Variant outlined">
        <RocketIcon />
      </IconButtonComponent>
      <IconButtonComponent {...args} variant="text" tooltip="Variant text">
        <RocketIcon />
      </IconButtonComponent>
    </Box>
  )
}

/**
 * An IconButton supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.
 */
export const Sizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <IconButton size="size-code-here">
          Tiny
        </IconButton>
        `,
        format: true
      }
    }
  },
  render: () => <SizesPreview />
}

/**
 * Rocket-UI offers loading buttons that can show loading state and disable interactions.
 *
 * Toggle the loading switch to see the transition between the different states.
 */
export const Loading: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <IconButton loading>
          Loading Button
        </IconButton>
        `,
        format: true
      }
    }
  },
  render: () => <LoadingPreview />
}

/**
 * Predefined types can be used to render custom icon.
 */

export const Types: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <IconButton type="type choice">
          Type Button
        </IconButton>
        `,
        format: true
      }
    }
  },
  render: () => <TypesPreview />
}
