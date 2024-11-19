// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { DateTime } from 'components'

const ErrorHelperTextPreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      {/** Error */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} />
      </Grid>
      {/** Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" helperText="This is a helper text!" />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" helperText="This is a helper text!" />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" helperText="This is a helper text!" />
      </Grid>
      {/** Error & Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} helperText="This is a helper text!" />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} helperText="This is a helper text!" />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} helperText="This is a helper text!" />
      </Grid>
    </Grid>
  )
}

export default ErrorHelperTextPreview
