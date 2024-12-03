import Card from './Card'
import Button from './Button'
import Divider from './Divider'
import TextField from './TextField'
import { Theme } from '@mui/material'
import { CustomComponents } from '../../types'
import Autocomplete from './Autocomplete'

const componentsOverride = (theme: Theme): CustomComponents => ({
  ...Card(theme),
  ...Button(theme),
  ...Divider(),
  ...TextField(theme),
  ...Autocomplete(theme)
})
export default componentsOverride
