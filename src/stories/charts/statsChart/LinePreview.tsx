// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'
import { statsChartData, statsChartOptions } from './_mocks'

const LinePreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          type="line"
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Line chart'}
          title={'Line Chart with warning icon color'}
          options={statsChartOptions}
          iconColor="error"
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          type="line"
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          title={'Line Chart with action button'}
          options={statsChartOptions}
          statAction={<Button size="tiny">Ok</Button>}
        />
      </Grid>
    </Grid>
  )
}

export default LinePreview
