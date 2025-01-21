import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { is } from 'ramda'
import { Checkbox, Tooltip } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Option as BaseOption } from './DeprecatedAutocompleteStyles'
import Typography from '../../dataDisplay/Typography'
import { DeprecatedOptionProps } from './types'

const Option = ({ optionLabel, createdLabel, selected, withCheckboxes, option, ...rest }: DeprecatedOptionProps) => {
  const optionRef = useRef(undefined)
  const [isOverflow, setIsOverflow] = useState(false)

  const label = createdLabel ? `${createdLabel} "${optionLabel}"` : optionLabel

  useEffect(() => {
    setIsOverflow(optionRef?.current?.scrollWidth > optionRef?.current?.clientWidth)
  }, [])

  return withCheckboxes ? (
    <li {...rest}>
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
        checkedIcon={<CheckBoxIcon fontSize="small" />}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {optionLabel}
    </li>
  ) : (
    <Tooltip title={optionLabel} disableHoverListener={!isOverflow}>
      <li {...rest} aria-disabled={is(String, option) ? false : option?.isDisabled}>
        <BaseOption ref={optionRef}>
          <Typography>{label}</Typography>
        </BaseOption>
      </li>
    </Tooltip>
  )
}

Option.propTypes = {
  optionLabel: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  withCheckboxes: PropTypes.bool,
  createdLabel: PropTypes.string,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Option
