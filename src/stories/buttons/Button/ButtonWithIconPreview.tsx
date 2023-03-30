// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button } from '../../../components'
import RocketIcon from '@mui/icons-material/Rocket'

export const ButtonWithIconPreview: React.FunctionComponent = () => (
  <>
    <Button size="small" startIcon={<RocketIcon />} sx={{ mr: '15px' }}>
      start icon
    </Button>
    <Button endIcon={<RocketIcon />} sx={{ mr: '15px' }}>
      end icon
    </Button>
    <Button startIcon={<RocketIcon />} endIcon={<RocketIcon />} sx={{ mr: '15px' }}>
      both icons
    </Button>
    <Button tooltip="justIcon={true} size='tiny'" size="tiny" justIcon sx={{ mr: '15px' }}>
      <RocketIcon />
    </Button>
    <Button tooltip="justIcon={true} size='small'" size="small" justIcon sx={{ mr: '15px' }}>
      <RocketIcon />
    </Button>
    <Button tooltip="justIcon={true} size='medium'" size="medium" justIcon sx={{ mr: '15px' }}>
      <RocketIcon />
    </Button>
    <Button tooltip="justIcon={true} size='large'" size="large" justIcon sx={{ mr: '15px' }}>
      <RocketIcon />
    </Button>
    <Button tooltip="justIcon={true} size='large'" size="large" justIcon disabled>
      <RocketIcon />
    </Button>
  </>
)
