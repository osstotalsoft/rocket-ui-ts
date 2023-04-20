/* eslint-disable no-unused-expressions */
import accepts from 'attr-accept'
import { curry, filter, flip, gt, gte, isEmpty, lt, lte, map, not, pipe, prop, sum } from 'ramda'
import { Validator } from './types'

const verifiedFileType = curry(flip(accepts))
const invalidFileType = curry(pipe(verifiedFileType, not)) as (arg1: string) => (arg2: File) => boolean

const getSize = prop<number>('size')
const totalSize = pipe(map(getSize), sum) as (files: unknown) => number

const biggerItems = curry((maxItemSize, file) => lt(maxItemSize, getSize(file)))
const smallerItems = curry((minItemSize, file) => gt(minItemSize, getSize(file)))

export const validFileTypes = curry<Validator>((accept, files, onError?) => {
  const badFiles = filter(invalidFileType(accept as string), [...files])
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'Bad file type', files: badFiles })
  return false
})

export const validMaxTotalSize = curry<Validator>((maxTotalSize, files, onError?) => {
  const totalFileSize = totalSize(files) as number
  if (gte(maxTotalSize as number, totalFileSize)) return true
  onError && onError({ message: 'Total size exceeded', totalFileSize })
  return false
})

export const validMaxItemSize = curry<Validator>((maxItemSize, files, onError?): boolean => {
  const badFiles = filter(biggerItems(maxItemSize), Array.from(files))
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size exceeded', files: badFiles })
  return false
}) as Validator

export const validMinTotalSize = curry<Validator>((minTotalSize, files, onError?): boolean => {
  const totalFileSize = totalSize(files) as number
  if (lte(minTotalSize as number, totalFileSize)) return true
  onError && onError({ message: 'Total size too small', totalFileSize })
  return false
})

export const validMinItemSize = curry<Validator>((minItemSize, files, onError?): boolean => {
  const badFiles = filter(smallerItems(minItemSize), Array.from(files))
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size too small', files: badFiles })
  return false
})

export default { validFileTypes, validMaxItemSize, validMaxTotalSize, validMinItemSize, validMinTotalSize }
