import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import defaultTheme from '../components/themes/defaultTheme'

const TestingWrapper = ({ children }: any) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

TestingWrapper.propTypes = {
  children: PropTypes.node
}

export default TestingWrapper
