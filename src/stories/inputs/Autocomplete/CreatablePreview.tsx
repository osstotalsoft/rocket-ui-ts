import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import ControlledCheckbox from './components/ControlledCheckBox'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveStringOptions, primitiveNumericOptions, numericOptions } from './_mocks'
import { Autocomplete } from 'components'

export const CreatablePreview = () => {
  const [simpleValueBasic, setSimpleValueBasic] = useState(false)
  const [basicValue, setBasicValue] = useState()

  const [primitiveStringValue, setPrimitiveStringValue] = useState()
  const [primitiveNumericValue, setPrimitiveNumericValue] = useState()

  const [simpleValueNumeric, setSimpleValueNumeric] = useState(false)
  const [numericValue, setNumericValue] = useState()

  useEffect(() => setBasicValue(null), [simpleValueBasic])
  useEffect(() => setNumericValue(null), [simpleValueNumeric])

  return (
    <Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Type'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="Autocomplete"
            value={basicValue}
            onChange={setBasicValue}
            creatable
            simpleValue={simpleValueBasic}
            isClearable={true}
            options={options}
          />
        </Grid>
        <Grid container alignContent={'flex-start'} size={3}>
          <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
        </Grid>
        <Grid size={3}>
          <FormattedJson>{basicValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="Primitive String Autocomplete"
            value={primitiveStringValue}
            creatable
            onChange={setPrimitiveStringValue}
            isClearable={true}
            options={primitiveStringOptions}
          />
        </Grid>
        <Grid size={3}></Grid>
        <Grid size={3}>
          <FormattedJson>{primitiveStringValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="Primitive Numeric Autocomplete"
            value={primitiveNumericValue}
            creatable
            onChange={setPrimitiveNumericValue}
            isClearable={true}
            options={primitiveNumericOptions}
          />
        </Grid>
        <Grid size={3}></Grid>
        <Grid size={3}>
          <FormattedJson>{primitiveNumericValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="Numeric Autocomplete"
            value={numericValue}
            onChange={setNumericValue}
            creatable
            labelKey={'period'}
            valueKey={'period'}
            simpleValue={simpleValueNumeric}
            options={numericOptions}
            isClearable={true}
          />
        </Grid>
        <Grid size={3}>
          <ControlledCheckbox value={simpleValueNumeric} onChange={setSimpleValueNumeric} label={'simpleValue'} />
        </Grid>
        <Grid size={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
