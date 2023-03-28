import Card from './Card'
import Button from './Button'
import Divider from './Divider'

const componentsOverride = (theme: any) => ({ ...Card(theme), ...Button(theme), ...Divider() })
export default componentsOverride
