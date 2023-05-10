// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, StatsChart } from 'components'
import { AccessTime } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { statsChartData, statsChartOptions } from './mocks'

const BarPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
