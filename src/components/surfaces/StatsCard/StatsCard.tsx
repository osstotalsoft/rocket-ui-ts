import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCard,
  CardContent,
  StyledCardActions,
  CardTitle,
  CardDescription,
  StyledCardHeader,
  iconStyle
} from './StatsCardStyles'
import Divider from '@mui/material/Divider'
import { StatsCardProps } from './types'

const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  iconColor = 'info',
  title,
  description,
  footer,
  variant = 'elevation',
  footerProps,
  headerProps
}) => {
  return (
    <StyledCard disablePadding variant={variant}>
      <StyledCardHeader avatar={Icon && <Icon style={iconStyle} />} hasIcon={true} iconColor={iconColor} {...headerProps} />
      <CardContent>
        <CardTitle variant="subtitle1">{title}</CardTitle>
        <CardDescription variant="h5">{description}</CardDescription>
      </CardContent>
      <Divider />
      <StyledCardActions {...footerProps}>{footer}</StyledCardActions>
    </StyledCard>
  )
}

StatsCard.propTypes = {
  /**
   * Icon to be displayed.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  icon: PropTypes.object,
  /**
   * @default 'info'
   * Icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
  /**
   * Content of the title.
   */
  title: PropTypes.node,
  /**
   * Content of the description.
   */
  description: PropTypes.node,
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer: PropTypes.node,
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
   * Props applied to the CardActions component.
   */
  footerProps: PropTypes.object,
  /**
   * Props applied to the CardHeader component.
   */
  headerProps: PropTypes.object
}

export default StatsCard
