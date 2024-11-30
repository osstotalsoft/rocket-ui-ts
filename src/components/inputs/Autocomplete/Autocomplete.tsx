import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteOwnerState,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  AutocompleteValue,
  Chip,
  createFilterOptions,
  FilterOptionsState,
  Autocomplete as MuiAutocomplete,
  TextField
} from '@mui/material'
import { both, concat, eqBy, has, identity, prop } from 'ramda'
import { convertValueToOption, extractFirstValue, internalLabel, internalValue } from './utils'
import Option from './Option'
import { emptyArray, emptyString } from 'components/utils/constants'
import { useTrackVisibility } from 'react-intersection-observer-hook'
import { AutocompleteProps, LoadOptionsPaginatedResult } from './types'
import LinearProgress from 'components/feedback/LinearProgress'
const baseFilter = createFilterOptions()

const Autocomplete: React.FC<
  AutocompleteProps<unknown, boolean | undefined, boolean | undefined, boolean | undefined, React.ElementType>
> = ({
  options = [],
  getOptionLabel,
  valueKey = 'id',
  labelKey = 'name',
  isMultiSelection = false,
  withCheckboxes = false,
  isClearable = false,
  renderOption,
  creatable = false,
  createdLabel = 'Add',
  onChange,
  // ---------------- input field props ----------------
  label,
  placeholder,
  error,
  helperText,
  required,
  isSearchable = true,
  inputTextFieldProps,
  // ---------------------------------------------------
  loadingText = <LinearProgress />,
  loading,
  loadOptions,
  open,
  onOpen,
  onClose,
  onInputChange,
  isPaginated,
  ...rest
}) => {
  /**
   * Handle the internal options to aid lazy loading.
   */
  const [internalOptions, setInternalOptions] = useState<readonly unknown[]>(emptyArray)
  const allOptions = concat(options, internalOptions)

  /**
   * Handle get option value.
   * Handle valueKey and labelKey as functions.
   * Show internal label if it's called from renderOption and internal value if it's called from the input field.
   */

  const handleGetOptionLabel = useCallback(
    /**
     * Second parameter is a flag to show the label or the value
     * The input field will never ask for the label as it is a custom convention.
     * Only handleRenderOption will ask for the label.
     */
    (option: unknown, showLabel?: boolean | never) => {
      if (getOptionLabel) return getOptionLabel(option)
      const label = showLabel ? internalLabel : internalValue
      const getValue = valueKey instanceof Function ? valueKey : prop(valueKey)
      const getLabel = labelKey instanceof Function ? labelKey : prop(labelKey)

      const convertedOption = convertValueToOption(
        option,
        allOptions,
        extractFirstValue([getValue, internalValue, identity])
      )

      return extractFirstValue([getLabel, getValue, label, identity], convertedOption)
    },
    [allOptions, getOptionLabel, labelKey, valueKey]
  )

  /**
   * Implementing loadOptions requiring the following internal handling:
   * - loading state
   * - open state
   * - options
   * - input change
   */
  const [internalLoading, setInternalLoading] = useState(false)
  const [internalOpen, setInternalOpen] = useState(false)
  const [internalInputValue, setInternalInputValue] = useState(emptyString)
  const [ref, { isVisible }] = useTrackVisibility()
  const [loadMore, setLoadMore] = useState(false)
  const [nextPageData, setNextPageData] = useState(null)

  useEffect(() => {
    if (isVisible) {
      setInternalLoading(true)
    }
  }, [isVisible])

  const handleOpen = useCallback(
    (event: React.SyntheticEvent) => {
      if (onOpen) onOpen(event)
      setInternalOpen(true)
      if (loadOptions) {
        setInternalLoading(true)
      }
    },
    [loadOptions, onOpen]
  )
  const handleClose = useCallback(
    (event: React.SyntheticEvent, reason: AutocompleteCloseReason) => {
      if (onClose) onClose(event, reason)
      setInternalOpen(false)
      if (loadOptions) {
        setInternalLoading(false)
        setInternalInputValue(emptyString)
        setInternalOptions(emptyArray)
        setLoadMore(false)
        setNextPageData(null)
      }
    },
    [loadOptions, onClose]
  )
  const handleInputChange = useCallback(
    (event: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => {
      if (onInputChange) onInputChange(event, value, reason)
      setInternalInputValue(value)
      if (reason === 'reset') return
      if (loadOptions) {
        setInternalOptions(emptyArray)
        setInternalLoading(true)
        setLoadMore(false)
        setNextPageData(null)
      }
    },
    [loadOptions, onInputChange]
  )

  useEffect(() => {
    if (!internalLoading) {
      return
    }

    let cancellationRequested = false
    loadOptions(internalInputValue, allOptions, nextPageData)
      .then((result: readonly unknown[] | LoadOptionsPaginatedResult<unknown>) => {
        if (cancellationRequested) {
          return
        }

        const newOptions = isPaginated
          ? (result as LoadOptionsPaginatedResult<unknown>)?.loadedOptions
          : (result as readonly unknown[])
        const hasMoreData = isPaginated ? (result as LoadOptionsPaginatedResult<unknown>)?.more : false
        const nextPageData = isPaginated ? (result as LoadOptionsPaginatedResult<unknown>)?.additional : null
        setInternalOptions((oldOptions: readonly unknown[]) => concat(oldOptions, newOptions))
        setLoadMore(hasMoreData)
        setNextPageData(nextPageData)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        if (cancellationRequested) {
          return
        }

        setInternalLoading(false)
      })

    return () => {
      cancellationRequested = true
    }
  }, [allOptions, internalInputValue, internalLoading, isPaginated, loadOptions, nextPageData])

  const handleRenderOption = useCallback(
    /**
     * props: React.HTMLAttributes<HTMLLIElement> & { key: any },
    option: T,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
     */
    (
      liProps: React.HTMLAttributes<HTMLLIElement> & { key: any },
      option: unknown,
      state: AutocompleteRenderOptionState,
      ownerState: AutocompleteOwnerState<
        unknown,
        boolean | undefined,
        boolean | undefined,
        boolean | undefined,
        React.ElementType
      >
    ) => {
      /**
       * Display the loading text and attach a reference to monitor the visibility this option.
       * This should be the last option in the list. And it should only be added from the internal mechanism.
       * The visibility will be used to trigger the loadOptions function.
       */
      if (has('__internalShowLoadingOption', option) && option.__internalShowLoadingOption) {
        return (
          <Option
            ref={ref}
            key={liProps.key}
            label={loadingText}
            liProps={liProps}
            selected={false}
            withCheckboxes={false}
            option={option}
          />
        )
      }

      /**
       * This is the default option rendering that can handle new created options.
       */
      const getValue = valueKey instanceof Function ? valueKey : prop(valueKey)
      const result = (
        <Option
          key={extractFirstValue([getValue, internalValue, identity], option)}
          label={handleGetOptionLabel(option, true)}
          liProps={liProps}
          selected={state.selected}
          withCheckboxes={withCheckboxes}
          option={option}
        />
      )
      /**
       * If a custom renderOption is provided we will use it.
       */
      return renderOption ? renderOption(liProps, option, state, ownerState) : result
    },
    [handleGetOptionLabel, loadingText, ref, renderOption, valueKey, withCheckboxes]
  )

  const handleFilterOptions = useCallback(
    (options: unknown[], state: FilterOptionsState<unknown>) => {
      const result = baseFilter(options, state)

      if (creatable) {
        /**
         * There is no way to know what kind of type is "option".
         * We will make our own convention where the new added option will have the following shape:
         * { __internalDisplay: `${createdLabel} "inputValue"`, __internalInputValue: inputValue }
         * This way we can distinguish between the options that were already in the list and the new added ones.
         * We will use __internalDisplay to display the new added option and __internalInputValue to get the actual value.
         * On the onChange event we will send the __internalInputValue as the value and the reason will be "createOption".
         */

        const contender = state.inputValue
        const exactMatch = result.find(option => handleGetOptionLabel(option) === contender)
        if (contender && !exactMatch)
          result.push({ __internalDisplay: `${createdLabel} "${contender}"`, __internalInputValue: contender })
      }

      if (isPaginated && loadMore) {
        /**
         * For paginated loading we will add a special option at the end of the list.
         * This option will be used to trigger the loadOptions function.
         * Our convention for this option will be:
         * { __internalShowLoadingOption: true, isDisabled: true }
         */
        result.push({ __internalShowLoadingOption: true, isDisabled: true })
      }

      return result
    },
    [creatable, createdLabel, handleGetOptionLabel, isPaginated, loadMore]
  )

  /**
   * Because of our convention for disabled options we need to handle the isOptionEqualToValue.
   */
  const handleOptionEqualToValue = useCallback(
    (option: unknown, value: unknown) => {
      const getValue = valueKey instanceof Function ? valueKey : prop(valueKey)
      const equalFn = extractFirstValue([getValue, internalValue, identity])
      return eqBy(equalFn, option, value)
    },
    [valueKey]
  )

  /**
   * Handle change event to switch event and value.
   * Handle the internal convention for the new added options.
   */
  const handleChange = useCallback(
    (
      event: React.SyntheticEvent,
      value: AutocompleteValue<unknown, boolean | undefined, boolean | undefined, boolean | undefined>,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<unknown>
    ) => {
      if (onChange) {
        if (both(has('__internalInputValue'), has('__internalDisplay'))(value)) {
          onChange(value.__internalInputValue, event, 'createOption', details)
        } else {
          onChange(value, event, reason, details)
        }
      }
    },
    [onChange]
  )

  /**
   * Handle disabled chips.
   */
  const handleRenderTags = useCallback(
    (
      value: unknown[],
      getTagProps: AutocompleteRenderGetTagProps,
      ownerState: AutocompleteOwnerState<
        unknown,
        boolean | undefined,
        boolean | undefined,
        boolean | undefined,
        React.ElementType
      >
    ) => {
      return value.map((option, index) => {
        const { key, ...tagProps } = getTagProps({ index })
        const isDisabled: boolean = has('isDisabled', option) && Boolean(option.isDisabled)
        return (
          <Chip
            key={key}
            label={handleGetOptionLabel(option, true)}
            {...tagProps}
            disabled={isDisabled || ownerState.disabled}
          />
        )
      })
    },
    [handleGetOptionLabel]
  )

  /**
   * Handle the default input field.
   */
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (inputTextFieldProps?.onClick) {
        inputTextFieldProps.onClick(event)
      }
    },
    [inputTextFieldProps]
  )
  const handleRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <TextField
        {...params}
        label={label}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        required={required}
        {...inputTextFieldProps}
        slotProps={{ htmlInput: { ...params.inputProps, readOnly: !isSearchable } }}
        onClick={handleClick}
      />
    ),
    [error, handleClick, helperText, inputTextFieldProps, isSearchable, label, placeholder, required]
  )

  /**
   * Our component should not propagate the click event to the parent.
   */
  const handleStopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation()
  }, [])

  return (
    /**
     * Our component should not propagate the click event to the parent.
     */
    <div onClick={handleStopPropagation}>
      <MuiAutocomplete
        forcePopupIcon
        clearOnBlur
        selectOnFocus
        handleHomeEndKeys
        autoHighlight
        renderInput={handleRenderInput}
        options={allOptions}
        getOptionLabel={handleGetOptionLabel}
        multiple={isMultiSelection}
        disableCloseOnSelect={isMultiSelection}
        disableClearable={!isClearable}
        renderOption={handleRenderOption}
        freeSolo={creatable}
        filterOptions={handleFilterOptions}
        onChange={handleChange}
        loadingText={loadingText}
        loading={loading || internalLoading}
        open={open || internalOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        onInputChange={handleInputChange}
        renderTags={handleRenderTags}
        isOptionEqualToValue={handleOptionEqualToValue}
        {...rest}
      />
    </div>
  )
}

Autocomplete.propTypes = {
  options: PropTypes.array,
  getOptionLabel: PropTypes.func,
  valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isMultiSelection: PropTypes.bool,
  withCheckboxes: PropTypes.bool,
  isClearable: PropTypes.bool,
  renderOption: PropTypes.func,
  creatable: PropTypes.bool,
  createdLabel: PropTypes.string,
  onChange: PropTypes.func,
  // ---------------- input field props ----------------
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  isSearchable: PropTypes.bool,
  inputTextFieldProps: PropTypes.object,
  // ---------------------------------------------------
  loadingText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  loading: PropTypes.bool,
  loadOptions: PropTypes.func,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onInputChange: PropTypes.func,
  renderTags: PropTypes.func,
  isPaginated: PropTypes.bool
}

export default Autocomplete
