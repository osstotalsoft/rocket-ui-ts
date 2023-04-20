import React, { useCallback, useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket'
import { IconButton } from 'components'

export const LoadingPreview: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = useCallback(() => setLoading(current => !current), [])

  return (
    <>
      <FormControlLabel
        control={<Switch checked={loading} onChange={toggleLoading} name="loading" color="primary" />}
        label="Loading"
        sx={{ mb: '15px' }}
      />
      <Box columnGap="15px" display="flex">
        <IconButton tooltip="secondary" loading={loading} size="medium">
          <RocketIcon />
        </IconButton>
        <IconButton variant="text" tooltip="`text` variant" loading={loading} size="medium">
          <RocketIcon />
        </IconButton>
        <IconButton variant="outlined" tooltip="`outlined` variant" loading={loading} size="medium">
          <RocketIcon />
        </IconButton>
      </Box>
    </>
  )
}
