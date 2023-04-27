import React from 'react'
import { Button, IconButton, Typography, CollapseCard } from 'components'
import QuestionMark from '@mui/icons-material/QuestionMark'
import { Grid, TextField } from '@mui/material'

const FilledPreview = () => {
  return (
    <CollapseCard
      filled
      title="Delivery information"
      footer={
        <Button variant="contained" size="small" color="info">
          SUBMIT
        </Button>
      }
      actions={
        <IconButton color="info" variant="text" size="small">
          <QuestionMark fontSize="small" />
        </IconButton>
      }
    >
      <Grid container rowSpacing={3} justifyContent="center">
        <Grid item xs={8}>
          <Typography variant="body1">Please, fill in with your personal information.</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField label="First name" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Last name" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Address line 1" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Address line 2" variant="filled" fullWidth value={''} />
        </Grid>
      </Grid>
    </CollapseCard>
  )
}

export default FilledPreview
