// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'
import { scatterData } from './_mocks'

const ScatterPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          StatIcon={AccessTime}
          statText={'Scatter chart infos'}
          title={'Scatter Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a scatter chart'}
          statAction={'View'}
          chart={{
            type: 'scatter',
            series: [
              {
                label: 'Series A',
                data: scatterData.map(v => ({ x: v.x1, y: v.y1, id: v.id }))
              },
              {
                label: 'Series B',
                data: scatterData.map(v => ({ x: v.x1, y: v.y2, id: v.id }))
              }
            ],
            width:450,
            height: 300
          }}
        />
      </Grid>
    </Grid>
  )
}

export default ScatterPreview
