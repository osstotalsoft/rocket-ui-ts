import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const NotFoundText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: theme.typography.defaultFont.fontFamily
}))

export const NotFoundImage = styled('div')(() => ({
  marginBottom: '30px',
  marginTop: '50px',
  textAlign: 'center'
}))

export default NotFoundText
