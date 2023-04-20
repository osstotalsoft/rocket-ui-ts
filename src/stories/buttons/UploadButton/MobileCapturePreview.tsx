import React from 'react'
import { Box } from '@mui/material'
import { Typography, UploadButton } from 'components'

export const MobileCapturePreview = () => {
  return (
    <>
      <Box gap="15px" display="flex">
        <UploadButton accept="image/*" capture="environment" tooltip="Environment Camera Photo" />
        <UploadButton accept="image/*" capture="user" tooltip="User Camera Photo" />
        <UploadButton accept="video/*" capture="environment" tooltip="Environment Camera Video" />
        <UploadButton accept="video/*" capture="user" tooltip="User Camera Video" />
      </Box>
      <Box maxWidth="250px">
        <Typography variant="caption" style={{ maxWidth: '300px' }}>
          Note these work better on mobile devices; If your device is a desktop computer, you&#39;ll likely get a typical
          file picker.
        </Typography>
      </Box>
    </>
  )
}
