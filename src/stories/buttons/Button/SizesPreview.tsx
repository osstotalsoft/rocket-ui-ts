// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '../../../components'

export const SizesPreview: React.FunctionComponent = () => (
  <Grid container rowSpacing={2}>
    <Grid item xs={12} container spacing={3}>
      <Grid item>
        <Button size="tiny">Tiny</Button>
      </Grid>
      <Grid item>
        <Button size="small">Small</Button>
      </Grid>
      <Grid item>
        <Button size="medium">Medium</Button>
      </Grid>
      <Grid item>
        <Button size="large">Large</Button>
      </Grid>
      <Grid item>
        <Button size="large" wd>
          Wide
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button size="large" fullWidth>
          Full-width
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container spacing={3}>
      <Grid item>
        <Button size="tiny" round>
          Tiny
        </Button>
      </Grid>
      <Grid item>
        <Button size="small" round>
          Small
        </Button>
      </Grid>
      <Grid item>
        <Button size="medium" round>
          Medium
        </Button>
      </Grid>
      <Grid item>
        <Button size="large" round>
          Large
        </Button>
      </Grid>
      <Grid item>
        <Button size="large" wd round>
          Wide
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button size="large" fullWidth round>
          Full-width
        </Button>
      </Grid>
    </Grid>
  </Grid>
)
