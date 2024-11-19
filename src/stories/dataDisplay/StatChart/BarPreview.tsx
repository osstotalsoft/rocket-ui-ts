// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { StatsChart } from 'components'
import { AccessTime } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'

const BarPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a bar stat chart'}
          statAction={'View'}
          chart={{
            type: 'bar',
            xAxis: [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }],
            series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
            width: 450,
            height: 300
          }}
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a bar chart with custom colors'}
          statAction={'View'}
          chart={{
            type: 'bar',
            colors: ['#ff6f61', '#fdd835', '#004d6f'],
            xAxis: [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }],
            series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
            width: 450,
            height: 300
          }}
        />
      </Grid>
    </Grid>
  )
}

export default BarPreview
