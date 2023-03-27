import { createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  PRIMARY: {
    lighter: '#b0b0b0',
    light: '#818181',
    main: '#555555',
    dark: '#2c2c2c',
    darker: '#000000',
    contrastText: '#fff',
    rgba: 'rgba(85, 85, 85, 1)'
  },
  SECONDARY: {
    lighter: '#a8ffff',
    light: '#6ff9ff',
    main: '#26C6DA',
    dark: '#0095a8',
    darker: '#006779',
    contrastText: '#fff',
    rgba: 'rgba(38, 198, 218, 1)'
  },
  BACKGROUND: {
    main: '#fff'
  },
  SIDE_MENU: {
    bgColor: '#000',
    color: '#fff',
    hoverBgColor: 'rgba(200, 200, 200, 0.2)',
    hoverTextColor: '#fff',
    bgOpacity: '0.8'
  }
})

const defaultTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

defaultTheme.components = componentsOverride(defaultTheme)

export default defaultTheme
