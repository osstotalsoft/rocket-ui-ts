import { Theme } from '@mui/material'
import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { Variant } from '../types'
import { Align } from './types'

type StyledProps = { theme: Theme; variant: Variant; align: Align }

const CardActions = styled(MuiCardActions, {
  shouldForwardProp: prop => !includes(prop, ['variant', 'align'])
})(({ theme, variant = 'standard', align = 'left' }: Partial<StyledProps>) => ({
  ...(variant === 'filled' && { backgroundColor: theme?.palette.grey[200], minHeight: '48px', padding: theme?.spacing(2, 3) }),
  justifyContent: align === 'left' ? 'flex-start' : 'flex-end'
}))

export default CardActions
