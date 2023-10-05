import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'
import table from './common/table'

const palette = generatePalette({
  primary: {
    lighter: '#81b8f8',
    light: '#4c88c5',
    main: '#00497b',
    dark: '#003266',
    darker: '#000a3b',
    contrastText: '#fff',
    rgba: 'rgba(0, 91, 148, 1)'
  },
  secondary: {
    lighter: '#99c0ed',
    light: '#66a1e5',
    main: '#3382DC',
    dark: '#1e61ad',
    darker: '#144174',
    contrastText: '#fff',
    rgba: 'rgba(51, 130, 220, 1)'
  },
  background: {
    default: '#F5F8FA',
    paper: '#fff'
  },
  sideMenu: {
    bgColor: '#BCE4FA',
    color: '#00385F',
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00385F',
    bgOpacity: '1',
    activeBgColor: '#00497b'
  }
} as PaletteOptions)

const blueTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

blueTheme.components = componentsOverride(blueTheme)

export default blueTheme
