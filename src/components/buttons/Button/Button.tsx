import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { createButton, getColorStyles, classes } from './ButtonStyles'
import { Tooltip } from '@mui/material'
import cx from 'classnames'
import { ButtonProps } from './types'

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * It triggers an action or event when activated.
 *
 * Props of the [Material-UI Button](https://mui.com/material-ui/api/button/#props) component are also available.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'medium',
  tooltip,
  round,
  right,
  justIcon,
  className,
  disabled,
  onClick,
  loading,
  gradient,
  capitalize = true,
  ...rest
}) => {
  const buttonStyles = getColorStyles(color)

  const btnClasses = cx({
    ...(className ? { [className]: className } : {}),
    [classes.justIcon]: justIcon,
    [classes[size]]: size,
    [classes.gradient]: gradient
  })

  const classNames = `${classes.button} ${btnClasses}`

  const Comp = useMemo(() => createButton(loading), [loading])

  const baseComp = (
    <Comp
      size={size}
      round={round}
      right={right}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      component={disabled ? 'div' : 'button'}
      capitalize={capitalize}
      {...(loading ? { loading } : {})}
      {...buttonStyles}
      {...rest}
    >
      {children}
    </Comp>
  )

  return tooltip ? <Tooltip title={tooltip}>{baseComp}</Tooltip> : baseComp
}

Button.propTypes = {
  /**
   * Color of the button.
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'default',
    'white',
    'dark',
    'transparent'
  ]),
  /**
   * If true, button is in loading state.
   */
  loading: PropTypes.bool,
  /**
   * If true, rounded corners are enabled.
   */
  round: PropTypes.bool,
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Callback fired when a "click" event is detected.
   */
  onClick: PropTypes.func,
  /**
   * Variant to use.
   */
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * A custom class provided.
   */
  className: PropTypes.string,
  /**
   * If true,  the button's min width will be set to 160px.
   */
  wd: PropTypes.bool,
  /**
   * If true, the button will be smaller.
   */
  justIcon: PropTypes.bool,
  /**
   * If true, the button will float to the right.
   */
  right: PropTypes.bool,
  /**
   * @default 'medium'
   * Size of the button.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Tooltip of the button.
   */
  tooltip: PropTypes.string,
  /**
   * @default true
   * If true, button text is capitalized.
   */
  capitalize: PropTypes.bool,
  /**
   * If true, a gradient background is applied.
   */
  gradient: PropTypes.bool
}

export default Button
