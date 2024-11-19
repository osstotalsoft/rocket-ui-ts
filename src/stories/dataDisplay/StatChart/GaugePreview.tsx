// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'

const GaugePreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Gauge chart infos'}
          title={'Gauge Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a gauge chart'}
          statAction={'View'}
          chart={{
            type: 'gauge',
            startAngle: -90,
            width: 450,
            height: 300,
            value: 50
          }}
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Gauge chart infos'}
          title={'Gauge Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a gauge chart with startAngle and endAngle'}
          statAction={'View'}
          chart={{
            type: 'gauge',
            startAngle: -90,
            endAngle: 90,
            width: 450,
            height: 300,
            value: 70
          }}
        />
      </Grid>
    </Grid>
  )
}

export default GaugePreview
