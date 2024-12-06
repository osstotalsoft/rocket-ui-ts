// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button, useToast } from 'components'

const PositionsPreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a success message!', 'success', { ...args, position: 'top-left' })}
        >
          {'Top Left Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This the default position!', 'info', { ...args, position: 'top-center' })}
        >
          {'Top Center Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { ...args, position: 'top-right' })}
        >
          {'Top Right Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is an error message!', 'error', { ...args, position: 'bottom-right' })}
        >
          {'Bottom Right Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'success', { ...args, position: 'bottom-center' })}
        >
          {'Bottom Center Position'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default message!', 'warning', { ...args, position: 'bottom-left' })}
        >
          {'Bottom Left Position'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default PositionsPreview
