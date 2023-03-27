import React from 'react'
import PropTypes from 'prop-types'
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import defaultTheme from './themes/defaultTheme.js'

const ThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
