import React, { useState, useCallback } from 'react'
import { Grid } from '@mui/material'
import { Button, Typography, Card, Pagination } from 'components'
import robot from '../../assets/img/robot.png'
import spaceship from '../../assets/img/spaceship.png'

const LearnMoreButton = () => {
  return (
    <Button variant="outlined" color="info">
      {'Learn more'}
    </Button>
  )
}

const BasicCardsPreview = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)

  const handleChangePage = useCallback((value: number) => {
    setPage(value)
  }, [])

  const handleChangeRowsPerPage = useCallback((value: number) => {
    setPageSize(value)
    setPage(0)
  }, [])

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <Card footer={<LearnMoreButton />}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <img src={robot} id="img1" alt="robot" />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5">
                TypeScript
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="secondary">
                TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at
                any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor.
                Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript
                runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type
                inference to give you great tooling without additional code.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card footer={<LearnMoreButton />}>
          <Typography gutterBottom align="center" variant="h2">
            MATERIAL-UI
          </Typography>
          <Typography variant="body2" color="secondary">
            This library represents our core, on top of which we design custom behaviors and styles.
          </Typography>
          <Typography variant="body2" color="secondary">
            Besides that, it is one of our major benchmarks in terms of best development practices and conventions.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card
          footer={
            <Pagination
              count={10}
              page={page}
              onPageChange={handleChangePage}
              pageSize={pageSize}
              onRowsPerPageChange={handleChangeRowsPerPage}
              align="center"
            />
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5">
                GITHUB REPOSITORY
              </Typography>
              <Typography variant="body2" color="secondary">
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
