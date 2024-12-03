import React from 'react'
import Grid from '@mui/material/Grid2'
import FormattedJson from './components/FormattedJson'
import ColumnHeader from './components/ColumnHeader'
import { Autocomplete } from 'components'
import { options, primitiveNumericOptions, primitiveStringOptions } from './_mocks'
import Typography from 'components/dataDisplay/Typography/TypographyStyles'

export const OptionTypesPreview = () => {
  const [value, setValue] = React.useState(null)
  const [numericValue, setNumericValue] = React.useState(null)
  const [stringValue, setStringValue] = React.useState(null)

  return (
    <Grid container spacing={2}>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <ColumnHeader>{'Component'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Option Type'}</ColumnHeader>
        </Grid>
        <Grid size={3}>
          <ColumnHeader>{'Value'}</ColumnHeader>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete label="Autocomplete" value={value} onChange={setValue} isClearable={true} options={options} />
        </Grid>
        <Grid container alignContent={'flex-start'} size={3}>
          <Typography variant={'body1'}>{'Object: { id: number, name: string }'}</Typography>
        </Grid>
        <Grid size={3}>
          <FormattedJson>{value}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="Numeric Autocomplete"
            value={numericValue}
            onChange={setNumericValue}
            isClearable={true}
            options={primitiveNumericOptions}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant={'body1'}>{'Number'}</Typography>
        </Grid>
        <Grid size={3}>
          <FormattedJson>{numericValue}</FormattedJson>
        </Grid>
      </Grid>
      <Grid container spacing={4} size={12}>
        <Grid size={3}>
          <Autocomplete
            label="String Autocomplete"
            value={stringValue}
            onChange={setStringValue}
            options={primitiveStringOptions}
            isClearable={true}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant={'body1'}>{'String'}</Typography>
        </Grid>
        <Grid size={3}>
          <FormattedJson>{stringValue}</FormattedJson>
        </Grid>
      </Grid>
    </Grid>
  )
}
