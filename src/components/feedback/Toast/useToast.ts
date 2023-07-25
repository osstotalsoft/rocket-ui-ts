import { useCallback } from 'react'
import { toast, Slide, Bounce, Flip, Zoom, ToastContent } from 'react-toastify'
import { classes } from './ToastStyles'
import cx from 'classnames'
import { cond, equals, always, T } from 'ramda'

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {('Slide' | 'Bounce' | 'Zoom' | 'Flip')} transitionType The appearance effect
     * @param {('top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left')} position Where to be displayed on the page
     * @param {(Number| false)} autoClose Delay in ms to close the toast
     */
    (
      message: ToastContent,
      variant?: 'success' | 'info' | 'warning' | 'error',
      transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip',
      position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',
      autoClose: any = variant !== 'error'
    ) => {
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
      const options = { autoClose, transition: getTransitionType(transitionType), position, className: toastClasses }
      switch (variant) {
        case 'error':
          toast.error(message, { ...options, autoClose: false, closeOnClick: false, draggable: false })
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
