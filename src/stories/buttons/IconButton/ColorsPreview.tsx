// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import RocketIcon from '@mui/icons-material/Rocket'
import { Size, IconButton } from 'components'

const buttonProps = {
  size: 'small' as Size
}

export const ColorsPreview: React.FunctionComponent = () => (
  <Grid container spacing={3} justifyContent="center">
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="primary" tooltip="primary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="primary" gradient tooltip="primary with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="primary" variant="outlined" tooltip="primary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="primary" variant="text" tooltip="primary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" tooltip="secondary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" gradient tooltip="secondary with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" variant="outlined" tooltip="secondary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" variant="text" tooltip="secondary" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" tooltip="secondary (disabled)" {...buttonProps} disabled>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" gradient tooltip="secondary with gradient (disabled)" {...buttonProps} disabled>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" variant="outlined" tooltip="secondary (disabled)" {...buttonProps} disabled>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="secondary" variant="text" tooltip="secondary (disabled)" {...buttonProps} disabled>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="info" tooltip="info" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="info" gradient tooltip="info with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="info" variant="outlined" tooltip="info" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="info" variant="text" tooltip="info" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="success" tooltip="success" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="success" gradient tooltip="success with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="success" variant="outlined" tooltip="success" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="success" variant="text" tooltip="success" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="error" tooltip="error" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="error" gradient tooltip="error with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="error" variant="outlined" tooltip="error" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="error" variant="text" tooltip="error" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="warning" tooltip="warning" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="warning" gradient tooltip="warning with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="warning" variant="outlined" tooltip="warning" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="warning" variant="text" tooltip="warning" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="rose" tooltip="rose" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="rose" gradient tooltip="rose with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="rose" variant="outlined" tooltip="rose" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="rose" variant="text" tooltip="rose" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="default" tooltip="default" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="default" gradient tooltip="default with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="default" variant="outlined" tooltip="default" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="default" variant="text" tooltip="default" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container rowSpacing={2} columnSpacing={4} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="dark" tooltip="dark" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="dark" gradient tooltip="dark with gradient" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="dark" variant="outlined" tooltip="dark" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="dark" variant="text" tooltip="dark" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container spacing={2} size={12}>
      <Grid size={{ xs: 3, md: 1 }}>
        <IconButton color="white" tooltip="white" {...buttonProps}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid
        size={{
          xs: 3,
          md: 1
        }}
      />
    </Grid>
  </Grid>
)
