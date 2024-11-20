// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'

const LinePreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          title={'Line Chart'}
          chartColor="secondary"
          iconColor="info"
          text={'This is a line chart'}
          statAction={'View'}
          chart={{
            type: 'line',
            xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
            series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
            width: 450,
            height: 300
          }}
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          title={'Line Chart'}
          chartColor="secondary"
          iconColor="info"
          text={'This is a line chart with action button'}
          statAction={<Button size="tiny">Ok</Button>}
          chart={{
            type: 'line',
            xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
            series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
            width: 450,
            height: 300
          }}
        />
      </Grid>
    </Grid>
  )
}

export default LinePreview
