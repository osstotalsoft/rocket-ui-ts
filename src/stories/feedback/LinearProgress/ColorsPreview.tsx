import Grid from '@mui/material/Grid'
import { LinearProgress, Typography } from 'components'
import React from 'react'

const ColorsPreview = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'primary'}</Typography>
        <LinearProgress color={'primary'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'warning'}</Typography>
        <LinearProgress color={'warning'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'error'}</Typography>
        <LinearProgress color={'error'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'success'}</Typography>
        <LinearProgress color={'success'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'info'}</Typography>
        <LinearProgress color={'info'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'rose'}</Typography>
        <LinearProgress color={'rose'} />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>{'grey (default)'}</Typography>
        <LinearProgress color={'grey'} />
      </Grid>
    </Grid>
  )
}

export default ColorsPreview
