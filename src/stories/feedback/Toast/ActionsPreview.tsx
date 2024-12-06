// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { Button, Typography, useToast } from 'components'
import { emptyFunction } from 'components/utils/constants'
import { Stack } from '@mui/material'

const ActionsPreview = (args: any) => {
  const addToast = useToast()

  const CustomMessageWithActions = () => (
    <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" gap={1}>
      <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
        <Typography>{'Button 1'}</Typography>
      </Button>
      <Button size={'small'} onClick={emptyFunction} variant="text" capitalize={false}>
        <Typography>{'Button 2'}</Typography>
      </Button>
    </Stack>
  )

  return (
    <Button
      size={'medium'}
      color={'primary'}
      onClick={() =>
        addToast('This is a custom toast with actions!', 'success', { ...args, actions: <CustomMessageWithActions /> })
      }
    >
      {'Actions toast'}
    </Button>
  )
}

export default ActionsPreview
