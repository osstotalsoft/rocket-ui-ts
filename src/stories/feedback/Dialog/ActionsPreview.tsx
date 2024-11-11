import Grid from '@mui/material/Grid2'
import { Button, Dialog, TextField } from 'components'
import React, { useCallback, useState } from 'react'

const ActionsPreview = ({ button, ...props }: any) => {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(current => !current), [])

  return (<>
    <Button children={button} variant="outlined" onClick={toggle} />
    <Dialog
      {...props}
      id="default-dialog"
      open={open}
      onClose={toggle}
      showX={false}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
      content={
        <Grid container spacing={2} justifyContent={'center'} sx={{ pt: 3 }}>
          <Grid size={10}>
            <TextField label="username" fullWidth />
          </Grid>
          <Grid size={10}>
            <TextField label="password" type="password" fullWidth />
          </Grid>
        </Grid>
      }
      actions={
        <>
          <Button onClick={toggle} color="primary" variant="contained" size="small">
            {'cancel'}
          </Button>
          <Button onClick={toggle} color="primary" variant="contained" size="small">
            {'continue'}
          </Button>
        </>
      }
    />
  </>)
}

export default ActionsPreview
