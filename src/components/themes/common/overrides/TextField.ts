import { Theme } from '@mui/material/styles'
import { CustomComponents } from '../../types'

export default function TextField(theme: Theme): CustomComponents {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            marginTop: 0,
            lineHeight: 1
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard'
      },
      styleOverrides: {
        root: {
          ...theme.typography.defaultFont
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ...theme.typography.defaultFont,
          fontWeight: '400'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.defaultFont,
          fontWeight: '400',
          lineHeight: '1.42857'
        }
      }
    }
  }
}
