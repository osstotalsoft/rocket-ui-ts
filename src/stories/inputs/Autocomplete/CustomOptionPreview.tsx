// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Autocomplete, Typography } from 'components'
import Box from '@mui/material/Box'

type OptionType = {
  id: number
  name: string
  icon: React.ElementType
  description: string
}

export const CustomOptionPreview = (props: any) => {
  const [value, setValue] = useState()

  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={setValue}
      renderOption={(props, option: OptionType) => (
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
