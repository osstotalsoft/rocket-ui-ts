import React from 'react'
import Grid from '@mui/material/Grid2'
import RocketIcon from '@mui/icons-material/Rocket'
import { IconButton } from 'components'

export const SizesPreview: React.FunctionComponent = () => (
  <Grid container rowSpacing={2}>
    <Grid container spacing={3} size={12}>
      <Grid>
        <IconButton size="tiny" tooltip={'tiny'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton size="small" tooltip={'small'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton size="medium" tooltip={'medium'}>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton size="large" tooltip={'large'}>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Grid>
)
