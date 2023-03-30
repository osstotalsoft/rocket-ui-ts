// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useCallback, useState } from 'react'
import { Button } from '../../../components'
import { Box, FormControlLabel, Switch } from '@mui/material'

export const ButtonLoadingPreview: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = useCallback(() => setLoading(current => !current), [])

  return (
    <>
      <FormControlLabel
        control={<Switch checked={loading} onChange={toggleLoading} name="loading" color="primary" />}
        label="Loading"
        sx={{ mb: '15px' }}
      />
      <Box columnGap="15px" display="flex">
        <Button variant="contained" loading={loading}>
          Contained
        </Button>
        <Button variant="outlined" loading={loading}>
          Outlined
        </Button>
        <Button variant="text" loading={loading}>
          Text
        </Button>
      </Box>
    </>
  )
}
