import React, { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Tooltip } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { OptionProps } from './types'

const Option = forwardRef<HTMLLIElement, OptionProps>(function Option(props, ref) {
  const optionRef = useRef(undefined)
  const [isOverflow, setIsOverflow] = useState(false)
  useEffect(() => {
    setIsOverflow(optionRef?.current?.scrollWidth > optionRef?.current?.clientWidth)
  }, [])

  const { label, liProps, selected, withCheckboxes, option } = props
  const { key, ...rest } = liProps // Warning: key must be passed directly to a JSX element and not by a spread operator

  return (
    <Tooltip title={label} disableHoverListener={!isOverflow} placement="right">
      <li key={key} {...rest} aria-disabled={option?.isDisabled} ref={ref}>
        <div ref={optionRef}>
          {withCheckboxes && (
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          )}
          {label}
        </div>
      </li>
    </Tooltip>
  )
})

Option.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  liProps: PropTypes.object.isRequired as PropTypes.Validator<React.HTMLAttributes<HTMLLIElement> & { key: any }>,
  selected: PropTypes.bool,
  withCheckboxes: PropTypes.bool,
  option: PropTypes.any.isRequired
}

export default Option
