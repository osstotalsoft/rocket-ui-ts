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
          },
          variants: [
            {
              props: { variant: 'contained', color: 'inherit' },
              style: {
                color: palette.grey[800],
                boxShadow: customShadows.z8,
                '&:hover': { backgroundColor: palette.grey[400] }
              }
            },
            {
              props: { variant: 'outlined', color: 'inherit' },
              style: {
                border: `1px solid ${palette.grey[500_32]}`,
                '&:hover': { backgroundColor: palette.action.hover }
              }
            },
            {
              props: { variant: 'text', color: 'inherit' },
              style: { '&:hover': { backgroundColor: palette.action.hover } }
            }
          ]
        },
        sizeTiny: {}, // adds the 'tiny' size prop type which is not present in MUI
        sizeLarge: {
          height: 48
        }
      }
    }
  }
}
