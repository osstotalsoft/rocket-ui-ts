import { CustomComponents } from '../../types'

export default function TextField(): CustomComponents {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            position: 'absolute',
            top: '100%'
          }
        }
      }
    }
  }
}
