import React, { useState, useCallback } from 'react'
import { head, join, prop, map } from 'ramda'
import { Box } from '@mui/system'
import { Typography, UploadButton } from 'components'

export const MultipleSelectionPreview = () => {
  const [file, setFile] = useState('')
  const [files, setFiles] = useState('')

  const handleFileSelected = useCallback((files: FileList) => setFile(prop('name', head([...files])) as string), [])
  const handleFilesSelected = useCallback(
    (files: FileList) =>
      setFiles(
        join(
          '; ',
          map((file: File) => file.name, [...files])
        )
      ),
    []
  )

  return (
    <>
      <Box mb="15px">
        <UploadButton onFilesChanged={handleFileSelected} tooltip="Select one file (default)" />
        <Typography variant="body1">{file}</Typography>
      </Box>
      <Box>
        <UploadButton multiple onFilesChanged={handleFilesSelected} tooltip="Select multiple files" />
        <Typography variant="body1">{files}</Typography>
      </Box>
    </>
  )
}
