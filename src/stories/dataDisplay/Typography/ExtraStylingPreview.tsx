// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Typography } from 'components'
import React from 'react'

export const ExtraStylingPreview: React.FunctionComponent = () => (
  <>
    <Typography variant="body1" color="primary" emphasis="bold" gutterBottom tooltip="I'm a tooltip">
      Primary and bold - hover me to see a tooltip
    </Typography>
    <Typography variant="body1" color="secondary" emphasis="italic" gutterBottom>
      Secondary and italic
    </Typography>
    <Typography variant="body1" color="textPrimary" emphasis="underline" gutterBottom>
      Text primary and underline
    </Typography>
    <Typography variant="body1" color="textSecondary" emphasis="line-through" gutterBottom>
      Text secondary and line-through
    </Typography>
    <Typography variant="body1" color="error" emphasis="overline" gutterBottom tooltip="I'm a tooltip">
      Error and overline
    </Typography>
  </>
)
