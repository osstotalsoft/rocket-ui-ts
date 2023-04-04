import defaultTheme from './defaultTheme'
import blueTheme from './blueTheme'
import greenTheme from './greenTheme'
import lightBlueTheme from './lightBlueTheme'
import orangeTheme from './orangeTheme'
import redTheme from './redTheme'
import vividOrangeTheme from './vividOrangeTheme'

const defaultCtx = { globals: { theme: 'default' } }
const getTheme = (context = defaultCtx) => {
  switch (context.globals.theme) {
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
