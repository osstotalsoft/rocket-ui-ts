import React from 'react'
import { Grid } from '@mui/material'
import { tabs } from './_options'
import { IconButton, NavPills } from 'components'

const WithActionsPreview = () => {
  const actions = [
    <IconButton type="add" variant="outlined" color="secondary" size="small" />,
    <IconButton type="delete" variant="outlined" color="error" size="small" />,
    <IconButton type="download" variant="outlined" color="success" size="small" />
  ]

  return (
    <Grid container columnSpacing={4}>
      <Grid item>
        <NavPills tabs={tabs(false, true)} actions={actions} />
      </Grid>
    </Grid>
  )
}

export default WithActionsPreview
