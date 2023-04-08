import React from 'react'
import { Grid } from '@mui/material'
import NavPills from '../../../components/navigation/NavPills'
import { tabs } from './options'

const NavPillsDefault = () => {
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
}

export default NavPillsDefault
