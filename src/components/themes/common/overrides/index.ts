import Card from './Card'
import Button from './Button'
import Divider from './Divider'
import { Theme } from '@mui/material'
import { CustomComponents } from '../../types'

const componentsOverride = (theme: Theme): CustomComponents => ({
  ...Card(theme),
  ...Button(theme),
  ...Divider()
})
export default componentsOverride
