import { PaletteOptions } from '@mui/material'
import { black, error, dark, defaultColor, grey, info, link, rose, success, warning, white } from './basicColors'
import { SimplePaletteColorOptions } from '@mui/material/styles'

export const createGradient = (colorsArray: (string | undefined)[]): string => {
  const colors = colorsArray.join(', ')
  return `linear-gradient(60deg, ${colors})`
}

const generatePalette = (themePalette: PaletteOptions): PaletteOptions => {
  const { background, sideMenu } = themePalette as PaletteOptions
  const primary = themePalette?.primary as SimplePaletteColorOptions
  const secondary = themePalette?.secondary as SimplePaletteColorOptions

  return {
    primary,
    secondary,
    rose,
    error,
    warning,
    info,
    white,
    grey,
    black,
    dark,
    success,
    link,
    default: defaultColor,
    createGradient,
    gradients: {
      primary: createGradient([primary?.light, primary?.main]),
      secondary: createGradient([secondary?.light, secondary?.main]),
      rose: createGradient([rose.light, rose.main]),
      error: createGradient([error.light, error.main]),
      warning: createGradient([warning.light, warning.main]),
      info: createGradient([info.light, info.main]),
      success: createGradient([success.light, success.main]),
      dark: createGradient([dark.light, dark.main]),
      default: createGradient([defaultColor.light, defaultColor.main])
    },
    darkGradients: {
      primary: createGradient([primary?.light, primary?.main, primary?.dark]),
      secondary: createGradient([secondary?.light, secondary?.main, secondary?.dark]),
      rose: createGradient([rose.light, rose.main, rose.dark]),
      error: createGradient([error.light, error.main, error.dark]),
      warning: createGradient([warning.light, warning.main, warning.dark]),
      info: createGradient([info.light, info.main, info.dark]),
      success: createGradient([success.light, success.main, success.dark]),
      dark: createGradient([dark.light, dark.main, dark.dark]),
      default: createGradient([defaultColor.light, defaultColor.main, defaultColor.dark])
    },
    background,
    sideMenu,
    action: {
      active: grey[600],
      hover: grey[500_8],
      selected: grey[500_16],
      disabled: grey[500_80],
      disabledBackground: grey[500_24],
      focus: grey[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  }
}

export default generatePalette
