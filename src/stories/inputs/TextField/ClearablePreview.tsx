// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { IconButton, TextField, Typography } from 'components'
import { Grid } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import SaveIcon from '@mui/icons-material/Save'

const ClearablePreview = () => {
  const [clearableValue, setClearableValue] = useState('can be cleared')

  const handleClearable = (value: any) => {
    setClearableValue(value)
  }

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid item xs={12}>
        <Typography>Variants:</Typography>
      </Grid>
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
      <Grid item xs={12}>
        <Typography>With end adornments:</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Filled"
          variant="filled"
          fullWidth
          value={clearableValue || ''}
          onChange={handleClearable}
          isClearable
          endAdornment={
            <>
              <IconButton tooltip="Copy" variant="text" size="tiny" color="primary">
                <AssignmentIcon fontSize="small" />
              </IconButton>
              <IconButton tooltip="Save" variant="text" size="tiny" color="primary">
                <SaveIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Grid>
    </Grid>
  )
}

export default ClearablePreview
