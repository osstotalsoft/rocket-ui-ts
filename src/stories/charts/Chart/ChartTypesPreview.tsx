// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { Chart } from 'components'
import { ScatterChart } from '@mui/x-charts'
import { scatterData } from './_mocks'

const ChartTypesPreview = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      <Grid size={6}>
        <Typography textAlign={'center'}>{'line'}</Typography>
        <Chart
          type="line"
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5]
            }
          ]}
          width={500}
          height={300}
        />
      </Grid>
      <Grid size={6}>
        <Typography textAlign={'center'}>{'bar '}</Typography>
        <Chart
          type="bar"
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          width={500}
          height={300}
          borderRadius={10}
        />
      </Grid>
      <Grid size={6}>
        <Typography textAlign={'center'}>{'pie '}</Typography>
        <Chart
          type="pie"
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' }
              ]
            }
          ]}
          width={400}
          height={200}
        />
      </Grid>
      <Grid size={6}>
        <Typography textAlign={'center'}>{'scatter '}</Typography>
        <Chart
          type="scatter"
          width={600}
          height={300}
          series={[
            {
              label: 'Series A',
              data: scatterData.map(v => ({ x: v.x1, y: v.y1, id: v.id }))
            },
            {
              label: 'Series B',
              data: scatterData.map(v => ({ x: v.x1, y: v.y2, id: v.id }))
            }
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default ChartTypesPreview
