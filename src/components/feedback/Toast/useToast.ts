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


const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed. It can be a string or a React component.
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (message: ToastContent, variant?: ToastifyTypeOptions, { transitionType, ...restOptions } = {} as ToastContainerProps) => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })

      const options: ToastOptions = {
        ...restOptions,
        transition: getTransitionType(transitionType),
        className: toastClasses
      }

      switch (variant) {
        case 'error':
          toast.error(message, options)
          break
        case 'info':
          toast.info(message, options)
          break
        case 'success':
          toast.success(message, options)
          break
        case 'warning':
          toast.warn(message, options)
          break
        default:
          toast(message, options)
          break
      }
    },
    []
  )
}

export default useToast
