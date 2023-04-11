import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

const CardActions = styled(MuiCardActions, {
  shouldForwardProp: prop => !includes(prop, ['variant', 'align'])
})(({ theme, variant = 'standard', align = 'left' }: any) => ({
  ...(variant === 'filled' && { backgroundColor: theme.palette.grey[200], minHeight: '48px', padding: theme.spacing(2, 3) }),
  justifyContent: align === 'left' ? 'flex-start' : 'flex-end'
}))

export default CardActions
