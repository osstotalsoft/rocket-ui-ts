import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import ControlledCheckbox from './components/ControlledCheckBox'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveStringOptions, numericOptions } from './_mocks'
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
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
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
        <Grid size={6}>
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
        <Grid container alignContent={'flex-start'} size={3}>
          <ControlledCheckbox value={creatableBasic} onChange={setCreatableBasic} label={'creatable'} />
          <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
          <ControlledCheckbox value={disabledBasic} onChange={setDisabledBasic} label={'disabled'} />
        </Grid>
        <Grid size={3}>
          <FormattedJson>{basicValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
          <Autocomplete
            label="Primitive Autocomplete"
            value={primitiveValue}
            creatable={creatablePrimitive}
            onChange={setPrimitiveValue}
            options={primitiveStringOptions}
            isMultiSelection
          />
        </Grid>
        <Grid size={3}>
          <ControlledCheckbox value={creatablePrimitive} onChange={setCreatablePrimitive} label={'creatable'} />
        </Grid>
        <Grid size={3}>
          <FormattedJson>{primitiveValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={6}>
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
        <Grid size={3}>
          <ControlledCheckbox value={creatableNumeric} onChange={setCreatableNumeric} label={'creatable'} />
          <ControlledCheckbox value={simpleValueNumeric} onChange={setSimpleValueNumeric} label={'simpleValue'} />
        </Grid>
        <Grid size={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
