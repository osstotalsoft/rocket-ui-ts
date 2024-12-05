import { styled } from '@mui/material/styles'
import { always, cond, equals, includes, T } from 'ramda'

const PREFIX = 'StyledToast'

export const classes = {
  default: `${PREFIX}-default`,
  success: `${PREFIX}-success`,
  info: `${PREFIX}-info`,
  error: `${PREFIX}-error`,
  warning: `${PREFIX}-warning`,
  toastWrapper: `${PREFIX}-toastWrapper`
}

const Container: any = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['textSize'])
})(({ theme, textSize }: any) => {
  const fontSize = cond([
    [equals('medium'), always(theme.typography.body2.fontSize)],
    [equals('large'), always(theme.typography.h6.fontSize)],
    [T, always(theme.typography.defaultFont.fontSize)]
  ])(textSize)

  return {
    [`& .${classes.default}`]: { borderRadius: '6px' },
    [`& .${classes.success}`]: {
      '--toastify-color-success': theme.palette.success.main,
      '--toastify-text-color-success': theme.palette.success.contrastText,
      '--toastify-icon-color-success': theme.palette.success.main,
      '--toastify-color-progress-success': theme.palette.success.main
    },
    [`& .${classes.info}`]: {
      '--toastify-color-info': theme.palette.info.main,
      '--toastify-text-color-info': theme.palette.info.contrastText,
      '--toastify-icon-color-info': theme.palette.info.main,
      '--toastify-color-progress-info': theme.palette.info.main
    },
    [`& .${classes.error}`]: {
      '--toastify-color-error': theme.palette.error.main,
      '--toastify-text-color-error': theme.palette.error.contrastText,
      '--toastify-icon-color-error': theme.palette.error.main,
      '--toastify-color-progress-error': theme.palette.error.main
    },
    [`& .${classes.warning}`]: {
      '--toastify-color-warning': theme.palette.warning.main,
      '--toastify-text-color-warning': theme.palette.warning.contrastText,
      '--toastify-icon-color-warning': theme.palette.warning.main,
      '--toastify-color-progress-warning': theme.palette.warning.main
    },
    ['.Toastify__close-button']: {
      background: 'transparent',
      outline: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      opacity: 1,
      transition: '0.3s ease',
      alignSelf: 'auto',
      marginRight: '6px'
    },
    ['.Toastify__toast']: {
      ...theme.typography.defaultFont,
      fontSize
    }
  }
})

export default Container
