import React from 'react'
import { CarRepair, Phone, Rocket, ShieldMoonSharp } from '@mui/icons-material'

export const tabs = (withIcons: boolean, withText: boolean) => [
  {
    label: withText && 'Item one',
    icon: withIcons ? <CarRepair /> : null,
    content: 'Content 1'
  },
  {
    label: withText && 'Item two',
    icon: withIcons ? <Phone /> : null,
    content: 'Content 2'
  },
  {
    label: withText && 'Item three',
    icon: withIcons ? <Rocket /> : null,
    content: 'Content 3'
  },
  {
    label: withText && 'Item four',
    icon: withIcons ? <ShieldMoonSharp /> : null,
    content: 'Content 4'
  }
]

export const orientationOptions = [{ name: 'horizontal' }, { name: 'vertical' }]
export const iconPositionOptions = [{ name: 'start' }, { name: 'end' }, { name: 'top' }, { name: 'bottom' }]
export const numericRadioOptions = [{ name: '1' }, { name: '2' }, { name: '3' }]
export const colorOptions = ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']
