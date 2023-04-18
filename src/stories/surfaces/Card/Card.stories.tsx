// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card as CardComponent } from 'components'
import BasicCardsPreview from './BasicCardsPreview'

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Surfaces/Card',
  component: CardComponent,
  tags: ['autodocs']
} satisfies Meta<typeof CardComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {
  args: {},
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
  render: () => <BasicCardsPreview />
}
