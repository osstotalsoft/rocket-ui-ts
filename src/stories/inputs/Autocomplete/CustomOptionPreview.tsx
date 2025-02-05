// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Autocomplete, AutocompleteProps, LoadOptionsPaginated, Typography } from 'components'
import Box from '@mui/material/Box'
import { Grid2 as Grid } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

type OptionType = {
  id: number
  name: string
  icon: React.ElementType
  description: string
}

export const CustomOptionPreview = (props: any) => {
  const [value, setValue] = useState<unknown>()
  const { label, options, loadOptions } = props as AutocompleteProps<unknown>

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 6, sm: 12 }}>
        <Typography variant="caption" emphasis="bold">
          Custom option preview
        </Typography>
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <Typography variant="caption" emphasis="bold">
          Custom option paginated
        </Typography>
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <Autocomplete
          creatable
          label={label}
          options={options}
          value={value}
          onChange={(v: unknown) => setValue(v)}
          renderOption={(props: React.HTMLAttributes<HTMLLIElement> & { key: any }, unknownOption: unknown) => {
            const option = unknownOption as OptionType
            return (
              <li {...props}>
                <Box component={option.icon} width={25} height={25} marginRight="15px" />
                <Box>
                  <Typography variant="body1">{option.name}</Typography>
                  <Typography variant="body2" color="error">
                    {option.description}
                  </Typography>
                </Box>
              </li>
            )
          }}
        />
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <Autocomplete
          label={label}
          loadOptions={loadOptions}
          isPaginated
          value={value}
          onChange={(v: unknown) => setValue(v)}
          renderOption={(props: React.HTMLAttributes<HTMLLIElement> & { key: any }, unknownOption: unknown) => {
            const option = unknownOption as OptionType
            return (
              <li {...props}>
                <Box component={CheckIcon} width={25} height={25} marginRight="15px" />
                <Box>
                  <Typography variant="body1">{option.name}</Typography>
                  <Typography variant="body2" color="error">
                    {JSON.stringify(option)}
                  </Typography>
                </Box>
              </li>
            )
          }}
        />
      </Grid>
    </Grid>
  )
}
