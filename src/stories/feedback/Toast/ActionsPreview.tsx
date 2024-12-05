// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, Typography, useToast } from 'components'
import { emptyFunction } from 'components/utils/constants'
import { Stack } from '@mui/material'
import { styled, AppBar as MuiAppBar } from '@mui/material'

const ActionsPreview = () => {
  const addToast = useToast()

  const AppBar = styled(MuiAppBar)(() => ({
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    bottom: 0,
    top: 'auto',
    marginTop: '8px'
  }))

  const CustomMessageWithActions = () => (
    <AppBar position="sticky" color="transparent">
      <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" gap={1}>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 1'}</Typography>
        </Button>
        <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
          <Typography>{'Button 2'}</Typography>
        </Button>
      </Stack>
    </AppBar>
  )

  return (
    <Button
      size={'medium'}
      color={'primary'}
      onClick={() =>
        addToast('This is an action toast!', 'success', {
          actions: <CustomMessageWithActions />
        })
      }
    >
      {'Actions toast'}
    </Button>
  )
}

export default ActionsPreview
