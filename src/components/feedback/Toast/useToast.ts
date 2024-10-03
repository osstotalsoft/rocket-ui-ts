import { useCallback } from 'react'
import {
  toast,
  Slide,
  Bounce,
  Flip,
  Zoom,
  ToastContent,
  ToastOptions as ToastifyToastOptions,
  TypeOptions as ToastifyTypeOptions
} from 'react-toastify'
import { ToastContainerProps } from './types'
import { classes } from './ToastStyles'
import cx from 'classnames'
import { cond, equals, always, T } from 'ramda'

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastContainerProps} options Additional options passed to the toast
     */
    (message: ToastContent, variant?: ToastifyTypeOptions, { transitionType, ...restOptions } = {} as ToastContainerProps) => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })
      const getTransitionType = cond([
        [equals('Slide'), always(Slide)],
        [equals('Bounce'), always(Bounce)],
        [equals('Flip'), always(Flip)],
        [equals('Zoom'), always(Zoom)],
        [T, always(Slide)]
      ])

      const options: ToastifyToastOptions = {
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
