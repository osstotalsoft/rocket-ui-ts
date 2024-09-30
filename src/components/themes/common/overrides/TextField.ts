import { CustomComponents } from '../../types'

export default function TextField(): CustomComponents {
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
    }
  }
}
