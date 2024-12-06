import { emptyString } from '../../utils/constants'
import { any, curry, either, equals, find, head, isEmpty, isNil, prop, type } from 'ramda'

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

const sameJsType = curry((a, b) => {
  if (any(isNil, [a, b])) return true
  return equals(type(a), type(b))
})

export const convertValueToOption = curry((value, options = [], getValue) => {
  if (isEmpty(options)) return value
  if (sameJsType(value, head(options))) return value
  const converted = find(option => getValue(option) == value, options)
  return isNil(converted) ? value : converted
})
