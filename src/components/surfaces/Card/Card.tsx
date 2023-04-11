import React from 'react'
import PropTypes from 'prop-types'
import MuiCard, { iconStyle, CardContent } from './CardStyles'
import CardMedia from '@mui/material/CardMedia'
import { any, isNil } from 'ramda'
import { CardProps } from './types'
import CardHeader from './CardHeader'
import CardActions from './CardActions'

const sizes = {
  s: {
    height: '80px',
    width: '80px'
  },
  m: {
    height: '163px',
    width: '163px'
  },
  l: {
    height: '280px',
    width: '280px'
  }
}

const Card: React.FC<CardProps> = ({
  variant = 'standard',
  color,
  children,
  disablePadding,
  actions,
  footer,
  title,
  subheader,
  headerProps = {},
  footerProps,
  icon: Icon,
  iconColor = 'secondary',
  mediaProps,
  ...props
}) => {
  const hasIcon = !!Icon

  const cardHeaderProps = {
    title,
    subheader,
    avatar: Icon ? <Icon style={iconStyle} /> : undefined,
    actions,
    ...headerProps
  }
  const hasHeader = any(x => !isNil(x), Object.values(cardHeaderProps))

  const { size, ...standardMediaProps } = mediaProps || {}

  return (
    <MuiCard color={color} hasIcon={hasIcon} {...props}>
      {hasHeader && <CardHeader variant={variant} hasIcon={hasIcon} iconColor={hasIcon && iconColor} {...cardHeaderProps} />}
      {mediaProps && <CardMedia {...sizes[size]} {...standardMediaProps} />}
      {disablePadding ? children : <CardContent variant={variant}>{children}</CardContent>}
      {footer && (
        <CardActions variant={variant} {...footerProps}>
          {footer}
        </CardActions>
      )}
    </MuiCard>
  )
}

Card.propTypes = {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Color of card.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose']),
  /**
   * Content of card.
   */
  children: PropTypes.node,
  /**
   * If true, the content padding is disabled.
   */
  disablePadding: PropTypes.bool,
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node,
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer: PropTypes.node,
  /**
   * Props applied to the CardActions component.
   */
  footerProps: PropTypes.object,
  /**
   * Content of the title.
   */
  title: PropTypes.node,
  /**
   * Content of the subheader.
   */
  subheader: PropTypes.node,
  /**
   * @default {}
   * Props applied to the CardHeader component.
   */
  headerProps: PropTypes.object,
  /**
   * Icon to be displayed.
   */
  icon: PropTypes.object,
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor: PropTypes.string,
  /*
   * Props applied to the CardMedia component.
   */
  mediaProps: PropTypes.object
}

export default Card
