// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid2'
import { statsChartData, statsChartOptions } from './_mocks'

const BarPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StatsChart
          type="bar"
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar Chart'}
          options={statsChartOptions}
        />
      </Grid>
      <Grid size={6}>
        <StatsChart
          type="bar"
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar chart with action button'}
          options={statsChartOptions}
          statAction={<Button size="tiny">Ok</Button>}
          iconColor="info"
        />
      </Grid>
    </Grid>
  )
}

export default BarPreview
