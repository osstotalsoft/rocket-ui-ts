import { Theme } from '@mui/material'
import { CustomComponents } from '../../types'

export default function Button({ palette, customShadows }: Theme): CustomComponents {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeTiny: {}, // adds the 'tiny' size prop type which is not present in MUI
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: palette.grey[800],
          boxShadow: customShadows.z8,
          '&:hover': {
            backgroundColor: palette.grey[400]
          }
        },
        containedPrimary: {
          boxShadow: customShadows.primary
        },
        outlinedInherit: {
          border: `1px solid ${palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: palette.action.hover
          }
        }
      }
    }
  }
}
