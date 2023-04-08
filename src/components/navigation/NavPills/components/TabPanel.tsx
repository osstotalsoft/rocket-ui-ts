import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { TabPanelProps } from '../types'

const TabPanel: React.FC<TabPanelProps> = ({ children, active, index, ...other }) => {
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

export default TabPanel
