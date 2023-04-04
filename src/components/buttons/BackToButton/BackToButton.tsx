import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '../IconButton'
import { BackToButtonProps } from './types'

/**
 * BackToButton allow users to navigate to a provided path.
 *
 * Props of the [Material-UI Button](https://mui.com/material-ui/api/button/#props) component are also available.
 */
const BackToButton: React.FC<BackToButtonProps> = ({ path, fontSize = 'small', size = 'medium', ...rest }) => {
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    return path && navigate(path)
  }, [navigate, path])

  return (
    <IconButton aria-label="back" onClick={onBackToList} size={size} {...rest}>
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
  path: PropTypes.string
}

export default BackToButton
