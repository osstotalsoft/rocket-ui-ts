import { BLACK, ERROR, DARK, DEFAULT, GREY, INFO, LINK, ROSE, SUCCESS, WARNING, WHITE } from './basicColors'

export const createGradient = colorsArray => {
  const colors = colorsArray.join(', ')
  return `linear-gradient(60deg, ${colors})`
}

const generatePalette = themePalette => {
  const { PRIMARY, SECONDARY, BACKGROUND, SIDE_MENU } = themePalette

  return {
    primary: PRIMARY,
    secondary: SECONDARY,
    theme: SECONDARY, // theme and secondary are the same thing; we should deprecate theme in order not to repeat ourselves
    rose: ROSE,
    error: ERROR,
    danger: ERROR, // TODO: remove `danger` color in a future version
    warning: WARNING,
    info: INFO,
    white: WHITE,
    grey: GREY,
    black: BLACK,
    dark: DARK,
    success: SUCCESS,
    link: LINK,
    default: DEFAULT,
    createGradient,
    gradients: {
      primary: createGradient([PRIMARY.light, PRIMARY.main]),
      secondary: createGradient([SECONDARY.light, SECONDARY.main]),
      theme: createGradient([SECONDARY.light, SECONDARY.main]),
      rose: createGradient([ROSE.light, ROSE.main]),
      error: createGradient([ERROR.light, ERROR.main]),
      danger: createGradient([ERROR.light, ERROR.main]),
      warning: createGradient([WARNING.light, WARNING.main]),
      info: createGradient([INFO.light, INFO.main]),
      success: createGradient([SUCCESS.light, SUCCESS.main]),
      dark: createGradient([DARK.light, DARK.main]),
      default: createGradient([DEFAULT.light, DEFAULT.main])
    },
    darkGradients: {
      primary: createGradient([PRIMARY.light, PRIMARY.main, PRIMARY.dark]),
      secondary: createGradient([SECONDARY.light, SECONDARY.main, SECONDARY.dark]),
      theme: createGradient([SECONDARY.light, SECONDARY.main, SECONDARY.dark]),
      rose: createGradient([ROSE.light, ROSE.main, ROSE.dark]),
      error: createGradient([ERROR.light, ERROR.main, ERROR.dark]),
      danger: createGradient([ERROR.light, ERROR.main, ERROR.dark]),
      warning: createGradient([WARNING.light, WARNING.main, WARNING.dark]),
      info: createGradient([INFO.light, INFO.main, INFO.dark]),
      success: createGradient([SUCCESS.light, SUCCESS.main, SUCCESS.dark]),
      dark: createGradient([DARK.light, DARK.main, DARK.dark]),
      default: createGradient([DEFAULT.light, DEFAULT.main, DEFAULT.dark])
    },
    background: BACKGROUND,
    sideMenu: SIDE_MENU,
    action: {
      active: GREY[600],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  }
}

export default generatePalette
