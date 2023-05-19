// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { DateTime } from 'components'

const value = new Date()

const DisabledPreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid item xs={4}>
        <DateTime showPicker="date" label="Date Picker" mask="__.__.____" value={value} disabled={true} />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" mask="__.__.____ __:__" value={value} disabled={true} />
      </Grid>
      <Grid item xs={4}>
        <DateTime showPicker="time" label="Time Picker" mask="__:__" value={value} disabled={true} />
      </Grid>
    </Grid>
  )
}

export default DisabledPreview
