// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

export const TabPanel: React.FC<TabPanelProps> = ({ children, active, index, ...other }) => {
  return (
    <Box
      role="tab-panel"
      hidden={active !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {active === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

export const OrientationWrapper: React.FC<OrientationWrapperProps> = ({ children, actions, orientation }) => {
  return orientation == 'vertical' ? (
    <Box role="vertical-tab-wrapper" sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>{children}</Box>
      {actions && (
        <Box sx={{ flexGrow: 1, borderLeft: 1, borderColor: 'divider', p: 1, maxWidth: 'fit-content' }}>
          {actions?.map((action: ReactNode, index: number) => (
            <Box key={index} role="action" m="4px">
              {action}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ) : (
    <>{children}</>
  )
}
OrientationWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.arrayOf(PropTypes.node),
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Tabs } from './NavPillsStyles'
import { TabPanelProps, OrientationWrapperProps, TabsWrapperProps } from './types'

export const TabsWrapper: React.FC<TabsWrapperProps> = ({
  children,
  actions,
  orientation,
  fullWidth,
  indicatorColor,
  ...other
}) => {
  return orientation == 'vertical' ? (
    <Tabs
      role="vertical-tabs"
      orientation={orientation}
      indicatorColor={indicatorColor}
      sx={{ borderRight: 1, borderColor: 'divider' }}
      {...other}
    >
      {children}
    </Tabs>
  ) : (
    <Box sx={{ maxWidth: fullWidth ? 'unset' : 'fit-content', borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
      <Tabs role="horizontal-tabs" orientation={orientation} indicatorColor={indicatorColor} {...other}>
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  actions: PropTypes.array,
  fullWidth: PropTypes.bool
}
