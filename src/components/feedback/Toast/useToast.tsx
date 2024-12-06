// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { useCallback } from 'react'
import { toast, ToastContent, ToastOptions as ToastOptionsBase, TypeOptions as ToastifyTypeOptions } from 'react-toastify'
import { classes } from './ToastStyles'
import cx from 'classnames'
import { getTransitionType, ToastOptions } from './types'
import Toast from './utils'
import React from 'react'

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed. It can be a string or a React component.
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (
      message: ToastContent,
      variant?: ToastifyTypeOptions,
      { transitionType, actions, ...restOptions } = {} as ToastOptions
    ) => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })

      const options: ToastOptionsBase = {
        ...restOptions,
        transition: getTransitionType(transitionType),
        className: toastClasses
      }

      switch (variant) {
        case 'error':
          toast.error(<Toast message={message} variant={variant} actions={actions} />, options)
          break
        case 'info':
          toast.info(<Toast message={message} variant={variant} actions={actions} />, options)
          break
        case 'success':
          toast.success(<Toast message={message} variant={variant} actions={actions} />, options)
          break
        case 'warning':
          toast.warn(<Toast message={message} variant={variant} actions={actions} />, options)
          break
        default:
          toast(<Toast message={message} variant={variant} actions={actions} />, options)
          break
      }
    },
    []
  )
}

export default useToast
