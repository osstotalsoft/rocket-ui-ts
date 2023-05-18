import { Button, Dialog } from 'components'
import React, { useCallback, useState } from 'react'

const DefaultPreview = ({ button, ...props }: any) => {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(current => !current), [])

  return (
    <>
      <Button children={button} variant="outlined" onClick={toggle} />
      <Dialog {...props} id="default-dialog" open={open} onClose={toggle} />
    </>
  )
}

export default DefaultPreview
