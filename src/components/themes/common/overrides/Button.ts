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
        containedSecondary: {
          boxShadow: customShadows.secondary
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
      },
    variants: [
      {
        props: { variant: 'selectedActive' },
        style: {
          backgroundColor: palette.secondary.main,          
          '&:hover': { backgroundColor: palette.secondary.dark },
          '&.Mui-disabled': { backgroundColor: palette.secondary.main, color: palette.common.white, opacity: 0.7 },
        },
      },
      {
        props: { variant: 'selectedDefault' },
        style: {
          backgroundColor: palette.primary.main,          
          '&:hover': { backgroundColor: palette.primary.dark },
          '&.Mui-disabled': { backgroundColor: palette.primary.main, color: palette.common.white, opacity: 0.7 },
        },
      },
    ],      
    }
  }
}
