// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import NavPillsComponent from '../../../components/navigation/NavPills'
import NavPillsDefault from './NavPillsDefault'
import NavPillsWithActions from './NavPillsWithActions'
import NavPillsFilled from './NavPillsFilled'
import { tabs } from './options'

const meta: Meta<typeof NavPillsComponent> = {
  title: 'Components/Navigation/NavPills',
  component: NavPillsComponent,
  tags: ['autodocs']
} satisfies Meta<typeof NavPillsComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The NavPills component.
 */
export const NavPills: Story = {
  args: { tabs: tabs(false, true) }
}

/**
 * Default NavPills
 */
export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        const [orientation, setOrientation] = useState('horizontal')
        const [iconPosition, setIconPosition] = useState('start')
        const [withIcons, setWithIcons] = useState(false)
        const [withText, setWithText] = useState(true)
        const [color, setColor] = useState('secondary')
      
        return (
          <Grid container columnSpacing={4}>
            <Grid item>
              <NavPills
                tabs={tabs(withIcons, withText)}
                tabProps={{ iconPosition: iconPosition }}
                orientation={orientation as Orientation}
                indicatorColor={color as Color}
                selectedColor={color as Color}
              />
            </Grid>
          </Grid>
        )
        `,
        format: true
      }
    }
  },
  render: () => <NavPillsDefault />
}

/**
 * NavPills with actions
 */
export const NavPillsWithActionsComponent: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        const orientation = 'horizontal'
        const iconPosition = 'start'
        const withIcons = false
        const withText = true
        const color = 'secondary'
        const actions = [
          <IconButton type="add" variant="outlined" color="secondary" size="small" />,
          <IconButton type="delete" variant="outlined" color="error" size="small" />,
          <IconButton type="download" variant="outlined" color="success" size="small" />
        ]

        return (
          <Grid container columnSpacing={4}>
            <Grid item>
              <NavPills
                tabs={tabs(withIcons, withText)}
                tabProps={{ iconPosition }}
                actions={actions}
                orientation={orientation as Orientation}
                indicatorColor={color as Color}
                selectedColor={color as Color}
              />
            </Grid>
          </Grid>
        )
        `,
        format: true
      }
    }
  },
  render: () => <NavPillsWithActions />
}

/**
 * NavPills with gradient
 */
export const NavPillsWithGradientComponent: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        const orientation = 'horizontal'
        const iconPosition = 'start'
        const withIcons = false
        const withText = true
        const color = 'secondary'
        const gradient = false

        return (
          <Grid container columnSpacing={4}>
            <Grid item>
              <NavPills
                tabs={tabs(withIcons, withText)}
                tabProps={{ iconPosition: iconPosition }}
                orientation={orientation}
                gradient={gradient}
                color={color}
              />
            </Grid>
          </Grid>
        )
        `,
        format: true
      }
    }
  },
  render: () => <NavPillsFilled />
}
