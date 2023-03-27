import { createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  PRIMARY: {
    lighter: '#81b8f8',
    light: '#4c88c5',
    main: '#005B94',
    dark: '#003266',
    darker: '#000a3b',
    contrastText: '#fff',
    rgba: 'rgba(0, 91, 148, 1)'
  },
  SECONDARY: {
    lighter: '#77a2dc',
    light: '#4574aa',
    main: '#00497b',
    dark: '#00224e',
    darker: '#000026',
    contrastText: '#fff',
    rgba: 'rgba(0, 73, 123, 1)'
  },
  BACKGROUND: {
    main: '#F5F8FA'
  },
  SIDE_MENU: {
    bgColor: '#BCE4FA',
    color: '#00385F',
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00385F',
    bgOpacity: '1'
  }
})

const blueTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

blueTheme.components = componentsOverride(blueTheme)

export default blueTheme
