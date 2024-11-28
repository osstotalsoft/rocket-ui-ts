import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { BackToButtonProps } from './types'
import IconButton from '../IconButton'

/**
 * BackToButton allow users to navigate to a provided path.
 *
 * Props of the [Material-UI Button](https://mui.com/material-ui/api/button/#props) component are also available.
 */
const BackToButton: React.FC<BackToButtonProps> = ({ path, options, fontSize = 'small', size = 'medium', ...rest }) => {
  const navigate = useNavigate()

  const onBackTo = useCallback(() => navigate(path as any, options), [navigate, options, path])

  return (
    <IconButton aria-label="back" onClick={onBackTo} size={size} {...rest}>
      <ArrowBackIcon fontSize={fontSize as any} />
    </IconButton>
  )
}

BackToButton.propTypes = {
  /**
   * @default 'medium'
   * Size of the button
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * @default 'small'
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']),
  /**
   * Path where browser will be directed to when the button is clicked.
   */
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Options to pass to the navigate
   */
  options: PropTypes.object
}

export default BackToButton
