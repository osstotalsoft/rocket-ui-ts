// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useCallback, useState } from 'react'
import { Grid2 as Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DateTime, DateTimeProps } from 'components'

const formatMap = ['fr', 'en-US', 'ro', 'de']

const FormatPreview = () => {
  const [format, setFormat] = useState<DateTimeProps<Date, string>['localeFormat']>('en-US')

  const handleClick = useCallback((e: any) => {
    setFormat(e.target.value)
  }, [])

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
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
        <DateTime showPicker="date" label="Date Picker" localeFormat={format} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="dateTime" label="Date Time Picker" localeFormat={format} />
      </Grid>
      <Grid size={4}>
        <DateTime showPicker="time" label="Time Picker" localeFormat={format} />
      </Grid>
    </Grid>
  )
}

export default FormatPreview
