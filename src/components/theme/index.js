import { env } from '../env'
import blueTheme from './themes/blueTheme.js'
import defaultTheme from './themes/defaultTheme.js'
import greenTheme from './themes/greenTheme.js'
import lightBlueTheme from './themes/lightBlueTheme.js'
import orangeTheme from './themes/orangeTheme.js'
import redTheme from './themes/redTheme'
import vividOrangeTheme from './themes/vividOrangeTheme'

const getTheme = () => {
  switch (env.REACT_APP_THEME) {
    case 'green':
      return greenTheme
    case 'blue':
      return blueTheme
    case 'orange':
      return orangeTheme
    case 'red':
      return redTheme
    case 'vividOrange':
      return vividOrangeTheme
    case 'lightBlue':
      return lightBlueTheme
    default:
      return defaultTheme
  }
}

export default getTheme
