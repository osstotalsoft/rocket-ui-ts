// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { PasswordField } from 'components'

const VariantsPreview = () => {
  return (
    <Grid container>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <PasswordField label="Standard (default)" value={''} />
        </Grid>
        <Grid item>
          <PasswordField label="Outlined" variant="outlined" value={''} />
        </Grid>
        <Grid item>
          <PasswordField label="Filled" variant="filled" value={''} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
