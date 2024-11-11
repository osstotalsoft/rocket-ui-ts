// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Grid2 as Grid, Stack } from '@mui/material'
import { DynamicField, Typography, ControlType } from 'components'
import LinkTo from '@storybook/addon-links/react'
import { options } from '../Autocomplete/_mocks'
import { useContainerSizing, useDynamicProps } from './_hooks'
import { ControlData } from './_mocks'

type ControlPreviewProps = {
  controlType: ControlType
  [key: string]: any
}

const ControlPreview = ({ controlType, ...rest }: ControlPreviewProps) => {
  const [value, setValue] = useState<unknown>()

  const { controlValues, props, currentControlData, handlePropsChange } = useDynamicProps(controlType)
  const width = useContainerSizing()

  return (
    <Grid container alignItems={'center'} spacing={2} minWidth={width}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <DynamicField
          controlType={controlType}
          label={`Dynamic (${controlType})`}
          value={value}
          options={options}
          {...rest}
          {...props}
          onChange={newValue => setValue(newValue)}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        {currentControlData.props.length > 0 && (
          <Stack gap={2}>
            <Typography fontWeight={700}>
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
          </Stack>
        )}
      </Grid>
    </Grid>
  )
}

export default ControlPreview

export const InfoLink = ({ link }: { link: ControlData['link'] }) => {
  const { label, kind, story, url } = link

  if (url)
    return (
      <a href={url} target="_blank">
        {label}
      </a>
    )
  if (kind && story)
    return (
      <LinkTo kind={kind} story={story}>
        {label}
      </LinkTo>
    )
  return <></>
}
