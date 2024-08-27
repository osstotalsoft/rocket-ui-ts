import { Theme } from '@mui/material'
import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { T, always, cond, equals, includes } from 'ramda'
import { ActionAlign } from '../types'

type StyledProps = { theme: Theme; filled: boolean; align: ActionAlign }

const contentAlignment = cond([
  [equals('left'), always('flex-start')],
  [equals('right'), always('flex-end')],
  [equals('center'), always('center')],
  [T, always('unset')]
])

const CardActions = styled(MuiCardActions, {
  shouldForwardProp: prop => !includes(prop, ['align', 'filled'])
})(({ theme, filled, align }: Partial<StyledProps>) => ({
  ...(filled && {
    backgroundColor: theme?.palette.grey[200],
    minHeight: '48px',
    padding: theme?.spacing(2, 3)
  }),
  justifyContent: contentAlignment(align)
}))

export default CardActions
