// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextField as TextFieldComponent } from 'components'
import VariantsPreview from './VariantsPreview'
import FormPropsPreview from './FormPropsPreview'
import ValidationPreview from './ValidationPreview'
import StepperPreview from './StepperPreview'
import ClearablePreview from './ClearablePreview'
import NumericPreview from './NumericPreview'

const meta: Meta<typeof TextFieldComponent> = {
  title: 'Components/Inputs/TextField',
  component: TextFieldComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false
    },
    footer: {
      control: false
    },
    actions: {
      control: false
    }
  }
} satisfies Meta<typeof TextFieldComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The TextField wrapper component is a complete form control including a label, input, and help text.
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
          <TextField variant="variant-option-here"/>
          `,
        format: true
      }
    }
  },
  render: () => <VariantsPreview />
}

/**
 * Standard form attributes are supported e.g. required, disabled, type, etc. as well as a helperText which is used to give context about a field's input,
 * such as how the input will be used.
 */

export const FormProps: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <TextField 
                label="Read-only"
                value={'cannot be modified'}
                variant="variant-option-here"
                InputProps={{
                readOnly: true
                }}
                fullWidth
            />
            `,
        format: true
      }
    }
  },
  render: () => <FormPropsPreview />
}

/**
 * The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.
 */

export const Validation: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <TextField label="Error" helperText="Helper-text" variant="variant-option-here" fullWidth error />
            `,
        format: true
      }
    }
  },
  render: () => <ValidationPreview />
}

export const Stepper: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <TextField 
                label="Limited stepper (0 to 5)" 
                isStepper value={limitedStepperValue ?? ''} 
                onChange={handleChangeLimitedValueImplementation} 
                decimalScale={0} 
                minValue={0} 
                maxValue={5} 
            />
            `,
        format: true
      }
    }
  },
  render: () => <StepperPreview />
}

/**
 * `isClearable` option add a clear button used to clear the input value.
 */

export const Clearable: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <TextField
                label="Standard (default)"
                fullWidth
                value={clearableValue || ''}
                onChange={handleClearableImplementation}
                isClearable
            />
            `,
        format: true
      }
    }
  },
  render: () => <ClearablePreview />
}

/**
 * `isNumeric` allow users to use an input formatter. At its core, it uses [React number format](https://s-yadav.github.io/react-number-format/docs/intro)
 */

export const Numeric: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <TextField
                label="Custom phone number format"
                value={phoneNumberValue}
                onChange={handlePhoneValue}
                isNumeric
                inputProps={{ format: '+40 (###) ### ###', mask: '_', allowEmptyFormatting: true }}
                fullWidth
            />
            `,
        format: true
      }
    }
  },
  render: () => <NumericPreview />
}
