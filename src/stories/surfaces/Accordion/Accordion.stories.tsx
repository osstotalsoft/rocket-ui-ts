// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion as AccordionComponent } from 'components'
import {
  mockedAccordionContent,
  mockedAccordionContentListSquare,
  mockedAccordionContentList,
  mockedAccordionContentListExpandAll
} from './_mocks'
import ControlledPreview from './ControlledPreview'
import ActionsPreview from './ActionsPreview'

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
 * To draw multiple Accordion components, just pass an array of elements to the `component` property.
 *
 * The array elements must have the following structure:
 * ```
 * {
 *  title?: string
 *  content?: React.ReactNode
 * }[]
 * ```
 */
export const AccordionList: Story = {
  args: { content: mockedAccordionContentList }
}

/**
 * When drawing multiple Accordion components, by default it can only be expanded one accordion at a time.
 *
 * If one if already opened and the user clicks to open another accordion, it first automatically closes the one that is open before opening the desired one.
 *
 * If `canExpandAll: true` property is set, then all the Accordion components can pe opened at the same time.
 */
export const CanExpandAll: Story = {
  args: { canExpandAll: true, content: mockedAccordionContentListExpandAll }
}

/**
 * Passing  `summaryProps: { variant: 'filled' }`, the Accordion header will be filled with a grayish color
 * and with square margins.
 */
export const Filled: Story = {
  args: { content: mockedAccordionContentListSquare, summaryProps: { variant: 'filled' } }
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

/**
 * Accordion component allows appending custom actions inside the title component
 *
 * Note!
 * If any action components are rendered inside the title, the main event must stop propagation in order to avoid undesired accordion toggles. (see code bellow)
 */
export const Actions: Story = {
  render: () => <ActionsPreview />,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        const ActionsPreview = () => {
          const [value, setValue] = useState()
        
          const handleChange = useCallback((val: any) => {
            setValue(val)
          }, [])
        
          const handleDelete = useCallback((event: any) => {
            event.stopPropagation()
          }, [])
        
          return (
            <Accordion
              title={
                <Grid container spacing={2} alignItems={'center'}>
                  <Grid item lg={4}>
                    <Typography variant="subtitle1" emphasis="bold" color="primary">
                      {'Accordion Title'}
                    </Typography>
                  </Grid>
                  <Grid item lg={7}>
                    <Autocomplete
                      label="Basic Autocomplete"
                      options={options}
                      value={value}
                      onChange={handleChange}
                      stopEventPropagation
                    />
                  </Grid>
                  <Grid item lg={1}>
                    <IconButton type="delete" variant="text" size="small" color="error" tooltip={'Delete'} onClick={handleDelete} />
                  </Grid>
                </Grid>
              }
              content={content}
            />
          )
        }
        `,
        format: true
      }
    }
  }
}
