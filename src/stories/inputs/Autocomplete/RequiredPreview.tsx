import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { options } from './_mocks'
import { Autocomplete } from 'components'

export const RequiredPreview = () => {
  const [requiredValue, setRequiredValue] = useState()
  const [errorValue, setErrorValue] = useState()
  const [helperValue, setHelperValue] = useState()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete required label="Required" value={requiredValue} onChange={setRequiredValue} options={options} />
        </Grid>
        <Grid item xs={3}>
          <Autocomplete error label="Error" value={errorValue} onChange={setErrorValue} options={options} />
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            helperText="Please, select an option."
            label="Helper text"
            value={helperValue}
            onChange={setHelperValue}
            options={options}
          />
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            label="Variant outlined"
            value={helperValue}
            onChange={setHelperValue}
            options={options}
            inputTextFieldProps={{ variant: 'outlined' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
