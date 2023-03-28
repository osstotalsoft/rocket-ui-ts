import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'
import { includes, replace } from 'ramda'

export const basicColors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'error',
  'rose',
  'theme',
  'white',
  'dark',
  'default',
  'inherit'
]

const isBasicColor = (color: string) => includes(color, basicColors)

// for backwards compatibility
export const getColorStyles = (color: string) => {
  if (!color) return {}

  if (isBasicColor(color)) return { color, variant: 'contained' }

  if (includes('NoBackground', color)) {
    const extractedColor = replace('NoBackground', '', color)
    return { color: isBasicColor(extractedColor) ? extractedColor : undefined, variant: 'text' }
  }

  if (includes('WithBackground', color)) {
    const extractedColor = replace('WithBackground', '', color)
    return { color: isBasicColor(extractedColor) ? extractedColor : undefined, variant: 'outlined' }
  }

  if (color === 'transparent') return { color: 'primary', variant: 'text' }

  return {}
}

const PREFIX = 'StyledButton'
export const classes: any = {
  justIcon: `${PREFIX}-justIcon`,
  button: `${PREFIX}-button`,
  gradient: `${PREFIX}-gradient`
}

const localProps = ['round', 'right', 'justIcon', 'wd', 'capitalize']

export const createButton = (loading?: boolean): any =>
  styled(loading ? LoadingButton : MuiButton, {
    shouldForwardProp: prop => !includes(prop, localProps)
  })(({ theme, round, right, wd, color, capitalize }: any) => {
    const defaultFont = theme.typography.defaultFont
    const colorIsNotInherit = color && color !== 'inherit'

    return {
      [`&.${classes.button}`]: {
        ...defaultFont,
        fontWeight: 'bold',
        ...(round && {
          borderRadius: '30px'
        }),
        ...(right && {
          float: 'right'
        }),
        ...(wd && {
          minWidth: '160px'
        }),
        ...(!capitalize && {
          textTransform: 'none'
        }),
        '&.MuiButton-sizeTiny': { padding: '4px 4px', fontSize: '10px' },
        '&.Mui-disabled': {
          pointerEvents: 'auto', // for displaying tooltip when disabled
          '&.MuiButton-outlined, &.MuiButton-text': {
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      [`&.${classes.gradient}`]: {
        ...(colorIsNotInherit && {
          background: theme.palette.gradients[color],
          backgroundColor: theme.palette[color].main,
          color: theme.palette[color].contrastText
        }),
        mozTransition: 'all .4s ease-in-out',
        oTransition: 'all .4s ease-in-out',
        webkitTransition: 'all .4s ease-in-out',
        transition: 'all .4s ease-in-out',
        '&:hover,&:focus': {
          background:
            color &&
            color !== 'inherit' &&
            theme.palette.createGradient([theme.palette[color].light, theme.palette[color].main, theme.palette[color].dark]),
          mozTransition: 'all .4s ease-in-out',
          oTransition: 'all .4s ease-in-out',
          webkitTransition: 'all .4s ease-in-out',
          transition: 'all .4s ease-in-out'
        },
        '&.Mui-disabled': {
          background: theme.palette.createGradient([theme.palette.grey[500_8], theme.palette.grey[500_48]]),
          color: theme.palette.action.disabled
        }
      },
      [`&.${classes.justIcon}`]: {
        '&.MuiButton-sizeTiny': {
          padding: '3px',
          minWidth: '36px', // to override the MUI style
          width: '36px',
          height: '36px'
        },
        '&.MuiButton-sizeSmall': {
          padding: '7px',
          minWidth: '40px',
          width: '40px',
          height: '40px'
        },
        '&.MuiButton-sizeMedium': {
          padding: '11px',
          minWidth: '48px',
          width: '48px',
          height: '48px'
        },
        '&.MuiButton-sizeLarge': {
          padding: '15px',
          minWidth: '52px',
          width: '52px',
          height: '52px'
        }
      }
    }
  })
