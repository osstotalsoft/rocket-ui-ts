import { useCallback } from 'react'
import {
  toast,
  ToastContent,
  ToastOptions as ToastOptionsBase,
  TypeOptions as ToastifyTypeOptions
} from 'react-toastify'
import { classes } from './ToastStyles'
import cx from 'classnames'
import { getTransitionType } from './types'
import { renderEnrichedMessage } from './utils'
import { TypographyProps } from 'components/dataDisplay/Typography'

type ToastOptions = Omit<ToastOptionsBase, 'transition'> & {
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip',
  actions?: React.ReactNode,
  textProps?: TypographyProps
}

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {ToastContent} message The content to be displayed. It can be a string or a React component.
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (message: ToastContent, variant?: ToastifyTypeOptions, { transitionType, actions, textProps, ...restOptions } = {} as ToastOptions) => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })

      const options: ToastOptionsBase = {
        ...restOptions,
        transition: getTransitionType(transitionType),
        className: toastClasses
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
