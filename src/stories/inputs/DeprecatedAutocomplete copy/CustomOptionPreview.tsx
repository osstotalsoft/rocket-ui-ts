// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { DeprecatedAutocomplete, Typography } from 'components'
import Box from '@mui/material/Box'

export const CustomOptionPreview = (props: any) => {
  const [value, setValue] = useState()

  return (
    <DeprecatedAutocomplete
      {...props}
      value={value}
      onChange={setValue}
      renderOption={(props, option) => (
        <li {...props}>
          <Box component={option.icon} width={25} height={25} marginRight="15px" />
          <Box>
            <Typography variant="body1">{option.name}</Typography>
            <Typography variant="body2" color="error">
              {option.description}
            </Typography>
          </Box>
        </li>
      )}
    />
  )
}
