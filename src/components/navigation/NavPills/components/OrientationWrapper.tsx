import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import type { OrientationWrapperProps } from '../types'

//@ts-ignore
const OrientationWrapper: React.FC<OrientationWrapperProps> = ({ children, actions, orientation }) => {
  return orientation == 'vertical' ? (
    <Box role="vertical-tab-wrapper" sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>{children}</Box>
      {actions && (
        <Box sx={{ flexGrow: 1, borderLeft: 1, borderColor: 'divider', p: 1, maxWidth: 'fit-content' }}>
          {actions?.map((action: React.ReactNode, index: React.Key) => (
            <Box key={index} role="action" m="4px">
              {action}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ) : (
    children
  )
}
OrientationWrapper.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default OrientationWrapper
