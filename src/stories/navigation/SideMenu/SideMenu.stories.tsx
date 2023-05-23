// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SideMenu from '../../../components/navigation/SideMenu'
import DefaultPreview from './DefaultPreview'

const meta: Meta<typeof SideMenu> = {
  title: 'Components/Navigation/SideMenu',
  component: SideMenu,
  tags: ['autodocs']
} satisfies Meta<typeof SideMenu>

export default meta
type Story = StoryObj<typeof meta>

/**
 * This is the default Side Menu component. It enables the user to render menu on a fixed floating sidebar button. 
 */
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <SideMenu
          content={
            <MenuList>
              <MenuItem disableGutters dense>
                <ListItemIcon>
                  <OpenInBrowser />
                </ListItemIcon>
                <Typography>{'Load template'}</Typography>
              </MenuItem>
              <MenuItem disableGutters dense>
                <ListItemIcon>
                  <CloudDownload />
                </ListItemIcon>
                <Typography>{'Export Yaml'}</Typography>
              </MenuItem>
              <MenuItem disableGutters dense>
                <ListItemIcon>
                  <Publish />
                </ListItemIcon>
                <Typography>{'Import Yaml'}</Typography>
              </MenuItem>
              <MenuItem disableGutters dense>
                <ListItemIcon>
                  <CompareArrows />
                </ListItemIcon>
                <Typography>{'Compare configuration'}</Typography>
              </MenuItem>
              <MenuItem disableGutters dense>
                <ListItemIcon>
                  <History />
                </ListItemIcon>
                <Typography>{'Configuration history'}</Typography>
              </MenuItem>
            </MenuList>
          }
        />
        `,
        format: true
      }
    }
  },
  render: args => <DefaultPreview {...args} />
}
