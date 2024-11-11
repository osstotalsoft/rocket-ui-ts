// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { TextField } from 'components'
import Grid from '@mui/material/Grid2'

const StepperPreview = () => {
  const [stepperValue, setStepperValue] = useState('')
  const [limitedStepperValue, setLimitedStepperValue] = useState('')
  const [customStepValue, setCustomStepValue] = useState('')

  const handleChangeValue = (value: any) => {
    setStepperValue(value)
  }
  const handleChangeLimitedValue = (value: any) => {
    setLimitedStepperValue(value)
  }
  const handleChangeCustomValue = (value: any) => {
    setCustomStepValue(value)
  }

  return (
    (<Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid size={4}>
        <TextField
          label="Basic stepper"
          isStepper
          value={stepperValue ?? ''}
          onChange={handleChangeValue}
          decimalScale={0}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Limited stepper (0 to 5)"
          isStepper
          value={limitedStepperValue ?? ''}
          onChange={handleChangeLimitedValue}
          decimalScale={0}
          minValue={0}
          maxValue={5}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          label="Custom step value"
          isStepper
          step={0.5}
          value={customStepValue ?? ''}
          onChange={handleChangeCustomValue}
        />
      </Grid>
    </Grid>)
  )
}

export default StepperPreview
