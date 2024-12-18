import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Typography } from 'components'

const ControlledCheckbox = ({ value, onChange, label }: { value: boolean; onChange: any; label: string }) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked), [onChange])

  return (
    <FormControlLabel
      control={<Checkbox color="primary" size="small" checked={value || false} onChange={handleChange} />}
      disableTypography
      label={
        <Typography color="textSecondary" variant="caption">
          {label}
        </Typography>
      }
    />
  )
}

ControlledCheckbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired
}

export default ControlledCheckbox
