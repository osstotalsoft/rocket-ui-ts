// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { TextField } from 'components'
import { Grid } from '@mui/material'

const ClearablePreview = () => {
  const [clearableValue, setClearableValue] = useState('can be cleared')

  const handleClearable = (value: any) => {
    setClearableValue(value)
  }

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid item xs={4}>
        <TextField
          label="Standard (default)"
          fullWidth
          value={clearableValue || ''}
          onChange={handleClearable}
          isClearable
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Outlined"
          variant="outlined"
          fullWidth
          value={clearableValue || ''}
          onChange={handleClearable}
          isClearable
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Filled"
          variant="filled"
          fullWidth
          value={clearableValue || ''}
          onChange={handleClearable}
          isClearable
        />
      </Grid>
    </Grid>
  )
}

export default ClearablePreview
