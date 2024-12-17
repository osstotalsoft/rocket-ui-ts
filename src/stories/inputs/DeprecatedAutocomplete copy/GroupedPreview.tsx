// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useCallback, useState } from 'react'
import { DeprecatedAutocomplete } from 'components'
import { emptyArray } from 'components/utils/constants'
import { groupedOptions } from './_mocks'
import { styled } from '@mui/material'

const GroupHeader = styled('div')(({ theme }) => ({
  ...theme.typography.defaultFont,
  padding: '4px 10px',
  fontWeight: 'bold'
}))

const GroupItems = styled('ul')(({ theme }) => ({
  ...theme.typography.defaultFont,
  paddingLeft:'5px'
}))

export const GroupedPreview = (props: any) => {
  const [value, setValue] = useState(emptyArray)

  const groupBy = useCallback((option: any) => option.category?.name, [])

  const renderGroup = useCallback(
    (params: any) => (
      <li key={params.key}>
        <GroupHeader>{params.group}</GroupHeader>
        <GroupItems>{params.children}</GroupItems>
      </li>
    ),
    []
  )

  return (
    <DeprecatedAutocomplete
      {...props}
      fullWidth
      value={value}
      onChange={setValue}
      options={groupedOptions}
      groupBy={groupBy}
      renderGroup={renderGroup}
    />
  )
}
