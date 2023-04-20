import React from 'react'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated'
import ImageSearchIcon from '@mui/icons-material/ImageSearch'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { Box } from '@mui/system'
import { UploadButton } from 'components'

export const CustomIconsPreview = () => {
  return (
    <Box gap="15px" display="flex">
      <UploadButton tooltip="Backup (default)" />
      <UploadButton Icon={BrowserUpdatedIcon} tooltip="BrowserUpdated" />
      <UploadButton Icon={ImageSearchIcon} tooltip="ImageSearch" />
      <UploadButton Icon={DriveFolderUploadIcon} tooltip="DriveFolderUpload" />
    </Box>
  )
}
