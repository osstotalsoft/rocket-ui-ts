import { Theme } from '@mui/material'
import orangeTheme from './orangeTheme'

const vividOrangeTheme: Theme = {
  ...orangeTheme,
  palette: {
    ...orangeTheme.palette,
    background: {
      default: '#eee',
      paper: '#fff'
    }
  }
}

export default vividOrangeTheme
