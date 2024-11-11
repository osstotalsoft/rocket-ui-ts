// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Typography } from 'components'
import React from 'react'

export const ColorsPreview: React.FunctionComponent = () => (
  <>
    <Typography sx={{ color: 'initial' }} gutterBottom> {/*TODO*/}
      Initial
    </Typography>
    <Typography color="error" gutterBottom>
      Error
    </Typography>
    <Typography color="primary" gutterBottom>
      Primary
    </Typography>
    <Typography color="secondary" gutterBottom>
      Secondary
    </Typography>
    <Typography color="textPrimary" gutterBottom>
      Text Primary
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Text Secondary
    </Typography>
  </>
)
