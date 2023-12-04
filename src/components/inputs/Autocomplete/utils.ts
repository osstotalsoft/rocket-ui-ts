import { createFilterOptions } from '@mui/material/Autocomplete'
import { prop, map, innerJoin, find, propEq, all, includes, is, isEmpty, isNil, props, omit, equals, any } from 'ramda'
import { AutocompleteValue, FilterOptionsState } from '@mui/material'

export const findFirstNotNil = (propNames: string[], option: any) => find(x => !isNil(x), props(propNames, option))
export const isStringOrNumber = (option: unknown) => is(String, option) || is(Number, option)

const hasStringOptions = <T>(options: T[]) => all(is(String), options) && !isEmpty(options)

const filter = createFilterOptions()
export const filterOptions =
  (labelKey: string, valueKey: string, creatable: boolean) => (options: unknown[], params: FilterOptionsState<unknown>) => {
    const filtered = filter(options, params)
    const { inputValue } = params

    // Suggest the creation of a new value if it's not empty and it doesn't already exist
    const exists = any(
      (option: any) =>
        is(Object, option)
          ? equals(inputValue, is(String, option?.[labelKey]) ? option?.[labelKey] : JSON.stringify(option?.[labelKey]))
          : equals(inputValue, is(String, option) ? option : JSON.stringify(option)),
      options
    )

    if (creatable && !(isEmpty(inputValue) || isNil(inputValue)) && !exists) {
      filtered.push(
        hasStringOptions(options)
          ? {
              _primitiveValue: inputValue,
              _createdOption: true
            }
          : {
              // TODO: The valueKey should be different from the inputValue
              [valueKey]: inputValue,
              [labelKey]: inputValue,
              _createdOption: true
            }
      )
    }

    return filtered
  }

export const getSimpleValue = <T>(
  readonlyOptions: readonly T[],
  value: unknown,
  valueKey: string,
  isMultiSelection: boolean
) => {
  const options = readonlyOptions as T[]
  if (isMultiSelection && (!is(Array, value) || isEmpty(options))) return []
  if (!all(is(Object), options)) return value

  // Add new options if the Autocomplete is multiSelection and creatable
  if (is(Array, value)) {
    const optionsSimpleValues = map(prop(valueKey), options)
    value?.map(v => {
      if (!includes(v, optionsSimpleValues)) options.push({ [valueKey]: v } as T)
    })
  }

  const result = isMultiSelection
    ? innerJoin((o, v) => o[valueKey as keyof T] === v, options, value as any)
    : find(propEq(value, valueKey), options)
  return result || null
}

export const computeChangedMultiValue = <T, Multiple, DisableClearable, FreeSolo>(
  input: any,
  simpleValue: boolean,
  valueKey: string,
  labelKey: string
): AutocompleteValue<T, Multiple, DisableClearable, FreeSolo> =>
  simpleValue
    ? input.map((a: unknown) => (!is(Object, a) ? a : findFirstNotNil([valueKey, labelKey, '_primitiveValue'], a)))
    : input.map((a: unknown) => (!is(Object, a) ? a : prop('_primitiveValue', a) || omit(['_createdOption'], a)))

export const computeChangedSingleValue = (input: any, simpleValue: boolean, valueKey: string, labelKey: string) =>
  simpleValue
    ? findFirstNotNil([valueKey, labelKey], input)
    : prop('_primitiveValue', input) ?? omit(['_createdOption'], input)
