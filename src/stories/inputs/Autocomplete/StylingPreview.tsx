// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import ColumnHeader from './components/ColumnHeader'
import { Autocomplete, Typography } from 'components'

export const StylingPreview = () => {
  const [inputColorValue, setInputColorValue] = useState(1)
  const [typographyColorValue, setTypographyColorValue] = useState()

  return (
    (<Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Prop'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete inputSelectedColor={'#26C6DA'} value={inputColorValue} onChange={setInputColorValue} />
        </Grid>
        <Grid size={3}>
          <Typography>{'inputSelectedColor'}</Typography>
        </Grid>
        <Grid size={3}>
          <Typography>{'#26C6DA'}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            options={[]}
            open
            placeholder={'Placeholder'}
            value={typographyColorValue}
            onChange={setTypographyColorValue}
            typographyContentColor={'error'}
          />
        </Grid>
        <Grid size={3}>
          <Typography>{'typographyContentColor'}</Typography>
        </Grid>
        <Grid size={3}>
          <Typography>{'error'}</Typography>
        </Grid>
      </Grid>
    </Grid>)
  )
}
