import CloudDownload from '@mui/icons-material/CloudDownload'
import CompareArrows from '@mui/icons-material/CompareArrows'
import History from '@mui/icons-material/History'
import OpenInBrowser from '@mui/icons-material/OpenInBrowser'
import Publish from '@mui/icons-material/Publish'
import { ListItemIcon, MenuItem, MenuList } from '@mui/material'
import { SideMenu, Typography } from 'components'
import React from 'react'

const DefaultPreview = (props: any) => {
  return (
    <>
      <Typography children="The component is rendered on the right edge of your screen. 😊🚀" />
      <SideMenu
        {...props}
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
    </>
  )
}

export default DefaultPreview
