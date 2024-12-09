// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button, useToast } from 'components'

const TransitionsPreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyContent={'space-evenly'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a success message!', 'success', { ...args, transitionType: 'Slide' })}
        >
          {'Slide transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an info message!', 'info', { ...args, transitionType: 'Zoom' })}
        >
          {'Zoom transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { ...args, transitionType: 'Bounce' })}
        >
          {'Bounce transition'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an error message!', 'error', { ...args, transitionType: 'Flip' })}
        >
          {'Flip transition'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default TransitionsPreview
