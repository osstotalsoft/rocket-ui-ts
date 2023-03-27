import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'components/common'
import ThemeProvider from '../../providers/ThemeProvider'

const TestingWrapper = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastContainer theme='colored' />
      {children}
    </ThemeProvider>
  )
}

TestingWrapper.propTypes = {
  children: PropTypes.node
}

export default TestingWrapper
