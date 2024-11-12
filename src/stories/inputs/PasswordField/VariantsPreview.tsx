// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { PasswordField } from 'components'

const VariantsPreview = () => {
  return (
    <Grid container>
      <Grid container spacing={3} size={12}>
        <Grid>
          <PasswordField label="Standard (default)" value={''} />
        </Grid>
        <Grid>
          <PasswordField label="Outlined" variant="outlined" value={''} />
        </Grid>
        <Grid>
          <PasswordField label="Filled" variant="filled" value={''} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
