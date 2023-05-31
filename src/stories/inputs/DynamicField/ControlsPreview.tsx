// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Grid, Switch } from '@mui/material'
import { Autocomplete, DynamicField, Typography } from 'components'
import { ControlType } from 'components/inputs/DynamicField/types'
import { SwitchProps } from '@mui/material'
import { controlTypes } from './_mocks'
import { options } from '../Autocomplete/_mocks'
import { useContainerSizing, useDynamicProps } from './_hooks'
import { InfoLink } from './ControlPreview'

const DefaultPreview = () => {
  const [value, setValue] = useState<unknown>()
  const [type, setType] = useState<ControlType>(ControlType.Text)

  const { controlValues, props, currentControlData, handlePropsChange } = useDynamicProps(type)
  const width = useContainerSizing()

  return (
    <Grid container spacing={2} sx={{ width }}>
      <Grid item container justifyContent={'center'} alignItems={'center'} sx={{ gap: '.5rem', marginBottom: '1rem' }}>
        <Typography fontWeight={700}>Control type:</Typography>
        <Autocomplete
          options={controlTypes}
          simpleValue
          value={type}
          onChange={value => {
            setValue(null)
            setType(value)
          }}
        />
      </Grid>
      <Grid item xs={12} container alignItems={'center'} spacing={5}>
        <Grid item container justifyContent={'center'} xs={12} sm={currentControlData.props.length > 0 ? 6 : 12}>
          <DynamicField<SwitchProps>
            controlType={type}
            value={value}
            onChange={newValue => setValue(newValue)}
            options={options}
            {...props}
            CustomComponent={Switch}
            customComponentProps={{
              checked: Boolean(value),
              onChange: event => setValue(event.target.checked),
              title: 'Dynamic (Custom)'
            }}
          />
        </Grid>
        {currentControlData.props.length > 0 && (
          <Grid item container xs={12} sm={6} sx={{ gap: '.75rem', flexDirection: 'column' }}>
            <Typography fontWeight={700}>
              Options{' '}
              {currentControlData.link && (
                <>
                  (for more, see <InfoLink link={currentControlData.link} />){' '}
                </>
              )}
              :
            </Typography>
            {currentControlData.props.map(({ name, type, label, options }) => (
              <DynamicField
                id={name}
                key={name}
                controlType={type}
                onChange={value => handlePropsChange(name, value)}
                label={label}
                options={options}
                value={controlValues[name]}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default DefaultPreview
