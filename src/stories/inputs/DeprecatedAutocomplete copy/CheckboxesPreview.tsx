// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { DeprecatedAutocomplete } from 'components'
import { emptyArray } from 'components/utils/constants'

export const CheckboxesPreview = (props: any) => {
  const [value, setValue] = useState(emptyArray)

  return <DeprecatedAutocomplete {...props} value={value} onChange={setValue} />
}
