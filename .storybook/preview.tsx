import React from 'react'
import type { Preview } from '@storybook/react'

import { ThemeProvider } from '@mui/material/styles'
import getTheme from '../src/components/theme/index'

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context)
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['default', 'green', 'blue', 'orange', 'red', 'vividOrange', 'lightBlue'],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  },
  decorators: [withThemeProvider]
}

export default preview
