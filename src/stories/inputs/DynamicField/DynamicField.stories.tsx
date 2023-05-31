// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { ComponentType } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DynamicField as DynamicFieldComponent, Typography, ControlType, DynamicFieldProps } from 'components'
import ControlsPreview from './ControlsPreview'
import ControlPreview from './ControlPreview'
import { options } from '../Autocomplete/_mocks'
import { Rating, Stack } from '@mui/material'

export default {
  title: 'Components/Inputs/DynamicField',
  component: DynamicFieldComponent as ComponentType<DynamicFieldProps<any, any>>,
  tags: ['autodocs']
} satisfies Meta<typeof DynamicFieldComponent>

type Story = StoryObj<typeof DynamicFieldComponent>

/**
 * It renders a dynamic control from minimal props (controlType - Text and a label)
 */
export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Text}
            label={label}
            value={value}
            onChange={handleChange}
            options={[]}
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Text,
    label: 'Dynamic field',
    value: '',
    options: []
  }
}

/**
 * It receives a dynamic controlType property (Text, Integer, Numeric, Date, Checkbox, Autocomplete, Custom) and renders the corresponding controls
 */
export const Dynamic: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={controlType}
            label={label}
            value={value}
            onChange={handleChange}
            options={options}
            loadOptions={loadOptions}
            CustomControl={MyCustomControl}
            customControlProps={{ 
              example: 'example'
            }}
          />
        `,
        format: true
      }
    }
  },
  render: () => <ControlsPreview />
}

/**
 * It receives an explicit Text controlType and renders a TextField
 */
export const Text: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Text}
            label={label}
            value={value}
            onChange={handleChange}
            isClearable
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Text,
    label: 'Dynamic (Text)'
  },
  render: args => <ControlPreview {...args} />
}

/**
 * It receives an explicit Integer controlType and renders an integer TextField
 */
export const Integer: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Integer}
            label={label}
            value={value}
            onChange={handleChange}
            maxValue={999}
            isClearable
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Integer,
    label: 'Dynamic (Integer)'
  },
  render: args => <ControlPreview {...args} />
}

/**
 * It receives an explicit Numeric controlType and renders a numeric TextField
 */
export const Numeric: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Numeric}
            label={label}
            value={value}
            onChange={handleChange}
            decimalScale={3}
            maxValue={999}
            isClearable
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Numeric,
    label: 'Dynamic (Numeric)'
  },
  render: args => <ControlPreview {...args} />
}

/**
 * It receives an explicit Date controlType and renders a DateTime
 */
export const Date: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Date}
            label={label}
            value={value}
            onChange={handleChange}
            showPicker={'time'}
            clearable
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Date,
    label: 'Dynamic (Date)'
  },
  render: args => <ControlPreview {...args} />
}

/**
 * It receives an explicit Checkbox controlType and renders a Checkbox
 */
export const Checkbox: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Checkbox}
            label={label}
            value={value} // maps to 'checked' property
            onChange={handleChange}
            indeterminate={indeterminate}
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Checkbox
  },
  render: args => <ControlPreview {...args} />
}

/**
 * It receives an explicit Autocomplete controlType and renders an Autocomplete
 */
export const Autocomplete: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            id={name}
            controlType={ControlType.Autocomplete}
            label={label}
            value={value}
            onChange={handleChange}
            options={options}
            loadOptions={loadOptions}
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Autocomplete,
    options,
    label: 'Dynamic (Autocomplete)'
  },
  render: args => <ControlPreview {...args} />
}

//#region Custom

type CustomComponentProps = {
  id: string
  label: string
}

function CustomComponent({ id, label }: CustomComponentProps) {
  return (
    <Stack spacing={1}>
      <Typography>{label}</Typography>
      <Rating name={id} />
    </Stack>
  )
}

/**
 * It receives an explicit Custom controlType and renders a custom component, passed through the CustomComponent property, and forwards all properties passed through customComponentProps
 */
export const Custom: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            controlType={ControlType.Custom}
            CustomComponent={CustomComponent}
            customComponentProps={{
              value,
              label,
              onChange: handleChange,
              defaultValue,
              size 
              // etc.
            }}
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: ControlType.Custom,
    CustomComponent: CustomComponent as (props: object) => JSX.Element,
    customComponentProps: {
      id: 'Rating',
      label: 'Dynamic (Custom):'
    }
  },
  render: args => <ControlPreview {...args} />
}

//#endregion

/**
 * If the passed controlType is invalid, render a fallback TextField component that is disabled, with a minimum or properties forwarded (id, value, label, error, helperText)
 */
export const Fallback: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DynamicField
            controlType={"Not a valid control type"}
            ...
          />
        `,
        format: true
      }
    }
  },
  args: {
    controlType: 'Not a valid control type' as ControlType,
    label: 'Dynamic (Fallback)',
    value: 'Fallback'
  }
}
