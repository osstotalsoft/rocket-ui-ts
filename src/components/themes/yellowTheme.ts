import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'
import table from './common/table'

const primaryLighter = '#C3C4C6'
const primaryLight   = '#848589'
const primaryMain    = '#2C2D34'
const primaryDark    = '#1E1F24'
const primaryDarker  = '#111214'

const secondaryLighter = '#ffff72'
const secondaryLight   = '#ffee2e'
const secondaryMain    = '#FEE600'
const secondaryDark    = '#c7b500'
const secondaryDarker  = '#928300'

const white = '#ffffff'
const disabledBg = '#E0E0E0'
const disabledText = '#9E9E9E'

const palette = generatePalette({
  primary: {
    lighter: primaryLighter,
    light:   primaryLight,
    main:    primaryMain,
    dark:    primaryDark,
    darker:  primaryDarker,
    contrastText: white,
    rgba: 'rgba(44, 45, 52, 1)'
  },
  secondary: {
    lighter: secondaryLighter,
    light:   secondaryLight,
    main:    secondaryMain,
    dark:    secondaryDark,
    darker:  secondaryDarker,
    contrastText: primaryDark,
    rgba: 'rgba(254, 230, 0, 1)'
  },
  background: {
    default: white,
    paper:   white
  },
  sideMenu: {
    bgColor:      '#000',
    color:        white,
    hoverBgColor: 'rgba(200, 200, 200, 0.2)',
    hoverTextColor: white,
    bgOpacity:    '0.8',
    focusBgColor: secondaryMain,
    activeBgColor: secondaryMain,
    activeColor:  primaryDark,
  }
} as PaletteOptions)

const yellowTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

// Apply base rocket-ui component overrides first
yellowTheme.components = componentsOverride(yellowTheme)

const containedPrimaryStyle = {
  backgroundColor: primaryDark,
  color: white,
  '&:hover': {
    backgroundColor: primaryDarker,
  },
  '&.Mui-disabled': {
    backgroundColor: disabledBg,
    color: disabledText,
    opacity: 1,
  },
}

const outlinedPrimaryStyle = {
  borderColor: primaryDark,
  color: secondaryMain,
  '& .MuiSvgIcon-root': {
    color: primaryMain, 
  },
  '&:hover': {
    borderColor: primaryDarker,
    backgroundColor: 'rgba(44, 45, 52, 0.08)',
  },
  '&.Mui-disabled': {
    borderColor: disabledBg,
    color: disabledText,
    opacity: 1,
  },
}

const textPrimaryStyle = {
  color: secondaryMain,
  '& .MuiSvgIcon-root': {
    color: primaryMain, 
  },  
  '&:hover': {
    backgroundColor: 'rgba(44, 45, 52, 0.08)',
  },
  '&.Mui-disabled': {
    color: disabledText,
    opacity: 1,
  },
}

// Then apply yellow-specific overrides on top
yellowTheme.components = {
  ...yellowTheme.components,
MuiButton: {
  ...yellowTheme.components?.MuiButton,
  styleOverrides: {
    ...yellowTheme.components?.MuiButton?.styleOverrides,

    containedPrimary: containedPrimaryStyle,
    containedSecondary: containedPrimaryStyle,

    outlinedPrimary: outlinedPrimaryStyle,
    outlinedSecondary: outlinedPrimaryStyle,

    textPrimary: textPrimaryStyle,
    textSecondary: textPrimaryStyle
  },

  variants: [
    ...(yellowTheme.components?.MuiButton?.variants || []),
    {
      props: { variant: 'selectedActive' },
      style: {
        backgroundColor: primaryDark,
        '&:hover': { backgroundColor: primaryDarker },
        '&.Mui-disabled': {
          backgroundColor: primaryDark,
          color: white,
          opacity: 0.7,
        },
      },
    },
    {
      props: { variant: 'selectedDefault' },
      style: {
        backgroundColor: secondaryMain,
        '&:hover': { backgroundColor: secondaryDarker },
        '&.Mui-disabled': {
          backgroundColor: secondaryMain,
          color: primaryDark,
          opacity: 0.7,
        },
      },
    },
  ],
},
  MuiCardHeader: {
    styleOverrides: {
      avatar: {
        background: `linear-gradient(195deg, ${yellowTheme.palette.primary.main}, ${yellowTheme.palette.primary.main}) !important`,
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        '&.Mui-completed': { color: primaryMain },
        '&.Mui-active':    { color: secondaryMain },
      },
      text: { fill: primaryDark },
    },
  },
}

export default yellowTheme