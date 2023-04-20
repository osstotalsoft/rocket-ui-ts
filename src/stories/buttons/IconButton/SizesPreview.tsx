import React from 'react'
import { Grid } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket'
import { IconButton } from 'components'

export const SizesPreview: React.FunctionComponent = () => (
  <Grid container rowSpacing={2}>
    <Grid item xs={12} container spacing={3}>
      <Grid item>
        <IconButton size="tiny" tooltip={'tiny'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="small" tooltip={'small'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="medium" tooltip={'medium'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="large" tooltip={'large'}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Grid>
)
