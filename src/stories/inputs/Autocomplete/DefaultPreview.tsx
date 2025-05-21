// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Autocomplete, Typography } from 'components'
import { Stack } from '@mui/material'

export const DefaultPreview = (props: any) => {
  const [value, setValue] = useState(props?.value || null)

  return (
    <Stack spacing={1}>
      <Autocomplete {...props} value={value} onChange={setValue} />
      <Typography>{`Selected value: ${JSON.stringify(value)}`}</Typography>
    </Stack>
  )
}
