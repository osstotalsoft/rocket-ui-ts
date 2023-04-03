import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from '../../../components/buttons/Button/Button'
import { Box } from '@mui/material'
import { ButtonColorsPreview } from './ButtonColorsPreview'
import { ButtonSizesPreview } from './ButtonSizesPreview'
import { ButtonLoadingPreview } from './ButtonLoadingPreview'
import { ButtonWithIconPreview } from './ButtonWithIconPreview'

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs']
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Button component.
 */
export const Button: Story = {
  args: { children: 'My button' }
}

/**
 * Disabling a Button component.
 */
export const DisabledButton: Story = {
  args: { children: 'My button', disabled: true, tooltip: 'I have a tooltip' },
  render: args => (
    <Box columnGap="15px" display="flex">
      <ButtonComponent {...args} gradient />
      <ButtonComponent {...args} variant="outlined" />
      <ButtonComponent {...args} variant="text" />
    </Box>
  )
}

/**
 * The Button comes with three variants: `contained` (default), `text` and `outlined`.
 *
 * - `(undefined)`: the button appears with the default style
 * - `contained`: contains background styling
 * - `outlined`: removes background styling
 * - `text`: removes background and border styling
 */
export const ButtonVariants: Story = {
  render: args => (
    <Box columnGap="15px" display="flex">
      <ButtonComponent {...args} children="Default is contained" />
      <ButtonComponent {...args} variant="contained" children="Variant contained" />
      <ButtonComponent {...args} variant="outlined" children="Variant outlined" />
      <ButtonComponent {...args} variant="text" children="Variant text" />
    </Box>
  )
}

/**
 * To pretify a Button, it comes with a large variaty of available colors that can be applied.
 *
 * If the Button has `variant="contained"`, there is an aditional property `gradient`, that can be associated with each color.
 */
export const ButtonColors: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Button color="color-code-here" gradient>
          Primary
        </Button>
        `,
        format: true
      }
    }
  },
  render: () => <ButtonColorsPreview />
}

/**
 * A button supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.
 */
export const ButtonSizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Button size="size-code-here">
          Tiny
        </Button>
        `,
        format: true
      }
    }
  },
  render: () => <ButtonSizesPreview />
}

/**
 * Rocket-UI offers loading buttons that can show loading state and disable interactions.
 *
 * Toggle the loading switch to see the transition between the different states.
 */
export const LoadingButton: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Button loading>
          Loading Button
        </Button>
        `,
        format: true
      }
    }
  },
  render: () => <ButtonLoadingPreview />
}

/**
 * Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.
 */
export const ButtonWithIcon: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Button startIcon={<RocketIcon />} >
          Button text
        </Button>
        `,
        format: true
      }
    }
  },
  render: () => <ButtonWithIconPreview />
}
