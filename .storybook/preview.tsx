import './doc-root.css'
import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from '../src/components/feedback/Toast'
import getTheme from '../src/components/themes/index'
import { DocsPage } from './DocsPage'

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context)
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer textSize='medium' />
      <Story />
    </ThemeProvider>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    },
    docs: {
      page: DocsPage,
      source: {
        language: 'tsx',
        excludeDecorators: true
      }
    },
    layout: 'centered'
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'circlehollow',
        items: ['default', 'green', 'blue', 'orange', 'red', 'vividOrange', 'lightBlue'],
        title: 'Theme',
        dynamicTitle: true
      }
    }
  },
  decorators: [withThemeProvider],
  tags: ['autodocs']
}

export default preview
