import React from 'react'
import { Box } from '@mui/system'
import { UploadButton } from 'components'

export const FontSizePreview = () => {
  return (
    <>
      <Box gap="15px" display="flex" mb="15px">
        <UploadButton fontSize="inherit" tooltip="inherit" />
        <UploadButton fontSize="small" tooltip="small (default)" />
        <UploadButton fontSize="medium" tooltip="medium" />
        <UploadButton fontSize="large" tooltip="large" />
      </Box>
      <Box gap="15px" display="flex">
        <UploadButton disabled fontSize="inherit" tooltip="inherit" />
        <UploadButton disabled fontSize="small" tooltip="small (default)" />
        <UploadButton disabled fontSize="medium" tooltip="medium" />
        <UploadButton disabled fontSize="large" tooltip="large" />
      </Box>
    </>
  )
}
