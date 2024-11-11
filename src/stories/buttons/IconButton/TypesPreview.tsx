import React from 'react'
import Grid from '@mui/material/Grid2'
import { IconButton, IconButtonProps } from 'components'

const sizeProps = { size: 'small', fontSize: 'medium' } satisfies IconButtonProps

export const TypesPreview: React.FunctionComponent = () => (
  <Grid container spacing={3}>
    <Grid>
      <IconButton tooltip={'Add'} type="add" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Cancel'} type="cancel" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Delete'} type="delete" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Download'} type="download" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Downward'} type="downward" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Edit'} type="edit" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'View'} type="view" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Save'} type="save" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Upward'} type="upward" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Expand Less'} type="expandLess" variant="text" {...sizeProps} />
    </Grid>
    <Grid>
      <IconButton tooltip={'Expand More'} type="expandMore" variant="text" {...sizeProps} />
    </Grid>
  </Grid>
)
