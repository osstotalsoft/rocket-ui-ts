// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button, usePromiseToast, useToast } from 'components'

const VariantsPreview = () => {
  const addToast = useToast()
  const addPromiseToast = usePromiseToast()

  const resolveAfter3Sec = () => new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a success message!', 'success')}>
          {'Success toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info')}>
          {'Info toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a warning message!', 'warning')}>
          {'Warning toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error')}>
          {'Error toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a default message!')}>
          {'Default toast'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() =>
            addPromiseToast(resolveAfter3Sec(), 'Promise is pending', 'Promise resolved 👌', 'Promise rejected 🤯', {
              draggable: true
            })
          }
        >
          {'Promise toast'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
