/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import PropTypes from 'prop-types'
import MuiCard, { CardContent, iconStyle as baseIconStyle } from './CardStyles'
import CardMedia from '@mui/material/CardMedia'
import { any, isNil } from 'ramda'
import { CardProps, CardColor } from './types'
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

/**
 * Cards are surfaces that display content and actions on a single topic.
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 *
 * Props of the [Material-UI Card](https://mui.com/material-ui/api/card/) and [Paper](https://mui.com/material-ui/api/paper/) components are also available.
 */
const Card: React.FC<CardProps> = ({
  variant = 'elevation',
  filled,
  color,
  children,
  disablePadding,
  actions,
  footer,
  title,
  subheader,
  headerProps,
  contentProps,
  footerProps,
  icon: Icon,
  iconColor = 'secondary',
  mediaProps,
  avatarProps,
  headerContentProps,
  iconStyle = {},
  ...props
}) => {
  const hasIcon = !!Icon

  const cardHeaderProps = {
    title,
    subheader,
    avatar: Icon && <Icon style={{ ...baseIconStyle, ...iconStyle }} />,
    actions,
    filled,
    ...headerProps
  }
  const hasHeader = any(x => !isNil(x), Object.values(cardHeaderProps))

  const { size, ...standardMediaProps } = mediaProps || {}

  return (
    <MuiCard color={color} hasIcon={hasIcon} variant={variant} {...props}>
      {hasHeader && (
        <CardHeader
          hasIcon={hasIcon}
          iconColor={hasIcon ? (iconColor as CardColor) : undefined}
          avatarProps={avatarProps}
          headerContentProps={headerContentProps}
          {...cardHeaderProps}
        />
      )}
      {mediaProps && <CardMedia {...sizes[size || 's']} {...standardMediaProps} />}
      {disablePadding ? children : <CardContent hasHeader={hasHeader} children={children} {...contentProps} />}
      {footer && (
        <CardActions filled={filled} {...footerProps}>
          {footer}
        </CardActions>
      )}
    </MuiCard>
  )
}

Card.propTypes = {
  /**
   * Color of card.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose']),
  /**
   * Content of card.
   */
  children: PropTypes.node,
  /**
   * @default 'elevation'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: PropTypes.number,
  /**
   * If 'true', the card header and footer will be filled with a grayish color
   * @default false
   */
  filled: PropTypes.bool,
  /**
   * Props applied to the CardContent component
   */
  contentProps: PropTypes.object,
  /**
   * If true, the content padding is disabled.
   */
  disablePadding: PropTypes.bool,
  /**
   * Actions to be displayed in the upper right corner of the card. If an array, will display all items with spacing between them.
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
  // @ts-ignore
  icon: PropTypes.object,
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
  /*
   * Props applied to the CardMedia component.
   */
  mediaProps: PropTypes.object,
  /**
   *  @default {}
   * Props applied to the avatar.
   */
  avatarProps: PropTypes.object,
  /**
   * @default {}
   * Props applied to the CardHeader component.
   */
  headerContentProps: PropTypes.object,
  /**
   * @default {}
   * Style applied to icon avatar.
   */
  iconStyle: PropTypes.object
}

export default Card
