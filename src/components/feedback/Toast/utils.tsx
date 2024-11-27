import React from 'react'
import Typography, { TypographyProps } from '../../dataDisplay/Typography'
import { is } from 'ramda'
import { ToastContent } from 'react-toastify'
import { Stack } from '@mui/material'

export const renderEnrichedMessage = (message: ToastContent, actions: React.ReactNode, textProps: TypographyProps) => {
  return is(String, message) ? (
    actions ? (
      <Stack rowGap={1}>
        <Typography variant="body1" {...textProps}>
          {message}
        </Typography>
        {actions}
      </Stack>
    ) : (
      <Typography variant="body1" {...textProps}>
        {message}
      </Typography>
    )
  ) : (
    message
  )
}
