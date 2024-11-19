// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'
import { ErrorOutline } from '@mui/icons-material'

const PiePreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Pie chart infos'}
          title={'Pie Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a pie chart'}
          statAction={'View'}
          chart={{
            type: 'pie',
            series: [
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' }
                ]
              }
            ],
            width: 450,
            height: 300
          }}
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          StatIcon={ErrorOutline}
          statText={'Pie chart infos'}
          title={'Pie Chart'}
          chartColor="info"
          iconColor="error"
          text={'This is a pie chart with error icon'}
          statAction={'View'}
          chart={{
            type: 'pie',
            series: [
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' }
                ]
              }
            ],
            width: 450,
            height: 300
          }}
        />
      </Grid>
    </Grid>
  )
}

export default PiePreview
