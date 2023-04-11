import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  primary: {
    lighter: '#b0b0b0',
    light: '#818181',
    main: '#555555',
    dark: '#2c2c2c',
    darker: '#000000',
    contrastText: '#fff',
    rgba: 'rgba(85, 85, 85, 1)'
  },
  secondary: {
    lighter: '#ffd170',
    light: '#ffa040',
    main: '#FF6F00',
    dark: '#c43e00',
    darker: '#8c0000',
    contrastText: '#fff',
    rgba: 'rgba(255, 111, 0, 1)'
  },
  background: {
    default: '#fff',
    paper: '#fff'
  },
  sideMenu: {
    bgColor: '#000',
    color: '#fff',
    hoverBgColor: 'rgba(200, 200, 200, 0.2)',
    hoverTextColor: '#fff',
    bgOpacity: '0.8'
  }
} as PaletteOptions)

const orangeTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

orangeTheme.components = componentsOverride(orangeTheme)

export default orangeTheme
