import { emptyString } from 'components/utils/constants'
import { curry, either, isEmpty, isNil, prop } from 'ramda'

export const isNilOrEmpty = either(isNil, isEmpty)

export const extractFirstValue = curry((fns, obj) => {
  for (let i = 0; i < fns.length; ++i) {
    const result = fns[i](obj)
    if (!isNilOrEmpty(result)) return result.toString()
  }
  return emptyString
})

export const internalLabel = prop('__internalDisplay')
export const internalValue = prop('__internalInputValue')
