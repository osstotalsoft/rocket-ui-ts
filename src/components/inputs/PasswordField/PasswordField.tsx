import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import TextField, { TextFieldProps } from '../TextField'
import IconButton from 'components/buttons/IconButton'

const getIcon = (showPassword: boolean) => (showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />)

/**
 * Password Fields let users enter passwords that can be hidden/displayed.
 * At its core, it uses [TextField](https://github.com/osstotalsoft/rocket-ui-ts/tree/master/src/components/inputs/TextField).
 */
const PasswordField: React.FC<TextFieldProps> = ({ disabled, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(current => !current)
  }, [])

  const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }, [])

  return (
    <TextField
      disabled={disabled}
      error={error}
      {...rest}
      inputProps={{
        type: showPassword ? 'text' : 'password'
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            disabled={disabled}
            size="small"
            aria-label="toggle password visibility"
            color={error ? 'error' : 'secondary'}
            variant="text"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {getIcon(showPassword)}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

PasswordField.propTypes = {
  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the text field and icon are displayed in an error state.
   */
  error: PropTypes.bool
}

export default PasswordField
