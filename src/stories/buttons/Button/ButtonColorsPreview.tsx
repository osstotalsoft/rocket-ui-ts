// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '../../../components'

export const ButtonColorsPreview: React.FunctionComponent = () => (
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="primary" gradient>
          Primary
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="primary" variant="text">
          Primary
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="secondary" gradient>
          Secondary
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="secondary" variant="text">
          Secondary
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="info">Info</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="info" gradient>
          Info
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="info" variant="outlined">
          Info
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="info" variant="text">
          Info
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="success">Success</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="success" gradient>
          Success
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="success" variant="outlined">
          Success
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="success" variant="text">
          Success
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="error">Error</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="error" gradient>
          Error
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="error" variant="outlined">
          Error
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="error" variant="text">
          Error
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="warning">Warning</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="warning" gradient>
          Warning
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="warning" variant="outlined">
          Warning
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="warning" variant="text">
          Warning
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="rose">Rose</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="rose" gradient>
          Rose
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="rose" variant="outlined">
          Rose
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="rose" variant="text">
          Rose
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="default">Default</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="default" gradient>
          Default
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="default" variant="outlined">
          Default
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="default" variant="text">
          Default
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="dark">Dark</Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="dark" gradient>
          Dark
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="dark" variant="outlined">
          Dark
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="dark" variant="text">
          Dark
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}></Grid>
    <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={3} md={2}>
        <Button color="inherit" variant="contained">
          Inherit
        </Button>
      </Grid>
      <Grid item xs={3} md={2} />
      <Grid item xs={3} md={2}>
        <Button color="inherit" variant="outlined">
          Inherit
        </Button>
      </Grid>
      <Grid item xs={3} md={2}>
        <Button color="inherit" variant="text">
          Inherit
        </Button>
      </Grid>
      <Grid item xs={3} md={2} />
    </Grid>
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={3} md={2}>
        <Button color="white">White</Button>
      </Grid>
      <Grid item xs={3} md={2} />
    </Grid>
  </Grid>
)
