// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { DateTime } from 'components'

const DisabledPreview = () => {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" value={value} onChange={setValue} disabled={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" value={value} onChange={setValue} disabled={true} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" value={value} onChange={setValue} disabled={true} />
      </Grid>
    </Grid>
  )
}

export default DisabledPreview
