// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PasswordField as PasswordFieldComponent } from 'components'
import VariantsPreview from './VariantsPreview'
import StatesPreview from './StatesPreview'

const meta: Meta<typeof PasswordFieldComponent> = {
  title: 'Components/Inputs/PasswordField',
  component: PasswordFieldComponent,
} satisfies Meta<typeof PasswordFieldComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The PasswordFieldComponent wrapper component is a complete form control including a label, input, and help text.
 */
export const Default: Story = {
  args: { label: 'Standard (default)', value: '', onChange: undefined }
}

/**
 * It comes with three variants: `standard` (default), `outlined` and `filled`.
 */

export const Variants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
              <PasswordField 
                label="Outlined" 
                variant="outlined" 
                value={''}
              />
              `,
        format: true
      }
    }
  },
  render: () => <VariantsPreview />
}

/**
 * The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.
 */

export const States: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
              <PasswordField 
                label="Error" 
                error 
                value={''}
                helperText="Incorrect password"
              />
              `,
        format: true
      }
    }
  },
  render: () => <StatesPreview />
}
