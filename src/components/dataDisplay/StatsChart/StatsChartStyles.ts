import MuiCardContent from '@mui/material/CardContent'
import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { Gradient } from 'components/types'
import { Card, CardHeader } from '../../surfaces/Card'
import Typography from '../Typography'

export const StyledCard = styled(Card)(() => ({
  display: 'inline-block',
  position: 'relative',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '10px',
  overflow: 'visible'
}))

export const StyledCardHeader = styled(CardHeader)(({ theme, color }) => ({
  margin: '-20px 20px 0',
  ...theme.typography.defaultFont,
  position: 'relative',
  background: theme.palette.gradients[color as Gradient]
}))

export const CardContent = styled(MuiCardContent)(() => ({
  padding: '15px 20px',
  position: 'relative'
}))

export const CardTitle = styled(Typography)(() => ({
  marginBottom: '5px',
  fontSize: '1.175em'
}))

export const CardCategory = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: '0.9em'
}))

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  margin: '0 20px 10px',
  ...theme.typography.defaultFont,
  padding: '10px 0 10px 0',
  justifyContent: 'space-between'
}))

export const CardStatContainer = styled('div')(({ theme }) => ({
  lineHeight: '15px',
  color: theme.palette.grey[500],
  fontSize: '12px',
  display: 'inline-block',
}))

export const StatAction = styled(MuiCardActions)(() => ({
  padding: '8px'
}))

export const statIconStyle = {
  position: 'relative',
  top: '6px',
  width: '20px',
  height: '20px',
  marginRight: '5px'
} as React.CSSProperties
