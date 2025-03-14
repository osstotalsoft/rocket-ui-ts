// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UploadButton as UploadButtonComponent } from 'components'
import { InputTypesPreview } from './InputTypesPreview'
import { MobileCapturePreview } from './MobileCapturePreview'
import { IconPropsPreview } from './IconPropsPreview'
import { SizesPreview } from './SizesPreview'
import { MultipleSelectionPreview } from './MultipleSelectionPreview'
import { CustomIconsPreview } from './CustomIconsPreview'

const meta: Meta<typeof UploadButtonComponent> = {
  title: 'Components/Buttons/UploadButton',
  component: UploadButtonComponent,
} satisfies Meta<typeof UploadButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The Upload Button component is a special customization for an Icon Button component used to upload files.
 */
export const UploadButton: Story = {
  args: { tooltip: 'Upload your file here' }
}

/**
 * The accept attribute takes as its value a comma-separated list of one or more file types,
 * or unique file type specifiers, describing which file types to allow.
 */
export const InputTypes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton accept=".pdf,.txt" />',
        format: true
      }
    }
  },
  render: () => <InputTypesPreview />
}

/**
 * An IconButton supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.
 */
export const Sizes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton color="color-code-here">',
        format: true
      }
    }
  },
  render: () => <SizesPreview />
}

/**
 * The icon display on the upload button can be customized as desired.
 */
export const IconProps: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton iconProps={{ fontSize:"font-size-here", color: "error" }} />',
        format: true
      }
    }
  },
  render: () => <IconPropsPreview />
}

/**
 *  By setting the attribute 'multiple', the form control will allow uploading multiple files at once.
 */
export const MultipleSelection: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton multiple />',
        format: true
      }
    }
  },
  render: () => <MultipleSelectionPreview />
}

/**
 * The "capture" attribute specifies that, optionally, a new file should be captured,
 * and which device should be used to capture that new media of a type defined by the "accept" attribute.
 */
export const MobileCapture: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton capture="environment" />',
        format: true
      }
    }
  },
  render: () => <MobileCapturePreview />
}

/**
 * The icon display on the upload button can be customized as desired.
 */
export const CustomIcons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: '<UploadButton Icon={BrowserUpdatedIcon} />',
        format: true
      }
    }
  },
  render: () => <CustomIconsPreview />
}
