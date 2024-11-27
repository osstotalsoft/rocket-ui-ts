// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button, useToast } from 'components'
import { emptyFunction } from 'components/utils/constants'

const ActionsPreview = () => {
  const addToast = useToast()

  const CustomMessageWithActions = () => (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>{'This is a custom toast with actions'}</Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={emptyFunction}>
          {'Button 1'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={emptyFunction}>
          {'Button 2'}
        </Button>
      </Grid>
    </Grid>
  )

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button size={'medium'} color={'primary'} onClick={() => addToast(CustomMessageWithActions, 'success')}>
          {'Actions toast'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ActionsPreview
