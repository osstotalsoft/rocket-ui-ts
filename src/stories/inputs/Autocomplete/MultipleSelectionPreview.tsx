import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid2'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveStringOptions, primitiveNumericOptions } from './_mocks'
import { Autocomplete } from 'components'
import { emptyArray, emptyString } from 'components/utils/constants'

export const MultipleSelectionPreview = () => {
  const [basicReason, setBasicReason] = useState<string>(emptyString)
  const [basicValue, setBasicValue] = useState<any>(emptyArray)
  const handleBasicChange = useCallback((value: any, _env: React.SyntheticEvent, reason: string) => {
    setBasicValue(value)
    setBasicReason(reason)
  }, [])

  const [stringReason, setStringReason] = useState<string>(emptyString)
  const [stringValue, setStringValue] = useState<any>(emptyArray)
  const handleStringChange = useCallback((value: any, _env: React.SyntheticEvent, reason: string) => {
    setStringValue(value)
    setStringReason(reason)
  }, [])

  const [numericReason, setNumericReason] = useState<any>(emptyArray)
  const [numericValue, setNumericValue] = useState<any>(emptyArray)
  const handleNumericChange = useCallback((value: any, _env: React.SyntheticEvent, reason: string) => {
    setNumericValue(value)
    setNumericReason(reason)
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Reason'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
          <Autocomplete
            label="Autocomplete"
            value={basicValue}
            onChange={handleBasicChange}
            options={options}
            isMultiSelection
            creatable
          />
        </Grid>
        <Grid size={3}>{basicReason}</Grid>
        <Grid size={3}>
          <FormattedJson>{basicValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
          <Autocomplete
            label="Primitive Autocomplete"
            value={stringValue}
            onChange={handleStringChange}
            options={primitiveStringOptions}
            isMultiSelection
            creatable
          />
        </Grid>
        <Grid size={3}>{stringReason}</Grid>
        <Grid size={3}>
          <FormattedJson>{stringValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
          <Autocomplete
            label="Numeric Autocomplete"
            value={numericValue}
            onChange={handleNumericChange}
            options={primitiveNumericOptions}
            isMultiSelection
            creatable
          />
        </Grid>
        <Grid size={3}>{numericReason}</Grid>
        <Grid size={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
