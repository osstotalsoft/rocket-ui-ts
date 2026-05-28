// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from 'components'

const ValidationPreview = () => {
  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      <Grid size={6}>
        <TextField label="Error" fullWidth error />
      </Grid>
      <Grid size={6}>
        <TextField label="Error" helperText="Incorrect input" fullWidth error />
      </Grid>
      <Grid size={6}>
        <TextField label="Error" variant="outlined" fullWidth error />
      </Grid>
      <Grid size={6}>
        <TextField label="Error" helperText="Incorrect input" variant="outlined" fullWidth error />
      </Grid>
      <Grid size={6}>
        <TextField label="Error" variant="filled" fullWidth error />
      </Grid>
      <Grid size={6}>
        <TextField label="Error" helperText="Incorrect input" variant="filled" fullWidth error />
      </Grid>
    </Grid>
  )
}

export default ValidationPreview
