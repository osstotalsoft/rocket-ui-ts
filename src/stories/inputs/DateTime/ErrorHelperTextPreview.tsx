// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid'
import { DateTime } from 'components'

const ErrorHelperTextPreview = () => {
  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      {/** Error */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} value={undefined as unknown as Date} />
      </Grid>
      {/** Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
      {/** Error & Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} helperText="This is a helper text!" value={undefined as unknown as Date} />
      </Grid>
    </Grid>
  )
}

export default ErrorHelperTextPreview
