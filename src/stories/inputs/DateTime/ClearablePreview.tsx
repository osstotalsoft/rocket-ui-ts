// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { DateTime } from 'components'

const ClearablePreview = () => {
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" isClearable={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" isClearable={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" isClearable={true} />
      </Grid>
    </Grid>
  )
}

export default ClearablePreview
