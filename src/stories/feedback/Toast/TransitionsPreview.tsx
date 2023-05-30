// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { Button, useToast } from 'components'

const TransitionsPreview = () => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid item xs={2}>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a success message!', 'success', 'Slide')}>
          {'Slide transition'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info', 'Zoom')}>
          {'Zoom transition'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a warning message!', 'warning', 'Bounce')}>
          {'Bounce transition'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error', 'Flip')}>
          {'Flip transition'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default TransitionsPreview
