import { useCallback } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import { classes } from './ToastStyles'
import { getTransitionType, ToastContainerProps } from './types'

const usePromiseToast = () => {
  return useCallback(
    /**
     *
     * @param {Promise} promise The promise function
     * @param {(String|Object)} pending The message to be shown while promise in pending or the entire object with all the configurations
     * @param {(String|Object)} success The message to be shown when promise completed successfully or the entire object with all the configurations
     * @param {(String|Object)} error The message to be shown when promise was rejected or the entire object with all the configurations
     * @param {ToastOptions} options Additional options passed to the toast
     */
    (promise: Promise<unknown>, pending: string | object, success: string | object, error: string | object, { transitionType, ...restOptions } = {} as ToastContainerProps) => {

      const localOptions: ToastOptions = {
        ...restOptions,
        transition: getTransitionType(transitionType)
      }
      toast.promise(
        promise,
        { pending, success, error },
        {
          className: `${classes.default} ${classes.success} ${classes.info} ${classes.error} ${classes.warning} ${classes.toastWrapper} `,
          ...localOptions
        }
      )
    },
    []
  )
}

export default usePromiseToast
