import blueTheme from './blueTheme.js'
import defaultTheme from './defaultTheme.js'
import greenTheme from './greenTheme.js'
import lightBlueTheme from './lightBlueTheme.js'
import orangeTheme from './orangeTheme.js'
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
