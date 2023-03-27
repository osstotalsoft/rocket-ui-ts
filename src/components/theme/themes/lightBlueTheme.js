import { createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  PRIMARY: {
    lighter: '#86adff',
    light: '#507ed1',
    main: '#00529f',
    dark: '#002b70',
    darker: '#000044',
    contrastText: '#fff',
    rgba: 'rgba(0, 82, 159, 1)'
  },
  SECONDARY: {
    lighter: '#81b8f8',
    light: '#4c88c5',
    main: '#005B94',
    dark: '#003266',
    darker: '#000a3b',
    contrastText: '#fff',
    rgba: 'rgba(0, 91, 148, 1)'
  },
  BACKGROUND: {
    main: '#efeff8'
  },
  SIDE_MENU: {
    bgColor: '#fff',
    color: '#00529f',
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00529f',
    bgOpacity: '1'
  }
})

const lightBlueTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

lightBlueTheme.components = componentsOverride(lightBlueTheme)

export default lightBlueTheme
