import React, { useState, useCallback } from 'react'
import { join, map, prop } from 'ramda'
import { Box } from '@mui/system'
import { Typography, UploadButton } from 'components'

export const SizesPreview = () => {
  const [error, setError] = useState<any>()
  const handleError = useCallback((err: any) => setError(err), [])
  const handleChoice = useCallback(() => setError(undefined), [])

  return (
    <>
      <Box gap="15px" display="flex">
        <UploadButton onFilesChanged={handleChoice} tooltip="All files (default)" />
        <UploadButton
          multiple
          maxTotalSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip="Max total size 5000 bytes"
        />
        <UploadButton
          multiple
          maxItemSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip="Max item size 5000 bytes"
        />
        <UploadButton
          multiple
          minTotalSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip="Min total size 5000 bytes"
        />
        <UploadButton
          multiple
          minItemSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip="Min item size 5000 bytes"
        />
      </Box>
      <Box>
        <Typography variant="h6" color="error">
          {error?.message}
        </Typography>
        <Typography variant="body1" color="error">
          {error?.files && join('; ', map(prop('name'), error.files))}
        </Typography>
      </Box>
    </>
  )
}
