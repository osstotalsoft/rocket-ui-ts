// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, ToastContainer, useToast } from 'components'
import Grid from '@mui/material/Grid2'

export const TextSizeSmallPreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <ToastContainer {...args} />
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a default (small) text font!', 'success', { ...args })}
        >
          {'Small text font'}
        </Button>
      </Grid>
      {/* <ToastContainer {...args} />
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a medium text font', 'success', { ...args })}
        >
          {'Medium text font'}
        </Button>
      </Grid>
      <ToastContainer {...args} />
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a large text font', 'success', { ...args })}
        >
          {'Large toast font'}
        </Button>
      </Grid> */}
    </Grid>
  )
}

export const TextSizeMediumPreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <ToastContainer textSize="medium" {...args} />
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a medium text font', 'success', { ...args })}
        >
          {'Medium text font'}
        </Button>
      </Grid>
    </Grid>
  )
}

export const TextSizeLargePreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <ToastContainer textSize="large" {...args} />
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a large text font', 'success', { ...args })}
        >
          {'Large toast font'}
        </Button>
      </Grid>
    </Grid>
  )
}

// export default TextSizePreview
