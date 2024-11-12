// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { ExpandingText, Typography } from 'components'

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis. Sed in condimentum sapien. Morbi viverra, dolor sed sollicitudin tristique, dui sem pretium odio, nec bibendum nibh velit vel turpis. Maecenas elit velit, molestie quis cursus eu, dignissim a elit. Etiam accumsan cursus ipsum, sit amet semper arcu faucibus sed. Donec aliquam fermentum ligula, a cursus lacus finibus non. Fusce id sollicitudin dui. Suspendisse malesuada lorem enim, at euismod neque tincidunt pellentesque.'

export const DisplayPreview: React.FunctionComponent = () => (
  <Grid container rowSpacing={2}>
    <Grid>
      <Typography variant="body2" emphasis="bold">
        display: inline-block
      </Typography>
      <ExpandingText text={text} display="inline-block" minLength={250} />
    </Grid>
    <Grid>
      <Typography variant="body2" emphasis="bold">
        display: block
      </Typography>
      <ExpandingText text={text} display="block" minLength={250} />
    </Grid>
    <Grid>
      <Typography variant="body2" emphasis="bold">
        display: flex; justify-content: flex-end
      </Typography>
      <ExpandingText text={text} display="flex" justifyContent="flex-end" minLength={300} />
    </Grid>
  </Grid>
)
