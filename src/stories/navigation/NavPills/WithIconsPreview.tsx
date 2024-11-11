import React from 'react'
import Grid from '@mui/material/Grid2'
import { tabs } from './_options'
import { NavPills } from 'components'

const WithIconsPreview = () => {
  return (
    <Grid container columnSpacing={4} justifyContent="center" direction="column">
      <Grid>
        <NavPills tabs={tabs(true, true)} />
      </Grid>
      <Grid>
        <NavPills tabs={tabs(true, true)} tabProps={{ iconPosition: 'bottom' }} />
      </Grid>
      <Grid>
        <NavPills tabs={tabs(true, true)} tabProps={{ iconPosition: 'start' }} />
      </Grid>
      <Grid>
        <NavPills tabs={tabs(true, true)} tabProps={{ iconPosition: 'end' }} />
      </Grid>
    </Grid>
  )
}

export default WithIconsPreview
