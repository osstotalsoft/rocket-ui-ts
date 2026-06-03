// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { DateTime } from 'components'

const ErrorHelperTextPreview = () => {
  const [dateValue, setDateValue] = useState<Date | null>(null)
  const [dateTimeValue, setDateTimeValue] = useState<Date | null>(null)
  const [timeValue, setTimeValue] = useState<Date | null>(null)

  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      {/** Error */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} value={dateValue} onChange={setDateValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} value={dateTimeValue} onChange={setDateTimeValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} value={timeValue} onChange={setTimeValue} />
      </Grid>
      {/** Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" helperText="This is a helper text!" value={dateValue} onChange={setDateValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" helperText="This is a helper text!" value={dateTimeValue} onChange={setDateTimeValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" helperText="This is a helper text!" value={timeValue} onChange={setTimeValue} />
      </Grid>
      {/** Error & Helper Text */}
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" error={true} helperText="This is a helper text!" value={dateValue} onChange={setDateValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" error={true} helperText="This is a helper text!" value={dateTimeValue} onChange={setDateTimeValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" error={true} helperText="This is a helper text!" value={timeValue} onChange={setTimeValue} />
      </Grid>
    </Grid>
  )
}

export default ErrorHelperTextPreview
