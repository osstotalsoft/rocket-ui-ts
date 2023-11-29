import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import ControlledCheckbox from './components/ControlledCheckBox'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveOptions, numericOptions } from './_mocks'
import { Autocomplete } from 'components'
import { emptyArray } from 'components/utils/constants'

export const MultipleSelectionPreview = () => {
  const [simpleValueBasic, setSimpleValueBasic] = useState(false)
  const [creatableBasic, setCreatableBasic] = useState(false)
  const [basicValue, setBasicValue] = useState(emptyArray)
  const [disabledBasic, setDisabledBasic] = useState(false)

  const [creatablePrimitive, setCreatablePrimitive] = useState(false)
  const [primitiveValue, setPrimitiveValue] = useState(emptyArray)

  const [simpleValueNumeric, setSimpleValueNumeric] = useState(false)
  const [creatableNumeric, setCreatableNumeric] = useState(false)
  const [numericValue, setNumericValue] = useState(emptyArray)

  useEffect(() => setPrimitiveValue(emptyArray), [creatablePrimitive])
  useEffect(() => setNumericValue(emptyArray), [simpleValueNumeric, creatableNumeric])
  useEffect(() => setBasicValue(emptyArray), [simpleValueBasic, creatableBasic])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={6}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Type'}</ColumnHeader>
        </Grid>
        <Grid item xs={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={6}>
          <Autocomplete
            label="Autocomplete"
            value={basicValue}
            onChange={setBasicValue}
            creatable={creatableBasic}
            simpleValue={simpleValueBasic}
            options={options}
            isMultiSelection
            disabled={disabledBasic}
          />
        </Grid>
        <Grid item xs={3} container alignContent={'flex-start'}>
          <ControlledCheckbox value={creatableBasic} onChange={setCreatableBasic} label={'creatable'} />
          <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
          <ControlledCheckbox value={disabledBasic} onChange={setDisabledBasic} label={'disabled'} />
        </Grid>
        <Grid item xs={3}>
          <FormattedJson>{basicValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={6}>
          <Autocomplete
            label="Primitive Autocomplete"
            value={primitiveValue}
            creatable={creatablePrimitive}
            onChange={setPrimitiveValue}
            options={primitiveOptions}
            isMultiSelection
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
        <Grid item xs={6}>
          <Autocomplete
            label="Numeric Autocomplete"
            value={numericValue}
            onChange={setNumericValue}
            creatable={creatableNumeric}
            simpleValue={simpleValueNumeric}
            options={numericOptions}
            labelKey={'period'}
            valueKey={'period'}
            isMultiSelection
          />
        </Grid>
        <Grid item xs={3}>
          <ControlledCheckbox value={creatableNumeric} onChange={setCreatableNumeric} label={'creatable'} />
          <ControlledCheckbox value={simpleValueNumeric} onChange={setSimpleValueNumeric} label={'simpleValue'} />
        </Grid>
        <Grid item xs={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
