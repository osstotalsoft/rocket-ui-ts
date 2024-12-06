// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DisplayTags as DisplayTagsComponent } from 'components'
import VariantsPreview from './VariantsPreview'
import DefaultPreview from './DefaultPreview'
import bitImage from '../../assets/img/robot.png'
import { Face } from '@mui/icons-material'
import { Avatar } from '@mui/material'

/**
 * `TagsInput` component provides a user-friendly interface for entering and managing tags or keywords,
 * with support for adding new tags, deleting existing tags, and displaying the tags as chips within the input field.
 *
 * `DisplayTags` renders the provided array of tags as chips.
 */
const meta: Meta<typeof DisplayTagsComponent> = {
  title: 'Components/Inputs/Tags',
  component: DisplayTagsComponent
} satisfies Meta<typeof DisplayTagsComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default TagsInput component.
 */
export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <TagsInput value={['value']} onChange={() => {}} placeholder="Insert new value..." />
          <DisplayTags value={['value']} onChange={() => {}} />
          `,
        format: true
      }
    }
  },
  render: args => <DefaultPreview {...args} />
}

/**
 * You can use the size prop to define a bigger Tag. Default is "small"
 */
export const Size: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DisplayTags size="medium" value={['value']} onChange={() => {}} />
          <TagsInput size="medium" value={['value']} onChange={() => {}} />
          `,
        format: true
      }
    }
  },
  render: args => (
    <>
      <DefaultPreview size="medium" {...args} />
      <DefaultPreview {...args} />
    </>
  )
}

/**
 * You can add ornaments to the beginning of the component.
 * Use the "avatar" prop to add an avatar or use the "icon" prop to add an icon.
 */
export const Icons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DisplayTags icon: <Face /> value={['value']} onChange={() => {}} />
          <TagsInput icon: <Face /> value={['value']} onChange={() => {}} />
          
          <DisplayTags avatar={<Avatar alt="Robot" src="../../assets/img/robot.png" />} value={['value']} onChange={() => {}} />
          <TagsInput avatar={<Avatar alt="Robot" src="../../assets/img/robot.png" />} value={['value']} onChange={() => {}} />
          `,
        format: true
      }
    }
  },
  render: args => (
    <>
      <DefaultPreview icon={<Face />} {...args} />
      <DefaultPreview avatar={<Avatar alt="Robot" src={bitImage} />} {...args} />
    </>
  )
}

/**
 * You can use the "variant" to change the display option of the tag and the "color" prop to define a color from theme palette.
 */
export const Variants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <DisplayTags variant="variant-option-here" color="color_code" value={['value']} onChange={() => {}} />
          <TagsInput variant="variant-option-here" color="color_code" value={['value']} onChange={() => {}} />
          `,
        format: true
      }
    }
  },
  render: args => <VariantsPreview {...args} />
}
