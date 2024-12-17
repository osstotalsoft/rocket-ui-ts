// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, ToastContainer, useToast } from 'components'
import Grid from '@mui/material/Grid2'

const TextSizePreview = (args: any) => {
  const addToast = useToast()

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <ToastContainer {...args} />
      <Button
        size={'small'}
        color={'primary'}
        onClick={() =>
          addToast('This message font will change if you change textSize property of ToastContainer!', 'success', {
            ...args
          })
        }
      >
        {'Change text size from controls.'}
      </Button>
    </Grid>
  )
}

export default TextSizePreview
