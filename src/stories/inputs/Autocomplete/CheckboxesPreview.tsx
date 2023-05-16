// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Autocomplete } from 'components'
import { emptyArray } from 'testingUtils/constants'

export const CheckboxesPreview = (props: any) => {
  const [value, setValue] = useState(emptyArray)

  return <Autocomplete {...props} value={value} onChange={setValue} />
}
