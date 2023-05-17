// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Autocomplete } from 'components'

export const DefaultPreview = (props: any) => {
  const [value, setValue] = useState()

  return <Autocomplete {...props} value={value} onChange={setValue} />
}
