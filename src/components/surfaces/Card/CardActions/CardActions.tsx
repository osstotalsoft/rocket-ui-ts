import React from 'react'
import PropTypes from 'prop-types'
import MuiCardActions from './CardActionsStyles'
import { CardActionsProps } from '../types'

const CardActions: React.FC<CardActionsProps> = props => {
  return <MuiCardActions {...props} />
}

CardActions.propTypes = {
  /**
   * If 'true', the card footer will be filled with a grayish color
   * @default false
   */
  filled: PropTypes.bool,
  /**
   * Align actions.
   * @default 'left'
   */
  align: PropTypes.oneOf(['left', 'right', 'center'])
}

export default CardActions
