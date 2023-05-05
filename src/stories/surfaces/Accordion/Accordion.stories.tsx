// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion as AccordionComponent } from 'components'
import { mockedAccordionContent, mockedAccordionContentSquare } from './mocks'
import ControlledPreview from './ControlledPreview'

const meta: Meta<typeof AccordionComponent> = {
  title: 'Components/Surfaces/Accordion',
  component: AccordionComponent,
  tags: ['autodocs']
} satisfies Meta<typeof AccordionComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Accordion component.
 */
export const Default: Story = {
  args: { ...mockedAccordionContent }
}

/**
 * Using `filled` property, the Accordion header will be filled with a grayish color
 * and with square margins.
 */
export const Filled: Story = {
  args: { ...mockedAccordionContentSquare, summaryProps: { variant: 'filled' } }
}

/**
 *  To handle the card toggle event manually use the `onChange` and `expanded` properties.
 * - `onChange`: Callback fired on toggle.
 *    - `@param { React.SyntheticEvent} event` : The event source of the callback
 *    - `@param { boolean } expanded` : The expanded state boolean
 * - `expanded`: Indicated if the Accordion is collapsed or expanded
 */
export const Controlled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        function ControlledAccordion({tabs}) {
          const [expanded, setExpanded] = useState(false)
        
          const handleToggle = useCallback(() => setExpanded(current => !current), [])
        
          return(
            <Accordion 
              title="Title"
              content={--Text content here--}  
              expanded={expanded} 
              onChange={handleToggle} 
            />
          ) 
        }
        `,
        format: true
      }
    }
  },
  render: () => <ControlledPreview />
}
