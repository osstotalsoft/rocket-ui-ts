/* eslint-disable no-unused-expressions */
import accepts from 'attr-accept'
import { curry, filter, flip, gt, gte, isEmpty, lt, lte, map, not, pipe, prop, sum } from 'ramda'

const verifiedFileType = curry(flip(accepts))
const invalidFileType = curry(pipe(verifiedFileType, not)) as (arg1: string) => (arg2: File) => boolean

const getSize = prop<number>('size')
const totalSize = pipe(map(getSize), sum) as (files: unknown) => number

const biggerItems = curry((maxItemSize, file) => lt(maxItemSize, getSize(file)))
const smallerItems = curry((minItemSize, file) => gt(minItemSize, getSize(file)))

export const validFileTypes = curry((onError: (err: unknown) => void, accept: string, files: FileList): boolean => {
  const badFiles = filter(invalidFileType(accept), [...files])
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'Bad file type', files: badFiles })
  return false
})

export const validMaxTotalSize = curry((onError: (err: unknown) => void, maxTotalSize: number, files: FileList): boolean => {
  const totalFileSize = totalSize(files) as number
  if (gte(maxTotalSize, totalFileSize)) return true
  onError && onError({ message: 'Total size exceeded', totalFileSize })
  return false
})

export const validMaxItemSize = curry((onError: (err: unknown) => void, maxItemSize: number, files: FileList): boolean => {
  const badFiles = filter(biggerItems(maxItemSize), files)
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size exceeded', files: badFiles })
  return false
})

export const validMinTotalSize = curry((onError: (err: unknown) => void, minTotalSize: number, files: FileList): boolean => {
  const totalFileSize = totalSize(files) as number
  if (lte(minTotalSize, totalFileSize)) return true
  onError && onError({ message: 'Total size too small', totalFileSize })
  return false
})

export const validMinItemSize = curry((onError: (err: unknown) => void, minItemSize: number, files: FileList): boolean => {
  const badFiles = filter(smallerItems(minItemSize), files)
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size too small', files: badFiles })
  return false
})

export default { validFileTypes, validMaxItemSize, validMaxTotalSize, validMinItemSize, validMinTotalSize }
