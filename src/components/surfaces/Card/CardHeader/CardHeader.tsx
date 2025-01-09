import React from 'react'
import PropTypes from 'prop-types'
import MuiCardHeader from './CardHeaderStyles'
import Box from '@mui/material/Box'
import { isValidElement } from 'react'
import Typography from '../../../dataDisplay/Typography'
import { CardHeaderProps } from '../types'

const CardHeader: React.FC<CardHeaderProps> = ({ actions, title, ...rest }) => {
  return (
    <MuiCardHeader
      action={
        Array.isArray(actions)
          ? actions.map((a, index) => (
              <Box key={index} ml={1}>
                {a}
              </Box>
            ))
          : actions
      }
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
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node,
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
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose']),
  /**
   * If 'true', the card header will be filled with a grayish color
   * @default false
   */
  filled: PropTypes.bool
}

export default CardHeader
