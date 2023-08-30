import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete as MuiAutocomplete, NoOptionsText, classes } from './AutocompleteStyles'
import Option from './Option'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'
import { is, isNil, equals, any, prop } from 'ramda'
import {
  filterOptions,
  getSimpleValue,
  findFirstNotNil,
  isStringOrNumber,
  computeChangedMultiValue,
  computeChangedSingleValue
} from './utils'
import TextField from '../TextField'
import { AutocompleteProps, OptionProps, LoadOptions, LoadOptionsPaginated } from './types'
import {
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteRenderOptionState,
  TextFieldProps
} from '@mui/material'
import { AutocompleteRenderGetTagProps } from '@mui/material'

/**
 *
 * The autocomplete is a normal text input enhanced by a panel of suggested options.
 *
 * The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:
 *
 * The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name.
 * The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time.
 * It's meant to be an improved version of the "react-select" and "downshift" packages.
 */
const Autocomplete: React.FC<AutocompleteProps<any, any, any, any>> = ({
  options: receivedOptions,
  defaultOptions = [],
  loadOptions,
  loading: receivedLoading,
  loadingText,
  noOptionsText = 'No options',
  getOptionLabel,
  onChange,
  onInputChange,
  creatable = false,
  onOpen,
  onClose,
  value = null,
  isMultiSelection = false,
  withCheckboxes = false,
  isClearable = false,
  disabled = false,
  simpleValue = false,
  label,
  valueKey = 'id',
  labelKey = 'name',
  error = false,
  helperText,
  required = false,
  createdLabel = 'Add',
  typographyContentColor = 'textSecondary',
  inputSelectedColor,
  isSearchable = true,
  getOptionDisabled,
  placeholder,
  inputTextFieldProps,
  isPaginated,
  ...other
}) => {
  const [options, setOptions] = useState(receivedOptions ?? [])
  const [asyncOptions, setAsyncOptions] = useState<ReadonlyArray<any>>(is(Array, defaultOptions) ? defaultOptions : [])
  const [additionalPageData, setAdditionalPageData] = useState(null)
  const [hasMore, setHasMore] = useState<Boolean>(true)

  const [localLoading, setLocalLoading] = useState(false)
  const loading = receivedLoading || localLoading

  const [localInput, setLocalInput] = useState<string>()
  const [optionsLoaded, setOptionsLoaded] = useState(false)

  const disabledOptions = useMemo(
    () => (getOptionDisabled ? options.filter(getOptionDisabled) : []),
    [getOptionDisabled, options]
  )
  const disabledValues = disabledOptions.map(prop(valueKey))
  const isValueDisabled = getOptionDisabled ? any(equals(value), disabledValues) : false

  const handleLoadOptionsPaginated = useCallback(
    (input?: string) => {
      if (hasMore) {
        if (asyncOptions.length === 0) setLocalLoading(true)
        ;(loadOptions as LoadOptionsPaginated)(input, options, additionalPageData).then(
          ({ loadedOptions, more, additional }) => {
            if (input != localInput) setAsyncOptions(loadedOptions || [])
            else setAsyncOptions(prevAsyncOptions => [...prevAsyncOptions, ...loadedOptions])
            setAdditionalPageData(additional)
            if (hasMore !== more && input === localInput) setHasMore(more)
            setLocalLoading(false)
            setOptionsLoaded(true)
          }
        )
        return
      }
      setLocalLoading(false)
      setOptionsLoaded(true)
    },
    [additionalPageData, asyncOptions.length, hasMore, loadOptions, localInput, options]
  )

  const handleLoadOptions = useCallback(
    (input?: string) => {
      if (!loadOptions) return
      if (!isPaginated) {
        setLocalLoading(true)
        ;(loadOptions as LoadOptions)(input).then(loadedOptions => {
          setAsyncOptions(loadedOptions || [])
          setLocalLoading(false)
          setOptionsLoaded(true)
        })
      } else handleLoadOptionsPaginated(input)
    },
    [handleLoadOptionsPaginated, isPaginated, loadOptions]
  )

  const handleMenuOpen = useCallback(
    (event: React.SyntheticEvent<Element, Event>) => {
      if (!optionsLoaded) handleLoadOptions(localInput)
      if (onOpen) onOpen(event)
    },
    [handleLoadOptions, localInput, onOpen, optionsLoaded]
  )

  const handleMenuClose = useCallback(
    (event: React.SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => {
      setLocalInput('')
      if (onClose) onClose(event, reason)
    },
    [onClose]
  )

  const renderInput = useCallback(
    (params: any) => {
      params.inputProps.className = `${params.inputProps.className} ${classes.input}`
      if (inputSelectedColor) params.inputProps.style = { color: inputSelectedColor }
      params.inputProps.readOnly = !isSearchable

      const textFieldProps = {
        label,
        error,
        helperText,
        required,
        placeholder,
        ...inputTextFieldProps
      } as Partial<TextFieldProps>

      return (
        <TextField
          fullWidth
          {...params}
          startAdornment={params.InputProps.startAdornment}
          endAdornment={params.InputProps.endAdornment}
          {...textFieldProps}
          InputProps={{ ...params.InputProps, margin: 'none' }}
          InputLabelProps={{ ...params.InputLabelProps, margin: null }}
        />
      )
    },
    [inputSelectedColor, isSearchable, label, error, helperText, required, placeholder, inputTextFieldProps]
  )

  const handleOptionLabel = useCallback(
    (option: unknown) => {
      if (getOptionLabel) return getOptionLabel(option)
      if (isStringOrNumber(option)) return option.toString()

      const label = findFirstNotNil([labelKey, valueKey], option)
      return label?.toString() ?? ''
    },
    [getOptionLabel, labelKey, valueKey]
  )

  const renderOption = useCallback(
    (props: OptionProps, option: any, { selected }: AutocompleteRenderOptionState) => {
      const optionLabel = handleOptionLabel(option)

      return (
        <Option
          createdLabel={option?._createdOption ? createdLabel : ''}
          optionLabel={optionLabel}
          selected={selected}
          withCheckboxes={withCheckboxes}
          {...props}
        />
      )
    },
    [handleOptionLabel, createdLabel, withCheckboxes]
  )

  const renderTags = useCallback(
    (value: any, getTagProps: AutocompleteRenderGetTagProps) =>
      value.map((option: any, index: number) => (
        <Chip
          key={index}
          label={handleOptionLabel(option)}
          {...getTagProps({ index })}
          disabled={getOptionDisabled && getOptionDisabled(option)}
        />
      )),
    [getOptionDisabled, handleOptionLabel]
  )

  const isOptionEqualToValue = useCallback(
    (option: { [x: string]: any }, value: { [x: string]: any }) =>
      simpleValue ? equals(option[valueKey], value) : equals(option?.[valueKey], value?.[valueKey]),
    [simpleValue, valueKey]
  )

  const handleChange = useCallback(
    (event: React.SyntheticEvent, inputValue: any, reason: AutocompleteChangeReason) => {
      // when multi-value and clearable, doesn't clear disabled options that have already been selected
      if (reason === 'clear' && getOptionDisabled && isMultiSelection) {
        return onChange(computeChangedMultiValue(disabledOptions, simpleValue, valueKey, labelKey), event, reason)
      }

      setLocalInput(handleOptionLabel(inputValue))
      // for multi-value Autocomplete, options dialog remains open after selection and we do not want to display a loading state
      if (loadOptions && !isMultiSelection) setLocalLoading(true)

      if (isNil(inputValue) || isStringOrNumber(inputValue)) return onChange(inputValue, event, reason)

      if (isMultiSelection) {
        return onChange(computeChangedMultiValue(inputValue, simpleValue, valueKey, labelKey), event, reason)
      }

      return onChange(computeChangedSingleValue(inputValue, simpleValue, valueKey, labelKey), event, reason)
    },
    [
      disabledOptions,
      getOptionDisabled,
      handleOptionLabel,
      isMultiSelection,
      labelKey,
      loadOptions,
      onChange,
      simpleValue,
      valueKey
    ]
  )

  const handleInputChange = useCallback(
    (event: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => {
      setLocalInput(value ? value : '')
      if (onInputChange) onInputChange(event, value, reason)

      // this prevents the component from calling loadOptions again when the user clicks outside it and the menu closes
      if (event?.nativeEvent?.type === 'focusout') {
        setOptionsLoaded(false)
        return
      }

      if (!event) return

      if (loadOptions) {
        setLocalLoading(true)
        handleLoadOptions(value)
      }
    },
    [handleLoadOptions, loadOptions, onInputChange]
  )

  useEffect(() => {
    setOptions(receivedOptions || [])
  }, [receivedOptions])

  const listBoxProps = useMemo(
    () =>
      isPaginated
        ? {
            onScroll: (event: React.SyntheticEvent) => {
              const listboxNode = event.currentTarget
              if (listboxNode.scrollTop + listboxNode.clientHeight >= listboxNode.scrollHeight - 1 && hasMore) {
                handleLoadOptions()
              }
            }
          }
        : undefined,
    [handleLoadOptions, hasMore, isPaginated]
  )

  return (
    <MuiAutocomplete
      noOptionsText={<NoOptionsText color={typographyContentColor}>{noOptionsText}</NoOptionsText>}
      typographyContentColor={typographyContentColor}
      forcePopupIcon
      label={label}
      disabled={disabled || isValueDisabled}
      loading={loading}
      loadingText={loadingText ?? <LinearProgress />}
      onOpen={handleMenuOpen}
      onClose={handleMenuClose}
      clearOnBlur={true}
      freeSolo={creatable}
      options={loading ? [] : loadOptions ? asyncOptions : options || []}
      autoHighlight
      handleHomeEndKeys
      selectOnFocus
      disableCloseOnSelect={isMultiSelection}
      filterSelectedOptions={simpleValue && isMultiSelection && !withCheckboxes}
      filterOptions={filterOptions(labelKey, valueKey, creatable)}
      getOptionLabel={handleOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionDisabled={getOptionDisabled}
      value={simpleValue ? getSimpleValue(loadOptions ? asyncOptions : options, value, valueKey, isMultiSelection) : value}
      multiple={isMultiSelection}
      onChange={handleChange}
      onInputChange={handleInputChange}
      disableClearable={!isClearable}
      renderOption={renderOption}
      renderInput={renderInput}
      renderTags={renderTags}
      ListboxProps={listBoxProps}
      {...other}
    />
  )
}

Autocomplete.propTypes = {
  /**
   * @default []
   * The array of options from which the client can select a value.
   */
  options: PropTypes.array,
  /**
   * Function that returns a promise, which resolves to the set of options to be used once the promise resolves.
   */
  loadOptions: PropTypes.func,
  /**
   * If true, the component is in a loading state.
   * By default, this shows a linear progress instead of options.
   * This can be changed by sending the loadingText prop to Autocomplete.
   */
  loading: PropTypes.bool,
  /**
   * @default '<LinearProgress />'
   * Text/component to display when in a loading state.
   */
  loadingText: PropTypes.node,
  /**
   * @default 'No options'
   * Text to display when there are no options.
   */
  noOptionsText: PropTypes.node,
  /**
   * Used to determine the string value for a given option.
   */
  getOptionLabel: PropTypes.func,
  /**
   * @default null
   * The selected value from list of options.
   */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number, PropTypes.string, PropTypes.bool]),
  /**
   * Handle change events on the autocomplete.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback fired when the input value changes.
   */
  onInputChange: PropTypes.func,
  /**
   * Handle the menu opening.
   */
  onOpen: PropTypes.func,
  /**
   * Handle the menu closing.
   */
  onClose: PropTypes.func,
  /**
   * @default false
   * If true, the user can select multiple values from list.
   */
  isMultiSelection: PropTypes.bool,
  /**
   * @default false
   * If true, the options list will have checkboxes.
   */
  withCheckboxes: PropTypes.bool,
  /**
   * @default false
   * If true, the user can clear the selected value.
   */
  isClearable: PropTypes.bool,
  /**
   * @default true
   * If false, the user cannot type in Autocomplete, filter options or create new ones.
   */
  isSearchable: PropTypes.bool,
  /**
   * @default false
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
   * his own values.
   */
  creatable: PropTypes.bool,
  /**
   * @default false
   * If true, the Autocomplete is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Used to determine the disabled state for a given option.
   */
  getOptionDisabled: PropTypes.func,
  /**
   * @default false
   * If true, options will be an array of simple values, instead of objects.
   */
  simpleValue: PropTypes.bool,
  /**
   * Label to be displayed in the heading component.
   */
  label: PropTypes.string,
  /**
   * @default 'id'
   * The key of values from options.
   */
  valueKey: PropTypes.string,
  /**
   * @default 'name'
   * The key of the displayed label for each option.
   */
  labelKey: PropTypes.string,
  /**
   * The content of the helper under the input.
   */
  helperText: PropTypes.node,
  /**
   * @default false
   * If true, the helper text is displayed when an error pops up.
   */
  error: PropTypes.bool,
  /**
   * Text to be displayed as a placeholder in the text field.
   */
  placeholder: PropTypes.string,
  /**
   * @default false
   * Marks the input field as required (with an *).
   */
  required: PropTypes.bool,
  /**
   * The value of label when a new option is added.
   */
  createdLabel: PropTypes.string,
  /**
   * @default []
   * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
   */
  defaultOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  /**
   * @default 'textSecondary'
   * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
   */
  typographyContentColor: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error'
  ]),
  /**
   * The color of selected input.
   */
  inputSelectedColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning'])
  ]),
  /**
   *  Properties that will be passed to the rendered input. This is a TextField.
   */
  inputTextFieldProps: PropTypes.object,
  /**
   * @default false
   * If true, the options list will be loaded incrementally using the paginated loadOptions callback
   */
  isPaginated: PropTypes.bool
}

export default Autocomplete
