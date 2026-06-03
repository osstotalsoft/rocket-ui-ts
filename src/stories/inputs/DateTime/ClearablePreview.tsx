// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { DateTime } from 'components'

const ClearablePreview = () => {
  const [dateValue, setDateValue] = useState<Date | null>(null)
  const [dateTimeValue, setDateTimeValue] = useState<Date | null>(null)
  const [timeValue, setTimeValue] = useState<Date | null>(null)

  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" isClearable={true} value={dateValue} onChange={setDateValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" isClearable={true} value={dateTimeValue} onChange={setDateTimeValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" isClearable={true} value={timeValue} onChange={setTimeValue} />
      </Grid>
    </Grid>
  )
}

export default ClearablePreview
