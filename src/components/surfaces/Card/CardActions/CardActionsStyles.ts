import { Theme } from '@mui/material'
import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { ActionAlign } from '../types'

type StyledProps = { theme: Theme; filled: boolean; align: ActionAlign }

const CardActions = styled(MuiCardActions, {
  shouldForwardProp: prop => !includes(prop, ['align', 'filled'])
})(({ theme, filled, align = 'left' }: Partial<StyledProps>) => ({
  ...(filled && {
    backgroundColor: theme?.palette.grey[200],
    minHeight: '48px',
    padding: theme?.spacing(2, 3)
  }),
  justifyContent: align === 'left' ? 'flex-start' : 'flex-end'
}))

export default CardActions
