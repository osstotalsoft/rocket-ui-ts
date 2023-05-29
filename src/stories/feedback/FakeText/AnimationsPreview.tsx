// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid, Typography } from '@mui/material'
import { FakeText } from 'components'

const AnimationsPreview = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'wave'}</Typography>
        <FakeText variant={'text'} animation={'wave'} lines={6} />
      </Grid>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'pulse'}</Typography>
        <FakeText variant={'text'} animation={'pulse'} lines={6} />
      </Grid>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'false'}</Typography>
        <FakeText variant={'text'} animation={false} lines={6} />
      </Grid>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'wave'}</Typography>
        <FakeText variant={'rectangular'} animation={'wave'} height={100} />
      </Grid>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'pulse'}</Typography>
        <FakeText variant={'rectangular'} animation={'pulse'} height={100} />
      </Grid>
      <Grid item sm={4}>
        <Typography textAlign={'center'}>{'false'}</Typography>
        <FakeText variant={'rectangular'} animation={false} height={100} />
      </Grid>
    </Grid>
  )
}

export default AnimationsPreview
