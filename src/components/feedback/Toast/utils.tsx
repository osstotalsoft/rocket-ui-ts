import React, { isValidElement } from 'react'
import { ToastContent } from 'react-toastify'
import { is } from 'ramda'

export const renderEnrichedMessage = (message: ToastContent, actions: React.ReactNode) => {
  return actions && (isValidElement(message) || is(String, message)) ? (
    <>
      {message}
      {actions}
    </>
  ) : (
    message
  )
}
