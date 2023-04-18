import React from 'react'
import { Button, Grid } from '@mui/material'
import { Typography } from 'components'
import Card from 'components/themes/common/overrides/Card'
import robot from 'stories/assets/img/homepage/robot.png'
import spaceship from 'stories/assets/img/homepage/spaceship.png'

const LearnMoreButton = () => {
  return (
    <Button variant="outlined" color="info">
      {'Learn more'}
    </Button>
  )
}

const BasicCardsPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <img src={robot} id="img1" alt="robot" />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5">
                BIT HARMONY
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                We are building and publishing on Bit, which is a platform for component-driven development. Inside our
                scope, you can find codesandbox-style demos and source-code for all our rocket parts.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Typography gutterBottom align="center" variant="h2">
            MATERIAL-UI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This library represents our core, on top of which we design custom behaviors and styles.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Besides that, it is one of our major benchmarks in terms of best development practices and conventions.
          </Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5">
                GITHUB REPOSITORY
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Have a look over our source code, create issues and contribute, so we can all have a safer and smoother
                flight.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={spaceship} id="img1" alt="spaceship" />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default BasicCardsPreview
