// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, CollapseCard as CollapseCardComponent, IconButton } from 'components'
import People from '@mui/icons-material/People'
import QuestionMark from '@mui/icons-material/QuestionMark'
import Warning from '@mui/icons-material/Warning'
import FilledPreview from './FilledPreview'
import ControlledPreview from './ControlledPreview'

const meta: Meta<typeof CollapseCardComponent> = {
  title: 'Components/Surfaces/CollapseCard',
  component: CollapseCardComponent,
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
} satisfies Meta<typeof CollapseCardComponent>

export default meta
type Story = StoryObj<typeof meta>

const title = 'Card Title'
const subheader = 'Subheader'
const content =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'
const footer = <Button variant="text">SUBMIT</Button>

const actions = (
  <>
    <IconButton color="info" variant="text" size="small">
      <QuestionMark fontSize="small" />
    </IconButton>
    <IconButton color="error" variant="text" size="small">
      <Warning fontSize="small" />
    </IconButton>
  </>
)

/**
 * The default Collapse Card component.
 */
export const Default: Story = {
  args: { title, subheader, content, footer, onToggle: undefined },

  parameters: {
    docs: {
      source: {
        code: `
        <CollapseCard 
          title={'Card Title'} 
          subheader={'Subheader'} 
          content={--Text content here--} 
          footer={<Button variant="text">SUBMIT</Button>}
        />
        `,
        format: true
      }
    }
  }
}

/**
 * Collapse Card component allows appending custom actions inside the component header
 *
 * Use the `actions` property to display anything you need.
 */
export const WithActions: Story = {
  args: { title, subheader, content, footer, actions, onToggle: undefined },

  parameters: {
    docs: {
      source: {
        code: `
        <CollapseCard 
          title={'Card Title'} 
          subheader={'Subheader'} 
          content={--Text content here--} 
          footer={<Button variant="text">SUBMIT</Button>}
          actions={
            <>
              <IconButton color="info" variant="text" size="small">
                <QuestionMark fontSize="small" />
              </IconButton>
              <IconButton color="error" variant="text" size="small">
                <Warning fontSize="small" />
              </IconButton>
            </>
          }
        />
        `,
        format: true
      }
    }
  }
}

/**
 * To draw an Icon Collapse card, just pass the `icon` property to the component.
 */
export const WithIcon: Story = {
  args: { title, subheader, content, icon: People, footer, onToggle: undefined },

  parameters: {
    docs: {
      source: {
        code: `
        <CollapseCard 
          title={'Card Title'} 
          subheader={'Subheader'} 
          content={--Text content here--} 
          icon={People} 
          footer={<Button variant="text">SUBMIT</Button>}
        />
        `,
        format: true
      }
    }
  }
}

/**
 * Using `filled` property, the card header and footer will be filled with a grayish color
 */
export const Filled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <CollapseCard filled>
          -- Your content here --
        </CollapseCard>
        `,
        format: true
      }
    }
  },
  render: () => <FilledPreview />
}

/**
 *  To handle the card toggle event manually use the `onToggle` and `expanded` properties.
 * - `onToggle`: Callback fired on toggle.
 *    - `@param { React.SyntheticEvent} event` : The event source of the callback
 *    - `@param { boolean } expanded` : The expanded state boolean
 * - `expanded`: Indicated if the Card is collapsed or extended
 */
export const Controlled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        function ControlledCollapseCard({tabs}) {
          const [active, setActive] = useState(0)
        
          const handleChange = (event, newValue) => {
            setActive(newValue)
          }
        
          return(
            <NavPills
              tabs={tabs}
              active={active}
              onChange={handleChange}
            />
          )
        
        `,
        format: true
      }
    }
  },
  render: () => <ControlledPreview />
}
