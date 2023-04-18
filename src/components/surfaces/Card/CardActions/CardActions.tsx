import React from 'react'
import PropTypes from 'prop-types'
import MuiCardActions from './CardActionsStyles'
import { CardActionsProps } from '../types'

const CardActions: React.FC<CardActionsProps> = props => {
  return <MuiCardActions {...props} />
}

CardActions.propTypes = {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align: PropTypes.oneOf(['left', 'right'])
}

export default CardActions
