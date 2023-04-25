/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Tabs } from '../NavPillsStyles'
import { TabsWrapperProps } from '../types'

const TabsWrapper: React.FC<TabsWrapperProps> = ({ children, actions, orientation, fullWidth, ...other }) => {
  debugger
  return orientation == 'vertical' ? (
    <Tabs role="vertical-tabs" orientation={orientation} sx={{ borderRight: 1, borderColor: 'divider' }} {...other}>
      {children}
    </Tabs>
  ) : (
    <Box sx={{ maxWidth: fullWidth ? 'unset' : 'fit-content', borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
      <Tabs role="horizontal-tabs" orientation={orientation} {...other}>
        {children}
      </Tabs>
      {actions &&
        actions?.map((action, index) => (
          <Box key={index} role="action" m="4px" mt="auto" mb="auto">
            {action}
          </Box>
        ))}
    </Box>
  )
}
TabsWrapper.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  actions: PropTypes.array,
  fullWidth: PropTypes.bool
}

export default TabsWrapper
