import { createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  PRIMARY: {
    lighter: '#9d9d9d',
    light: '#6f6f6f',
    main: '#444444',
    dark: '#1d1d1d',
    darker: '#000000',
    contrastText: '#fff',
    rgba: 'rgba(68, 68, 68, 1)'
  },
  SECONDARY: {
    lighter: '#ff8d62',
    light: '#ff5a36',
    main: '#ff0000',
    dark: '#c20000',
    darker: '#890000',
    contrastText: '#fff',
    rgba: 'rgba(255, 0, 0, 1)'
  },
  BACKGROUND: {
    main: '#ddd8d3'
  },
  SIDE_MENU: {
    bgColor: '#fff',
    color: '#444444',
    hoverBgColor: 'transparent',
    hoverTextColor: '#ff0000',
    bgOpacity: '0.8'
  }
})

const redTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

redTheme.components = componentsOverride(redTheme)

export default redTheme
