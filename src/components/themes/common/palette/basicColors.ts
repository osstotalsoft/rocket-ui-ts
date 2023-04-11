import { Color, SimplePaletteColorOptions } from '@mui/material'
import { alpha } from '@mui/material/styles'

// shades picked using this Material tool: https://material.io/resources/color/#!/

export const rose = {
  lighter: '#ff94c0',
  light: '#ff6090',
  main: '#e91e63',
  dark: '#b0003a',
  darker: '#790015',
  contrastText: '#fff'
}

export const warning: SimplePaletteColorOptions = {
  lighter: '#fffc79',
  light: '#ffc947',
  main: '#ff9800',
  dark: '#c66900',
  darker: '#8f3d00',
  contrastText: '#fff'
}

export const error: SimplePaletteColorOptions = {
  lighter: '#ffab8f',
  light: '#ff7961',
  main: '#f44336',
  dark: '#ba000d',
  darker: '#820000',
  contrastText: '#fff'
}

export const info: SimplePaletteColorOptions = {
  lighter: '#97ffff',
  light: '#5ddef4',
  main: '#00acc1',
  dark: '#007c91',
  darker: '#005063',
  contrastText: '#fff'
}

export const success: SimplePaletteColorOptions = {
  lighter: '#b3ffae',
  light: '#80e27e',
  main: '#4caf50',
  dark: '#087f23',
  darker: '#005100',
  contrastText: '#fff'
}

export const white: SimplePaletteColorOptions = {
  main: '#fff',
  contrastText: '#000000'
}

export const dark: SimplePaletteColorOptions = {
  lighter: '#848484',
  light: '#575757',
  main: '#2e2e2e',
  dark: '#030303',
  darker: '#000000',
  contrastText: '#fff'
}

export const defaultColor: SimplePaletteColorOptions = {
  lighter: '#b0b0b0',
  light: '#818181',
  main: '#555555',
  dark: '#2c2c2c',
  darker: '#000000',
  contrastText: '#fff',
  rgba: 'rgba(85, 85, 85, 1)'
}

export const black: Partial<SimplePaletteColorOptions> = {
  main: '#000000'
}

export const grey: Partial<Color> = {
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
  main: '#919EAB'
}

export const link: Partial<SimplePaletteColorOptions> = {
  main: '#0074cc'
}
