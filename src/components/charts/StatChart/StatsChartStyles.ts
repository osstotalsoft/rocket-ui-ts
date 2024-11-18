import MuiCardContent from '@mui/material/CardContent'
import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { Card, CardHeader } from '../../surfaces/Card'
import Typography from '../../dataDisplay/Typography'
import { Gradient } from '../../types'

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '10px',
  color: theme.palette.primary.main,
  background: '#fff',
  overflow: 'visible'
}))

export const StyledCardHeader = styled(CardHeader)(({ theme, color }) => ({
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '0',
  minHeight: '160px',
  ...theme.typography.defaultFont,
  position: 'relative',
  zIndex: 3,
  transition: 'all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)',
  transform: 'translate3d(0, -10px, 0)',
  background: theme.palette.gradients[color as Gradient],
  ['& .MuiCardHeader-content']: {
    maxWidth: '100%'
  }
}))

export const CardContent = styled(MuiCardContent)(() => ({
  padding: '15px 20px',
  position: 'relative'
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: '5px',
  ...theme.typography.defaultFont,
  fontSize: '1.175em'
}))

export const CardCategory = styled(Typography)(({ theme }) => ({
  marginBottom: '0',
  color: theme.palette.grey[500],
  ...theme.typography.defaultFont,
  fontSize: '0.9em'
}))

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  margin: '0 20px 10px',
  paddingTop: '10px',
  height: 'auto',
  ...theme.typography.defaultFont,
  padding: '10px 0 0 0',
  justifyContent: 'space-between'
}))

export const CardStatContainer = styled('div')(({ theme }) => ({
  lineHeight: '22px',
  color: theme.palette.grey[500],
  fontSize: '12px',
  display: 'inline-block',
  margin: '0'
}))

export const StatAction = styled(MuiCardActions)(() => ({
  padding: '8px'
}))

export const statIconStyle = {
  position: 'relative',
  top: '4px',
  width: '16px',
  height: '16px',
  marginRight: '5px'
} as React.CSSProperties
