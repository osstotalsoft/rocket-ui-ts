import React from 'react'
import { Box } from '@mui/system'
import { UploadButton } from 'components'

export const IconPropsPreview = () => {
  return (
    <>
      <Box gap="15px" display="flex" mb="15px">
        <UploadButton iconProps={{ fontSize: 'inherit' }} tooltip="inherit" />
        <UploadButton iconProps={{ fontSize: 'small' }} tooltip="small (default)" />
        <UploadButton iconProps={{ fontSize: 'medium' }} tooltip="medium" />
        <UploadButton iconProps={{ fontSize: 'large' }} tooltip="large" />
      </Box>
      <Box gap="15px" display="flex">
        <UploadButton disabled iconProps={{ fontSize: 'inherit' }} tooltip="inherit" />
        <UploadButton disabled iconProps={{ fontSize: 'small' }} tooltip="small (default)" />
        <UploadButton disabled iconProps={{ fontSize: 'medium' }} tooltip="medium" />
        <UploadButton disabled iconProps={{ fontSize: 'large' }} tooltip="large" />
      </Box>
    </>
  )
}
