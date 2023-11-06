import React from 'react'
import PropTypes from 'prop-types'
import { ClearSmallIcon, IconButton } from './DateTimeStyles'
import { DateTimeEndAdornmentProps } from './types'

const DateTimeEndAdornment = ({ isClearable, onClear, onOpen, OpenPickerIcon, disabled }: DateTimeEndAdornmentProps) => {
  return (
    <>
      {isClearable && (
        <IconButton onClick={onClear} disabled={disabled} aria-label="Clear">
          <ClearSmallIcon />
        </IconButton>
      )}
      <IconButton onClick={onOpen} disabled={disabled} aria-label="Open">
        <OpenPickerIcon />
      </IconButton>
    </>
  )
}

DateTimeEndAdornment.propTypes = {
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
  OpenPickerIcon: PropTypes.elementType,
  disabled: PropTypes.bool
}

export default DateTimeEndAdornment
