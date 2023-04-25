import React from 'react'
import { Grid } from '@mui/material'
import { tabs } from './options'
import { NavPills } from 'components'

const FilledPreview = () => {
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
          tabProps={{ iconPosition: iconPosition }}
          orientation={orientation}
          color={color}
        />
      </Grid>
    </Grid>
  )
}

export default FilledPreview
