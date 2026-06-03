// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useCallback, useState } from 'react'
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DateTime, DateTimeProps } from 'components'

const formatMap = ['fr', 'en-US', 'ro', 'de']

const FormatPreview = () => {
  const [format, setFormat] = useState<DateTimeProps<Date, string>['localeFormat']>('en-US')
  const [dateValue, setDateValue] = useState<Date | null>(null)
  const [dateTimeValue, setDateTimeValue] = useState<Date | null>(null)
  const [timeValue, setTimeValue] = useState<Date | null>(null)

  const handleClick = useCallback((e: any) => {
    setFormat(e.target.value)
  }, [])

  return (
    <Grid container spacing={4} sx={{ justifyItems: 'flex-start' }}>
      <Grid size={12}>
        <ToggleButtonGroup value={format} exclusive sx={{ mb: 2, display: 'block' }}>
          {formatMap.map(localeItem => (
            <ToggleButton key={localeItem} value={localeItem} onClick={handleClick}>
              {localeItem}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="date" label="Date Picker" localeFormat={format} value={dateValue} onChange={setDateValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" localeFormat={format} value={dateTimeValue} onChange={setDateTimeValue} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" localeFormat={format} value={timeValue} onChange={setTimeValue} />
      </Grid>
    </Grid>
  )
}

export default FormatPreview
