import React from 'react'
import Grid from '@mui/material/Grid2'
import { options } from './_mocks'
import { Autocomplete } from 'components'

export const RequiredPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete required label="Required" options={options} />
        </Grid>
        <Grid size={3}>
          <Autocomplete error label="Error" options={options} />
        </Grid>
        <Grid size={3}>
          <Autocomplete helperText="Please, select an option." label="Helper text" options={options} />
        </Grid>
        <Grid size={3}>
          <Autocomplete label="Variant outlined" options={options} inputTextFieldProps={{ variant: 'outlined' }} />
        </Grid>
      </Grid>
    </Grid>
  )
}
