import React from 'react'
import Grid from '@mui/material/Grid'
import { tabs } from './_options'
import { NavPills } from 'components'

const OrientationPreview = () => {
  return (
    <Grid container columnSpacing={4} sx={{ justifyContent: 'center' }}>
      <Grid>
        <NavPills tabs={tabs(true, true)} />
      </Grid>
      <Grid>
        <NavPills tabs={tabs(true, true)} orientation="vertical" />
      </Grid>
    </Grid>
  )
}

export default OrientationPreview
