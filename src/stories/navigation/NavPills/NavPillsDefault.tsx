import React from 'react'
import { Grid } from '@mui/material'
import NavPills from '../../../components/navigation/NavPills'
import { Orientation, Color } from '../../../components/navigation/NavPills/types'
import { tabs } from './options'

const NavPillsDefault = () => {
  const orientation = 'horizontal'
  const iconPosition = 'start'
  const withIcons = false
  const withText = true
  const color = 'secondary'

  return (
    <Grid container columnSpacing={4}>
      <Grid item>
        <NavPills
          tabs={tabs(withIcons, withText)}
          tabProps={{ iconPosition }}
          orientation={orientation as Orientation}
          indicatorColor={color as Color}
          selectedColor={color as Color}
        />
      </Grid>
    </Grid>
  )
}

export default NavPillsDefault
