// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { DateTime } from 'components'

const value = new Date()

const DisabledPreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" value={value} disabled={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" value={value} disabled={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" value={value} disabled={true} />
      </Grid>
    </Grid>
  )
}

export default DisabledPreview
