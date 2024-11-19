// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DateTime } from 'components'
import FormatPreview from './FormatPreview'
import ErrorHelperTextPreview from './ErrorHelperTextPreview'
import DisabledPreview from './DisabledPreview'
import ClearablePreview from './ClearablePreview'
import HeartBroken from '@mui/icons-material/HeartBroken'
import SwipeLeftAlt from '@mui/icons-material/SwipeLeftAlt'
import SwipeRightAlt from '@mui/icons-material/SwipeRightAlt'

const meta: Meta<typeof DateTime> = {
  title: 'Components/Inputs/DateTime',
  component: DateTime
} satisfies Meta<typeof DateTime>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default DateTime component.
 */
export const Default: Story = {
  args: { label: 'Default Picker' }
}

/**
 * The component can be deeply customized using the `slots` property. It allows customizing the following elements:
 *
 * - openPickerIcon
 * - actionBar
 * - leftArrowButton
 * - rightArrowButton
 * - leftArrowIcon
 * - rightArrowIcon
 * - switchViewButton
 * - switchViewIcon
 */
export const Customized: Story = {
  args: {
    label: 'Customized Picker',
    slots: { openPickerIcon: HeartBroken, leftArrowIcon: SwipeLeftAlt, rightArrowIcon: SwipeRightAlt }
  }
}

/**
 * Date picker selection can be limited using the `minDate` and `maxDate` properties.
 */
export const LimitOptions: Story = {
  args: { label: 'Default Picker', minDate: new Date() }
}

/**
 * Different formats can be used. You can choose from `fr`, `en-us`, `ro`, `de`. Default set to `ro`.
 */
export const Format: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <DateTime
                showPicker='date'
                label='Date Picker'
                localeFormat={'your format'}
            />
                `,
        format: true
      }
    }
  },
  render: () => <FormatPreview />
}

/**
 * The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.
 */

export const ErrorHelperText: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
            <DateTime
                showPicker="time"
                label="Time Picker"
                error="true"
                helperText= 'This is a helper text!'
            />
                `,
        format: true
      }
    }
  },
  render: () => <ErrorHelperTextPreview />
}

/**
 * The component can be disabled.
 */

export const Disabled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <DateTime showPicker="date" label="Date Picker" value={value} disabled={true} />
                `,
        format: true
      }
    }
  },
  render: () => <DisabledPreview />
}

/**
 * Clearable functionality can be achieved using `isClearable={true}`.
 */
export const Clearable: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <DateTime showPicker="dateTime" label="Date Time Picker" isClearable={true} />
                `,
        format: true
      }
    }
  },
  render: () => <ClearablePreview />
}
