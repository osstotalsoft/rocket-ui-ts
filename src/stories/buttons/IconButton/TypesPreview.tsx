import React from 'react'
import { Grid } from '@mui/material'
import { IconButton } from '../../../components'

export const TypesPreview: React.FunctionComponent = () => (
  <Grid container spacing={3}>
    <Grid item>
      <IconButton tooltip={'Add'} type="add" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Cancel'} type="cancel" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Delete'} type="delete" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Download'} type="download" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Downward'} type="downward" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Edit'} type="edit" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'View'} type="view" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Save'} type="save" variant="text" />
    </Grid>
    <Grid item>
      <IconButton tooltip={'Upward'} type="upward" variant="text" />
    </Grid>
  </Grid>
)
