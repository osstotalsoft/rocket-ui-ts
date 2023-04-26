import React from 'react'
import { Typography } from '@mui/material'
import CarRepair from '@mui/icons-material/CarRepair'
import Phone from '@mui/icons-material/Phone'
import Rocket from '@mui/icons-material/Rocket'
import ShieldMoonSharp from '@mui/icons-material/ShieldMoonSharp'

export const tabs = (withIcons: boolean, withText: boolean) => [
  {
    label: withText && 'Item one',
    icon: withIcons ? <CarRepair /> : undefined,
    content: <Typography variant="body2">{'Content 1'}</Typography>
  },
  {
    label: withText && 'Item two',
    icon: withIcons ? <Phone /> : undefined,
    content: <Typography variant="body2">{'Content 2'}</Typography>
  },
  {
    label: withText && 'Item three',
    icon: withIcons ? <Rocket /> : undefined,
    content: <Typography variant="body2">{'Content 3'}</Typography>
  },
  {
    label: withText && 'Item four',
    icon: withIcons ? <ShieldMoonSharp /> : undefined,
    content: <Typography variant="body2">{'Content 4'}</Typography>
  }
]
