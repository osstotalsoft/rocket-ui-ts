// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { PasswordField } from 'components'

const StatesPreview = () => {
  return (
    <Grid container>
      <Grid container spacing={3} size={12}>
        <Grid>
          <PasswordField label="Read-only" readOnly value="password" />
        </Grid>
        <Grid>
          <PasswordField label="Disabled" disabled />
        </Grid>
        <Grid>
          <PasswordField label="Error" error value={''} helperText="Incorrect password" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StatesPreview
