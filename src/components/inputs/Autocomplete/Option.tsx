import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import Tooltip from '@mui/material/Tooltip'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Option as BaseOption } from './AutocompleteStyles'
import Typography from '../../dataDisplay/Typography'
import { OptionProps } from './types'

const Option = ({ optionLabel, createdLabel, selected, withCheckboxes, option, ...rest }: OptionProps) => {
  const optionRef = useRef(null)
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
      <li {...rest} aria-disabled={option?.isDisabled}>
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
  option: PropTypes.object
}

export default Option
