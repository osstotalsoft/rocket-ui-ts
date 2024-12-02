import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { options, primitiveStringOptions, primitiveNumericOptions, numericOptions } from './_mocks'
import { Autocomplete, Typography } from 'components'

export const CreatablePreview = () => {
  const [basicValue, setBasicValue] = useState(null)
  const [primitiveStringValue, setPrimitiveStringValue] = useState(null)
  const [primitiveNumericValue, setPrimitiveNumericValue] = useState(null)
  const [numericValue, setNumericValue] = useState(null)

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
            isClearable
            options={options}
          />
        </Grid>
        <Grid container alignContent={'flex-start'} size={3}>
          <Typography variant={'body1'}>{'Object: { id: number, name: string }'}</Typography>
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
            isClearable
            onChange={setPrimitiveStringValue}
            options={primitiveStringOptions}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant={'body1'}>{'String'}</Typography>
        </Grid>
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
            isClearable
            onChange={setPrimitiveNumericValue}
            options={primitiveNumericOptions}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant={'body1'}>{'Number'}</Typography>
        </Grid>
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
            isClearable
            labelKey={'period'}
            valueKey={'period'}
            options={numericOptions}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant={'body1'}>{'Object: { period: number }'}</Typography>
        </Grid>
        <Grid size={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
