// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button } from '../../../components'

export const SizesPreview: React.FunctionComponent = () => (
  <Grid container rowSpacing={2}>
    <Grid container spacing={3} size={12}>
      <Grid>
        <Button size="tiny">Tiny</Button>
      </Grid>
      <Grid>
        <Button size="small">Small</Button>
      </Grid>
      <Grid>
        <Button size="medium">Medium</Button>
      </Grid>
      <Grid>
        <Button size="large">Large</Button>
      </Grid>
      <Grid>
        <Button size="large" wd>
          Wide
        </Button>
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <Button size="large" fullWidth>
          Full-width
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={3} size={12}>
      <Grid>
        <Button size="tiny" round>
          Tiny
        </Button>
      </Grid>
      <Grid>
        <Button size="small" round>
          Small
        </Button>
      </Grid>
      <Grid>
        <Button size="medium" round>
          Medium
        </Button>
      </Grid>
      <Grid>
        <Button size="large" round>
          Large
        </Button>
      </Grid>
      <Grid>
        <Button size="large" wd round>
          Wide
        </Button>
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <Button size="large" fullWidth round>
          Full-width
        </Button>
      </Grid>
    </Grid>
  </Grid>
)
