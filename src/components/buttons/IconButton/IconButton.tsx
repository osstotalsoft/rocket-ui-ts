import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import MuiIconButton from './IconButtonStyles'
import { IconButtonProps, IconTypeKey, iconType } from './types'

/**
 * IconButtons allow users to take actions, and make choices using icons to describe best the action
 * It triggers an action or event when activated.
 *
 * Props of the [Material-UI Button](https://mui.com/material-ui/api/button/#props) component are also available.
 */
const IconButton: React.FC<IconButtonProps> = ({
  children,
  type,
  fontSize = 'small',
  loading,
  size = 'medium',
  color = 'secondary',
  ...rest
}) => {
  const CustomIcon = useMemo(() => iconType[type as IconTypeKey], [type])

  const iconButtonProps = {
    ['aria-label']: type || 'iconButton'
  }

  return (
    <MuiIconButton {...iconButtonProps} size={size} color={color} {...rest}>
      {loading ? (
        <CircularProgress color="inherit" size={24} />
      ) : type ? (
        <CustomIcon fontSize={fontSize as any} />
      ) : (
        children
      )}
    </MuiIconButton>
  )
}

IconButton.propTypes = {
  /**
   * @default 'secondary'
   * Color of the button
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'white',
    'dark',
    'transparent',
    'default',
  ]),
  /**
   * @default 'medium'
   * Size of the button
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Override or extend the styles applied to the component
   */
  className: PropTypes.string,
  /**
   * If true, button will be disabled. Default is set to false
   */
  disabled: PropTypes.bool,
  /**
   * If true, button is in loading state.
   */
  loading: PropTypes.bool,
  /**
   * Text to be displayed when the user hover over the button
   */
  tooltip: PropTypes.string,
  /**
   * Content of the button
   */
  children: PropTypes.node,
  /**
   * 	Callback fired when a "click" event is detected.
   */
  onClick: PropTypes.func,
  /**
   * Custom icon to be displayed
   */
  type: PropTypes.oneOf(['add', 'cancel', 'close', 'delete', 'download', 'downward', 'edit', 'view', 'save', 'upward', 'expandLess', 'expandMore', 'filterList', 'postAdd']),
  /**
   * @default 'small'
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large'])
}

export default IconButton
