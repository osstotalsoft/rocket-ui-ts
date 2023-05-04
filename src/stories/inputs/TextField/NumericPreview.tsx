// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { TextField } from 'components'
import { Grid } from '@mui/material'

const NumericPreview = () => {
  const [numberValue, setNumberValue] = useState()
  const [internationalValue, setInternationalValue] = useState(50)
  const [phoneNumberValue, setPhoneNumberValue] = useState()

  const handleValue = (value: any) => {
    setNumberValue(value)
  }

  const handleInternationalValue = (value: any) => {
    setInternationalValue(value)
  }

  const handlePhoneValue = (value: any) => {
    setPhoneNumberValue(value)
  }

  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid item xs={12}>
        <TextField
          isNumeric
          label="Basic number field"
          value={numberValue}
          onChange={handleValue}
          debounceBy={500}
          fullWidth
          isClearable
        />
      </Grid>
      {/* <Grid item xs={3}>
        <TextField
          isNumeric
          language="de-DE"
          label="Internationalized number field"
          value={internationalValue || ''}
          onChange={handleInternationalValue}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          isNumeric
          language="de-DE"
          label="Internationalized currency field"
          value={internationalValue || ''}
          onChange={handleInternationalValue}
          currency="EUR"
          fullWidth
        />
      </Grid> */}
      <Grid item xs={10}>
        <TextField
          label="Custom phone number format"
          value={phoneNumberValue}
          onChange={handlePhoneValue}
          isNumeric
          inputProps={{ format: '+40 (###) ### ###', mask: '_', allowEmptyFormatting: true }}
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default NumericPreview
