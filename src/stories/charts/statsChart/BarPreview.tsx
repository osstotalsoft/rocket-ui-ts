// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
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
        {/* <StatsChart
          type="bar"
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar chart with action button'}
          options={statsChartOptions}
          statAction={<Button size="tiny">Ok</Button>}
          iconColor="info"
        /> */}
      </Grid>
    </Grid>
  )
}

export default BarPreview
