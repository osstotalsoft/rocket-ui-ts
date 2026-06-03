import { Theme } from '@mui/material/styles'
import { CustomComponents } from '../../types'
import type {} from '@mui/x-date-pickers/themeAugmentation'

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
    },
    // x-date-pickers v8+ uses its own PickersTextField/PickersInput components
    // instead of MuiTextField/MuiInput, so we must mirror the overrides here.
    MuiPickersTextField: {
      defaultProps: {
        variant: 'standard'
      },
      styleOverrides: {
        root: {
          ...theme.typography.defaultFont
        }
      }
    },
    MuiPickersInput: {
      styleOverrides: {
        root: {
          ...theme.typography.defaultFont,
          fontWeight: '400'
        }
      }
    }
  }
}
