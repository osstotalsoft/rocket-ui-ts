// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { PasswordField } from 'components'

const StatesPreview = () => {
  return (
    <Grid container>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <PasswordField label="Read-only" readOnly value="password" />
        </Grid>
        <Grid item>
          <PasswordField label="Disabled" disabled />
        </Grid>
        <Grid item>
          <PasswordField label="Error" error value={''} helperText="Incorrect password" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StatesPreview
