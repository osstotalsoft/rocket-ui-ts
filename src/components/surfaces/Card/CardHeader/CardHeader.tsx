import React from 'react'
import PropTypes from 'prop-types'
import MuiCardHeader from './CardHeaderStyles'
import Box from '@mui/material/Box'
import { isValidElement } from 'react'
import { CardHeaderProps } from './types'
import Typography from 'components/dataDisplay/Typography'

const CardHeader: React.FC<CardHeaderProps> = ({ action, title, ...rest }) => {
  return (
    <MuiCardHeader
      action={
        Array.isArray(action)
          ? action.map((a, index) => (
              <Box key={index} ml={1}>
                {a}
              </Box>
            ))
          : action
      }
      disableTypography
      title={
        title ? (
          isValidElement(title) ? (
            title
          ) : (
            <Typography variant="subtitle1" emphasis="bold">
              {title}
            </Typography>
          )
        ) : undefined
      }
      {...rest}
    />
  )
}

CardHeader.propTypes = {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  action: PropTypes.node,
  /**
   * Card title
   */
  title: PropTypes.node,
  /**
   * Indicates if the parent Card component contains an icon element or not
   */
  hasIcon: PropTypes.bool,
  /**
   * @default 'secondary'
   * Icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose'])
}

export default CardHeader
