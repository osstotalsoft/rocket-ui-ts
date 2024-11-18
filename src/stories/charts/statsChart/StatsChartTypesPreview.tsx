// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid2 as Grid } from '@mui/material'
import { StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import { scatterData } from './_mocks'

const StatChartTypesPreview = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={4}>
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
              width: 500,
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
            text={'This is a bar chart'}
            statAction={'View'}
            chart={{
              type: 'bar',
              xAxis: [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }],
              series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
              width: 500,
              height: 300
            }}
          />
        </Grid>
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
              width: 500,
              height: 300
            }}
          />
        </Grid>
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
              width: 500,
              height: 300
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StatChartTypesPreview
