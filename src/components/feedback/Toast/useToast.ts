import { useCallback } from 'react'
import {
  toast,
  ToastContent,
  ToastOptions,
  TypeOptions as ToastifyTypeOptions
} from 'react-toastify'
import { classes } from './ToastStyles'
import cx from 'classnames'
import { getTransitionType, ToastContainerProps } from './types'
import { renderEnrichedMessage } from './utils'

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed. It can be a string or a React component.
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (message: ToastContent, variant?: ToastifyTypeOptions, { transitionType, actions, textProps, ...restOptions } = {} as ToastContainerProps) => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })

      const options: ToastOptions = {
        ...restOptions,
        transition: getTransitionType(transitionType),
        className: toastClasses,
        autoClose: false
      }

      const enrichedMessage = renderEnrichedMessage(message, actions, textProps)

      switch (variant) {
        case 'error':
          toast.error(enrichedMessage, options)
          break
        case 'info':
          toast.info(enrichedMessage, options)
          break
        case 'success':
          toast.success(enrichedMessage, options)
          break
        case 'warning':
          toast.warn(enrichedMessage, options)
          break
        default:
          toast(enrichedMessage, options)
          break
      }
    },
    []
  )
}

export default useToast
