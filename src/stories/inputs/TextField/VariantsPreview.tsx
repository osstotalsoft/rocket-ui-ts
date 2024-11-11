import React from 'react'
import { TextField } from 'components'
import Grid from '@mui/material/Grid2'

const VariantsPreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={4}>
        <TextField label="Standard (default)" fullWidth />
      </Grid>
      <Grid size={4}>
        <TextField label="Outlined" variant="outlined" fullWidth />
      </Grid>
      <Grid size={4}>
        <TextField label="Filled" variant="filled" fullWidth />
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
