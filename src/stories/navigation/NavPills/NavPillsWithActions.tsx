import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '../../../components/buttons/IconButton'
import NavPills from '../../../components/navigation/NavPills'
import { Orientation, Color } from '../../../components/navigation/NavPills/types'
import { tabs } from './options'

const NavPillsDefault = () => {
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
}

export default NavPillsDefault
