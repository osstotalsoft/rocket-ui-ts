import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { classes } from './ToastStyles'

const usePromiseToast = () => {
  return useCallback(
    /**
     *
     * @param {Promise} promise The promise function
     * @param {(String|Object)} pending The message to be shown while promise in pending or the entire object with all the configurations
     * @param {(String|Object)} success The message to be shown when promise completed successfully or the entire object with all the configurations
     * @param {(String|Object)} error The message to be shown when promise was rejected or the entire object with all the configurations
     */
    (promise: Promise<unknown>, pending: string | object, success: string | object, error: string | object) => {
      toast.promise(
        promise,
        { pending, success, error },
        {
          className: `${classes.success} ${classes.default} ${classes.info} ${classes.error} ${classes.error} ${classes.default} `
        }
      )
    },
    []
  )
}

export default usePromiseToast
