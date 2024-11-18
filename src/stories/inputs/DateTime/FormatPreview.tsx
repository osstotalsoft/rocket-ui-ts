// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useCallback, useState } from 'react'
import { Grid2 as Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { DateTime, DateTimeProps } from 'components'

const maskMap = {
  fr: { date: '__/__/____', dateTime: '__/__/____ __:__', time: '__:__' },
  ['en-US']: { date: '__/__/____', dateTime: '__/__/____ __:__ _M', time: '__:__ _M' },
  ro: { date: '__.__.____', dateTime: '__.__.____ __:__', time: '__:__' },
  de: { date: '__.__.____', dateTime: '__.__.____ __:__', time: '__:__' }
}

const FormatPreview = () => {
  const [format, setFormat] = useState<DateTimeProps<Date, string>['localeFormat']>('en-US')

  const handleClick = useCallback((e: any) => {
    setFormat(e.target.value)
  }, [])

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={12}>
        <ToggleButtonGroup value={format} exclusive sx={{ mb: 2, display: 'block' }}>
          {Object.keys(maskMap).map(localeItem => (
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
