import { Box } from '@mui/material'
import { Button, LinearProgress } from 'components'
import React, { useState } from 'react'

const GlobalPreview = () => {
  const [show, setShow] = useState(false)

  return (
    <Box>
      {show && <LinearProgress global />}
      <Button onClick={() => setShow(prev => !prev)}>Toggle global loader</Button>
    </Box>
  )
}

export default GlobalPreview
