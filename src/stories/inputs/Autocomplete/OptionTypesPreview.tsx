import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import ControlledCheckbox from './components/ControlledCheckBox'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveOptions, numericOptions } from './_mocks'
import { Autocomplete } from 'components'

export const OptionTypesPreview = () => {
  const [simpleValueBasic, setSimpleValueBasic] = useState(false)
  const [basicValue, setBasicValue] = useState()

  const [creatablePrimitive, setCreatablePrimitive] = useState(false)
  const [primitiveValue, setPrimitiveValue] = useState()

  const [simpleValueNumeric, setSimpleValueNumeric] = useState(false)
  const [numericValue, setNumericValue] = useState()

  useEffect(() => setBasicValue(null), [simpleValueBasic])
  useEffect(() => setNumericValue(null), [simpleValueNumeric])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Simple Value'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete
            label="Autocomplete"
            value={basicValue}
            onChange={setBasicValue}
            simpleValue={simpleValueBasic}
            valueKey={simpleValueBasic ? 'Name' : 'Id'}
            isClearable={true}
            options={options}
          />
        </Grid>
        <Grid item xs={3} container alignContent={'flex-start'}>
          <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
        </Grid>
        <Grid item xs={3}>
          <FormattedJson>{basicValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete
            label="Primitive Autocomplete"
            value={primitiveValue}
            creatable={creatablePrimitive}
            onChange={setPrimitiveValue}
            isClearable={true}
            options={primitiveOptions}
          />
        </Grid>
        <Grid item xs={3}>
          <ControlledCheckbox value={creatablePrimitive} onChange={setCreatablePrimitive} label={'creatable'} />
        </Grid>
        <Grid item xs={3}>
          <FormattedJson>{primitiveValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={3}>
          <Autocomplete
            label="Numeric Autocomplete"
            value={numericValue}
            onChange={setNumericValue}
            simpleValue={simpleValueNumeric}
            options={numericOptions}
            labelKey={'period'}
            valueKey={'period'}
            isClearable={true}
          />
        </Grid>
        <Grid item xs={3}>
          <ControlledCheckbox value={simpleValueNumeric} onChange={setSimpleValueNumeric} label={'simpleValue'} />
        </Grid>
        <Grid item xs={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
