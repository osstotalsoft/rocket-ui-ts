// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { FakeText } from 'components'

const VariantsPreview = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      <Grid size={{ sm: 3 }}>
        <Typography textAlign={'center'}>{'text'}</Typography>
        <FakeText lines={4} />
      </Grid>
      <Grid size={{ sm: 3 }}>
        <Typography textAlign={'center'}>{'circular '}</Typography>
        <FakeText variant={'circular'} width={80} height={80} />
      </Grid>
      <Grid size={{ sm: 3 }}>
        <Typography textAlign={'center'}>{'rectangular '}</Typography>
        <FakeText variant={'rectangular'} height={80} />
      </Grid>
      <Grid size={{ sm: 3 }}>
        <Typography textAlign={'center'}>{'rounded '}</Typography>
        <FakeText variant={'rounded'} height={80} />
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
