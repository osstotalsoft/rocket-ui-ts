import { styled } from '@mui/material/styles'
import { maxHeight } from '@mui/system'
import { white } from 'components/themes/common/palette/basicColors'
import { includes } from 'ramda'

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
})(({ theme, textSize }: any) => ({
  [`& .${classes.default}`]: { borderRadius: '6px', padding: '6px 20px' },
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
  [`& .${classes.toastWrapper}`]: {
    borderRadius: '6px',
    width: '350px',
    overflowWrap: 'anywhere',
    // whiteSpace: 'noWrap',
    // maxHeight: '100%',
    textOverflow: 'scroll'
  },
  ['.Toastify__toast-icon']: {
    alignSelf: 'auto'
  },
  ['.Toastify__close-button']: {
    background: 'transparent',
    outline: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    opacity: 1,
    transition: '0.3s ease',
    alignSelf: 'auto'
  },
  ['.Toastify__toast']: {
    // ...theme.typography.defaultFont,
    // fontSize: theme.typography.h6.fontSize
  }
}))

export default Container
