import MuiLinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import Typography from '../../dataDisplay/Typography'
import { includes } from 'ramda'

export const LinearProgress: any = styled(MuiLinearProgress, {
  shouldForwardProp: prop => !includes(prop, ['showLabel', 'labelProps'])
})(() => ({
  '&.MuiLinearProgress-bar': {
    height: '4px'
  },
  '&.MuiLinearProgress-root': {
    height: '4px',
    marginBottom: '20px',
    overflow: 'hidden'
  }
}))

export const Label = styled(Typography)(() => ({
  marginTop: '-21px'
}))

export default LinearProgress
