// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Grid, Switch, SwitchProps, Stack } from '@mui/material'
import { Autocomplete, DynamicField, Typography } from 'components'
import { ControlType } from 'components/inputs/DynamicField/types'
import { controlTypes } from './_mocks'
import { options } from '../Autocomplete/_mocks'
import { useContainerSizing, useDynamicProps } from './_hooks'
import { InfoLink } from './ControlPreview'

const DynamicControlPreview = () => {
  const [value, setValue] = useState<unknown>()
  const [type, setType] = useState<ControlType>(ControlType.Text)

  const { controlValues, props, currentControlData, handlePropsChange } = useDynamicProps(type)
  const width = useContainerSizing()

  return (
    <Grid container alignItems={'center'} spacing={2} minWidth={width}>
      <Grid item xs={12} sm={6}>
        <DynamicField<SwitchProps>
          controlType={type}
          label={`Dynamic (${type})`}
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
      <Grid item xs={12} sm={6}>
        <Stack gap={2}>
          <Autocomplete
            options={controlTypes}
            simpleValue
            value={type}
            label="Control type"
            onChange={value => {
              setValue(null)
              setType(value)
            }}
          />
          {currentControlData.props.length > 0 && (
            <>
              <Typography emphasis="bold" noWrap>
                Options
                {currentControlData.link && ' - for more, see '}
                {currentControlData.link && <InfoLink link={currentControlData.link} />}:
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
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DynamicControlPreview
