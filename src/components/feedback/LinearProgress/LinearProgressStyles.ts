import { LinearProgress as MuiLinearProgress, Box } from '@mui/material'
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

type ContainerComponentProps = {
  global?: boolean
}

export const ComponentContainer = styled(Box, { shouldForwardProp: prop => prop !== 'global' })<ContainerComponentProps>(
  ({ global }) => ({
    display: 'flex',
    alignItems: 'center',
    ...(global && {
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      right: 0,
      overflow: 'hidden'
    })
  })
)

type LinearProgressContainerProps = {
  hasLabel?: boolean
}

export const LinearProgressContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'hasLabel'
})<LinearProgressContainerProps>(({ hasLabel, theme }) => ({
  width: '100%',
  ...(hasLabel && {
    marginRight: theme.spacing(1)
  })
}))

export default LinearProgress
