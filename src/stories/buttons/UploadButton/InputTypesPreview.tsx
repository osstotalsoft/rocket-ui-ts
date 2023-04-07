import React, { useCallback, useState } from 'react'
import UploadButton from '../../../components/buttons/UploadButton'
import { Typography } from '../../../components'
import { Box } from '@mui/material'

export const InputTypesPreview: React.FC = () => {
  const [error, setError] = useState<any>()
  const handleError = useCallback((err: any) => setError(err), [])
  const handleChoice = useCallback(() => setError(undefined), [])

  return (
    <>
      <Box gap="15px" display="flex">
        <UploadButton onFilesChanged={handleChoice} tooltip="All files (default)" />
        <UploadButton accept="image/*" onError={handleError} onFilesChanged={handleChoice} tooltip="Images" />
        <UploadButton accept="audio/*" onError={handleError} onFilesChanged={handleChoice} tooltip="Audios" />
        <UploadButton
          accept=".pdf,.txt"
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip="Custom (*.pdf, *.txt)"
        />
      </Box>
      <Box>
        <Typography variant="h6" color="error">
          {error?.message}
        </Typography>
        <Typography variant="body1" color="error">
          {error?.files?.[0]?.name}
        </Typography>
      </Box>
    </>
  )
}
