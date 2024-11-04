// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Grid } from '@mui/material'
import { toast } from 'react-toastify'
import { Button, useToast } from 'components'

const PositionsPreview = () => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a success message!', 'success', { position: 'top-left' })}
        >
          {'Top Left Position'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This the default position!', 'info', { position: 'top-center' })}
        >
          {'Top Center Position'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { position: 'top-right' })}
        >
          {'Top Right Position'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an error message!', 'error', { position: 'bottom-right' })}
        >
          {'Bottom Right Position'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'success', { position: 'bottom-center' })}
        >
          {'Bottom Center Position'}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'warning', { position: 'bottom-left' })}
        >
          {'Bottom Left Position'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default PositionsPreview
