// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { DateTime } from 'components'

const ErrorHelperTextPreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      {/** Error */}
      <Grid item xs={4}>
        <DateTime showPicker="date" label="Date Picker" mask="__.__.____" error={true} />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" mask="__.__.____ __:__" error={true} />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="time" label="Time Picker" mask="__:__" error={true} />
      </Grid>
      {/** Helper Text */}
      <Grid item xs={4}>
        <DateTime showPicker="date" label="Date Picker" mask="__.__.____" helperText="This is a helper text!" />
      </Grid>
      <Grid item xs={4}>
        <DateTime
          showPicker="dateTime"
          label="Date Time Picker"
          mask="__.__.____ __:__"
          helperText="This is a helper text!"
        />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="time" label="Time Picker" mask="__:__" helperText="This is a helper text!" />
      </Grid>
      {/** Error & Helper Text */}
      <Grid item xs={4}>
        <DateTime showPicker="date" label="Date Picker" mask="__.__.____" error={true} helperText="This is a helper text!" />
      </Grid>
      <Grid item xs={4}>
        <DateTime
          showPicker="dateTime"
          label="Date Time Picker"
          mask="__.__.____ __:__"
          error={true}
          helperText="This is a helper text!"
        />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="time" label="Time Picker" mask="__:__" error={true} helperText="This is a helper text!" />
      </Grid>
    </Grid>
  )
}

export default ErrorHelperTextPreview
