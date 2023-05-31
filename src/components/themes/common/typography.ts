import { PaletteOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

export const defaultFont = {
  fontFamily: 'Source Sans Pro',
  fontSize: 14,
  lineHeight: '1.5em',
  fontWeight: '300',
  letterSpacing: '0.02857em'
}

export const generateTypography = (palette: PaletteOptions) =>
  ({
    ...defaultFont,
    defaultFont,
    useNextVariants: true,
    htmlFontSize: 14,
    fontWeightMedium: 300,
    button: {
      ...defaultFont,
      textAlign: 'center',
      fontStretch: 'normal',
      fontStyle: 'normal'
    },
    body: defaultFont,
    header: {
      title: {
        borderRadius: '3px',
        textTransform: 'none',
        fontWeight: 'bold',
        color: palette.primary.main,
        '&:hover,&:focus': {
          background: 'transparent'
        }
      }
    }
  } as TypographyOptions)
