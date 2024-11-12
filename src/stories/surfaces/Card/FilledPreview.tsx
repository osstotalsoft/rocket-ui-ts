import React from 'react'
import { Card, Button, IconButton, Typography } from 'components'
import QuestionMark from '@mui/icons-material/QuestionMark'
import { Grid2 as Grid, TextField } from '@mui/material'

const FilledPreview = () => {
  return (
    <Card
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
        <Grid size={8}>
          <Typography variant="body1">Please, fill in with your personal information.</Typography>
        </Grid>
        <Grid size={8}>
          <TextField label="First name" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid size={8}>
          <TextField label="Last name" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid size={8}>
          <TextField label="Address line 1" variant="filled" fullWidth value={''} />
        </Grid>
        <Grid size={8}>
          <TextField label="Address line 2" variant="filled" fullWidth value={''} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default FilledPreview
