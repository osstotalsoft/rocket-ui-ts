// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ExpandingTextComponent from '../../../components/dataDisplay/ExpandingText'
import { DisplayPreview } from './DisplayPreview'

const meta: Meta<typeof ExpandingTextComponent> = {
  title: 'Components/DataDisplay/ExpandingText',
  component: ExpandingTextComponent,
  tags: ['autodocs']
} satisfies Meta<typeof ExpandingTextComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ExpandingText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis.'
  },
  parameters: {
    docs: {
      source: {
        code: `
        <ExpandingText text={text to be displayed} />
        `,
        format: true
      }
    }
  }
}

/**
 * In order to render the `ExpandAction` component (ShowMore/ShowLess functionality), a `minLength` prop must be provided that is less than length of the text displayed.
 * When the `ExpandAction` component is rendered, different `display` options can be used.
 * Also, by providing `expandingActionProps` property, the `ExpandAction` component can be customized with `Typography` props.
 */
export const Display: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <ExpandingText text={text to be displayed} display="inline-block" minLength={250} />
        `,
        format: true
      }
    }
  },
  render: () => <DisplayPreview />
}
