// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NavPills as NavPillsComponent } from 'components'
import { tabs } from './_options'
import WithIconsPreview from './WithIconsPreview'
import OrientationPreview from './OrientationPreview'
import WithActionsPreview from './WithActionsPreview'
import FilledPreview from './FilledPreview'
import ControlledPreview from './ControlledPreview'

const meta: Meta<typeof NavPillsComponent> = {
  title: 'Components/Navigation/NavPills',
  component: NavPillsComponent,
  tags: ['autodocs']
} satisfies Meta<typeof NavPillsComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The Default NavPills component.
 */
export const Default: Story = {
  args: { tabs: tabs(false, true), onChange: undefined },
  parameters: {
    docs: {
      source: {
        code: `
        <NavPills
          tabs={
            [{
              label: 'Item one',
              content: 'Content 1'
            },
            {
              label: 'Item two',
              content: 'Content 2'
            }]
          }
        />
      `,
        format: true
      }
    }
  }
}

/**
 *  To include icons in your tabs, use the `icon`.
 *
 *  Use the `iconPosition` property from `tabProps` object, to specify how the icon should aligned with the tab text value.
 *  The default values is `top`.
 *
 *  Available options:
 * - `top`: the icon is positioned on top of the text label
 * - `bottom`: the icon is positioned under the text label
 * - `start`: the icon is positioned in front of the text label
 * - `end`: the icon is positioned after the text label
 */
export const WithIcons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <NavPills
          tabs={
            [{
              label: 'Item one',
              icon: <CarRepair />,
              content: 'Content 1'
            },
            {
              label: 'Item two',
              icon: <Phone />,
              content: 'Content 2'
            }]
          }
          tabProps={{ iconPosition: 'bottom' }}
        />
      `,
        format: true
      }
    }
  },
  render: () => <WithIconsPreview />
}

/**
 * To make vertical tabs instead of default `horizontal` ones, there is `orientation="vertical"` option.
 */
export const Orientation: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <NavPills
          tabs={
            [{
              label: 'Item one',
              icon: <CarRepair />,
              content: 'Content 1'
            },
            {
              label: 'Item two',
              icon: <Phone />,
              content: 'Content 2'
            }]
          }
          orientation='vertical'
        />
      `,
        format: true
      }
    }
  },
  render: () => <OrientationPreview />
}

/**
 * Nav Pills component allows appending custom actions inside the component header
 *
 * Use the `actions` property to display anything you need.
 */
export const WithActions: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <NavPills
            tabs={
              [{
                label: 'Item one',
                content: 'Content 1'
              },
              {
                label: 'Item two',
                content: 'Content 2'
              }]
            }
            actions={
              [
                <IconButton type="add" variant="outlined" color="secondary" size="small" />,
                <IconButton type="delete" variant="outlined" color="error" size="small" />,
                <IconButton type="download" variant="outlined" color="success" size="small" />
              ]
            }
          />
        )
        `,
        format: true
      }
    }
  },
  render: () => <WithActionsPreview />
}

/**
 *  The Nav Pills component can be further more stylized by using `color`, `selectedColor`, `indicatorColor` and `colorGradient` properties.
 *
 *  - `color`: Indicates the background color of the selected Tab and the indicator color. Precedes `indicatorColor` and `selectedColor` properties
 *  - `selectedColor`: Determines the color of the selected Tab.
 *  - `indicatorColor`: Determines the color of the indicator. The indicator is either the this line underneath the selected tab or it's background color.
 *  - `colorGradient`: applies a gradient color style on the selected tab. Precedes `color` property.
 */
export const FilledColor: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <NavPills
          tabs={
            [{
              label: 'Item one',
              icon: <CarRepair />,
              content: 'Content 1'
            },
            {
              label: 'Item two',
              icon: <Phone />,
              content: 'Content 2'
            }]
          }
          indicatorColor={color-code-here}
          selectedColor={color-code-here}
        />
        `,
        format: true
      }
    }
  },
  render: () => <FilledPreview />
}

/**
 *  To handle tab change event manually use the `onChange` and `active` properties.
 * - `onChange`:
 *    - `@param {object} event` : The event source of the callback
 *    - `@param {number} value` : We default to the index of the child (number)
 * - `active`: Index of the default active tab. Default is `0`
 */
export const Controlled: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        function ControlledNavPills({tabs}) {
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
