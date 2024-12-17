import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { options } from './_mocks'
import { DeprecatedAutocomplete } from 'components'

export const RequiredPreview = () => {
  const [requiredValue, setRequiredValue] = useState()
  const [errorValue, setErrorValue] = useState()
  const [helperValue, setHelperValue] = useState()

  return (
    <Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <DeprecatedAutocomplete required label="Required" value={requiredValue} onChange={setRequiredValue} options={options} />
        </Grid>
        <Grid size={3}>
          <DeprecatedAutocomplete error label="Error" value={errorValue} onChange={setErrorValue} options={options} />
        </Grid>
        <Grid size={3}>
          <DeprecatedAutocomplete
            helperText="Please, select an option."
            label="Helper text"
            value={helperValue}
            onChange={setHelperValue}
            options={options}
          />
        </Grid>
        <Grid size={3}>
          <DeprecatedAutocomplete
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
