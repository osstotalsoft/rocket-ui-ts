// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { TextField } from 'components'
import Grid from '@mui/material/Grid2'

const FormPropsPreview = () => {
  const [value, setValue] = useState()

  const handleValueChange = (value: any) => {
    setValue(value)
  }

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={4}>
        <TextField required label="Required" value={value || ''} onChange={handleValueChange} debounceBy={1000} fullWidth />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Read-only"
          value={'cannot be modified'}
          InputProps={{
            readOnly: true
          }}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <TextField label="Disabled" value={'cannot be modified'} disabled fullWidth />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={value || ''}
          onChange={handleValueChange}
          debounceBy={1000}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Read-only"
          value={'cannot be modified'}
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <TextField label="Disabled" variant="outlined" value={'cannot be modified'} disabled fullWidth />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Basic text field"
          variant="filled"
          value={value || ''}
          onChange={handleValueChange}
          debounceBy={1000}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Read-only"
          value={'cannot be modified'}
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <TextField label="Disabled" variant="filled" value={'cannot be modified'} disabled fullWidth />
      </Grid>
    </Grid>
  )
}

export default FormPropsPreview
