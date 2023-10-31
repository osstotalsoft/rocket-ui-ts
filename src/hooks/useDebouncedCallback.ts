import { debounce } from 'lodash'
import { useMemo, useRef } from 'react'

const useDebouncedCallback = (callback: (...args: any[]) => any, debounceBy: number) => {
  const debouncedCallbackRef = useRef<any>()

  const debouncedCallback = useMemo(() => {
    if (debounceBy) {
      if (
        debouncedCallbackRef.current &&
        debouncedCallbackRef.current.cancel &&
        typeof debouncedCallbackRef.current.cancel === 'function'
      )
        debouncedCallbackRef.current.cancel()
      const debounced = debounce(callback, debounceBy)
      debouncedCallbackRef.current = debounced
      return debounced
    }
    return callback
  }, [callback, debounceBy])

  return debouncedCallback
}

export default useDebouncedCallback
