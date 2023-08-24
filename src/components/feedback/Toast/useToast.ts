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
import { classes } from './ToastStyles'
import cx from 'classnames'
import { cond, equals, always, T } from 'ramda'

type ToastOptions = Omit<ToastifyToastOptions, 'transition'> & {
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
}

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (message: ToastContent, variant?: ToastifyTypeOptions, options?: ToastOptions) => {
      const { transitionType, autoClose, ...restOptions } = options || {}

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

      const internalOptions: ToastifyToastOptions = {
        ...restOptions,
        autoClose: autoClose || false,
        transition: getTransitionType(transitionType),
        className: toastClasses
      }

      switch (variant) {
        case 'error':
          toast.error(message, { ...internalOptions, autoClose: false, closeOnClick: false, draggable: false })
          break
        case 'info':
          toast.info(message, internalOptions)
          break
        case 'success':
          toast.success(message, internalOptions)
          break
        case 'warning':
          toast.warn(message, internalOptions)
          break
        default:
          toast(message, internalOptions)
          break
      }
    },
    []
  )
}

export default useToast
