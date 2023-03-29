import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from '../../../components/buttons/Button/Button'
import { Box } from '@mui/material'

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
 * The Button comes with three variants: `contained` (default), `text` and `outlined`.
 *
 * - `(undefined)`: the button appears with the default style
 * - `contained`: contains background styling
 * - `outlined`: removes background styling
 * - `text`: removes background and border styling
 *
 * In addition, variant `contained` can be with or without `gradient`.
 */
export const ButtonVariants: Story = {
  render: args => (
    <Box columnGap="15px" display="flex">
      <ButtonComponent {...args} variant="contained" children="Variant contained" />
      <ButtonComponent {...args} variant="outlined" children="Variant outlined" />
      <ButtonComponent {...args} variant="text" children="Variant text" />
      <ButtonComponent {...args} variant="contained" gradient children="Gradient" />
    </Box>
  )
}
