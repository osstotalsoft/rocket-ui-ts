import React from 'react'
import { Grid } from '@mui/material'
import { tabs } from './options'
import { Color, NavPills, Orientation } from 'components'

const DefaultPreview = () => {
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

export default DefaultPreview
