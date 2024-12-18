import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'components'

const ColumnHeader = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body1" emphasis="bold">
    {children}
  </Typography>
)
ColumnHeader.propTypes = {
  children: PropTypes.node
}

export default ColumnHeader
