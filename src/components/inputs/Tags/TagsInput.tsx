import React, { useCallback, useMemo, useState } from 'react'
import { TagsInputProps } from './types'
import { TextField } from 'components'
import { Chip } from '@mui/material'
import { append, dropLast, equals, filter, includes, map } from 'ramda'
import { emptyString } from 'components/utils/constants'

/**
 * TagsInput component provides a user-friendly interface for entering and managing tags or keywords,
 * with support for adding new tags, deleting existing tags, and displaying the tags as chips within the input field.
 */
export default function TagsInput({
  onChange,
  value = [],
  textFieldProps: { slotProps, ...restTextFieldProps } = {},
  size = 'small',
  placeholder,
  ...other
}: TagsInputProps) {
  const [inputValue, setInputValue] = useState(emptyString)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (equals(event.key, 'Enter') || equals(event.key, ',')) {
      event.preventDefault() // Prevent the default form submission behavior
      const newTag = inputValue.trim()
      if (!newTag || includes(newTag, value)) {
        setInputValue(emptyString)
        return
      }

      onChange(append(newTag, value))
      setInputValue(emptyString)
    }

    if (equals(event.key, 'Backspace') && !inputValue) onChange(dropLast(1, value))
  }

  const handleDelete = useCallback(
    (elementToDelete: string) => () => {
      onChange(filter((el: string) => !equals(el, elementToDelete), value))
    },
    [onChange, value]
  )

  const handleInputChange = (value: unknown) => setInputValue(value as string)

  const valueTags = useMemo(
    () =>
      map((item: string) => <Chip key={item} label={item} onDelete={handleDelete(item)} size={size} {...other} />, value),
    [handleDelete, other, size, value]
  )

  return (
    <TextField
      data-testid="tags-input-textfield"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          startAdornment: valueTags
        }
      }}
      {...restTextFieldProps}
    />
  )
}
