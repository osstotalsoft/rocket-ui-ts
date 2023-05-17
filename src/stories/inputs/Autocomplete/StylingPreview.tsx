// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ColumnHeader from './components/ColumnHeader'
import { Autocomplete, Typography } from 'components'

export const StylingPreview = () => {
  const [inputColorValue, setInputColorValue] = useState(1)
  const [typographyColorValue, setTypographyColorValue] = useState()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Prop'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete inputSelectedColor={'#26C6DA'} value={inputColorValue} onChange={setInputColorValue} />
        </Grid>
        <Grid item xs={3}>
          <Typography>{'inputSelectedColor'}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{'#26C6DA'}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete
            options={[]}
            open
            placeholder={'Placeholder'}
            value={typographyColorValue}
            onChange={setTypographyColorValue}
            typographyContentColor={'error'}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography>{'typographyContentColor'}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{'error'}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
