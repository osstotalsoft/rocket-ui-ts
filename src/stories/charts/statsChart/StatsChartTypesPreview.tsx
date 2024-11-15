// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { StatsChart } from 'components'
import AccessTime from '@mui/icons-material/AccessTime'

const StatChartTypesPreview = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid size={6}>
          <Typography textAlign={'center'}>{'line'}</Typography>
          <StatsChart
            type="line"
            StatIcon={AccessTime}
            statText={'Bar chart infos'}
            title={'Bar Chart'}
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
      </Grid>
    </>
  )
}

export default StatChartTypesPreview
