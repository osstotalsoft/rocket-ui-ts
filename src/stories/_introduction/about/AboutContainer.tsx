import React from 'react'
import { Title } from './AboutStyles'
import { Grid } from '@mui/material'
import { orbits, homeData } from '../constants/orbits'
import { Typography } from 'components'

const AboutContainer = ({ activeItem = 0 }: any) => {
  const data = [homeData, ...orbits].find(o => o.id === activeItem)
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Title variant="h1">{data.name}</Title>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" emphasis="italic" color="secondary">
          {data.heading}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" color="textSecondary">
          {data.description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutContainer
