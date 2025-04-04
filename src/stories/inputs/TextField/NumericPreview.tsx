// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { TextField } from 'components'
import Grid from '@mui/material/Grid2'

const NumericPreview = () => {
  const [numberValue, setNumberValue] = useState()
  const [internationalValue, setInternationalValue] = useState(50)

  const handleValue = (value: any) => {
    setNumberValue(value)
  }

  const handleInternationalValue = (value: any) => {
    setInternationalValue(value)
  }

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={3}>
        <TextField
          isNumeric
          label="Basic number field"
          value={numberValue || ''}
          onChange={handleValue}
          debounceBy={500}
          fullWidth
          isClearable
        />
      </Grid>
      <Grid size={3}>
        <TextField
          isNumeric
          language="de-DE"
          label="Internationalized number field"
          value={internationalValue}
          onChange={handleInternationalValue}
          fullWidth
        />
      </Grid>
      <Grid size={3}>
        <TextField
          isNumeric
          language="de-DE"
          label="Internationalized currency field"
          value={internationalValue}
          onChange={handleInternationalValue}
          currency="EUR"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default NumericPreview
