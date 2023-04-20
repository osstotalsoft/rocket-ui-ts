// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Card as CardComponent, IconButton } from 'components'
import BasicCardsPreview from './BasicCardsPreview'
import People from '@mui/icons-material/People'
import QuestionMark from '@mui/icons-material/QuestionMark'
import FilledPreview from './FilledPreview'
import MediaPreview from './MediaPreview'

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Surfaces/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false
    },
    footer: {
      control: false
    },
    action: {
      control: false
    }
  }
} satisfies Meta<typeof CardComponent>

export default meta
type Story = StoryObj<typeof meta>

const title = 'Card Title'
const subheader = 'Subheader'
const children =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'
const footer = <Button variant="text">SUBMIT</Button>

const action = (
  <IconButton color="info" variant="text" size="small">
    <QuestionMark fontSize="small" />
  </IconButton>
)

/**
 * Although cards can support multiple actions, UI controls, and an overflow menu,
 * use restraint and remember that cards are entry points to more complex and detailed information.
 */
export const Card: Story = {
  args: { title, subheader, children, icon: People, footer, action },

  parameters: {
    docs: {
      source: {
        code: `
        <Card 
          title={'Card Title'} 
          subheader={'Subheader'} 
          children={--Text content here--} 
          icon={People} 
          footer={<Button variant="text">SUBMIT</Button>}
          action={
            <IconButton color="info" variant="text" size="small">
              <QuestionMark fontSize="small" />
            </IconButton>
          }
        />
        `,
        format: true
      }
    }
  }
}

/**
 * Cards can be composed with other components to build rich elements for a page.
 */
export const VariousContents: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Card footer={<LearnMoreButton />}>
          -- Your content here --
        </Card>
        `,
        format: true
      }
    }
  },
  render: () => <BasicCardsPreview />
}

/**
 * Using `filled` property, the card header 
 */
export const Filled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Card filled>
          -- Your content here --
        </Card>
        `,
        format: true
      }
    }
  },
  render: () => <FilledPreview />
}

/**
 * Examples of cards using images, video or audio files to reinforce the content.
 * 
 * By default, we use the combination of a `<div>` element and a background image to display the media. 
 * It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the component prop for these use cases:
 */
export const Media: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Card>
          -- Your content here --
        </Card>
        `,
        format: true
      }
    }
  },
  render: () => <MediaPreview />
}
