import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  primary: {
    lighter: '#9d9d9d',
    light: '#6f6f6f',
    main: '#444444',
    dark: '#1d1d1d',
    darker: '#000000',
    contrastText: '#fff',
    rgba: 'rgba(68, 68, 68, 1)'
  },
  secondary: {
    lighter: '#ff8d62',
    light: '#ff5a36',
    main: '#ff0000',
    dark: '#c20000',
    darker: '#890000',
    contrastText: '#fff',
    rgba: 'rgba(225, 25, 50, 1)'
  },
  background: {
    default: '#ddd8d3',
    paper: '#fff'
  },
  sideMenu: {
    bgColor: '#fff',
    color: '#444444',
    hoverBgColor: 'transparent',
    hoverTextColor: '#ff0000',
    bgOpacity: '0.8',
    activeBgColor: '#ff0000'
  }
} as PaletteOptions)

const redTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

redTheme.components = componentsOverride(redTheme)

export default redTheme
