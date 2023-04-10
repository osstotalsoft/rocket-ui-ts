import { styled } from '@mui/material/styles'
import Typography from '../Typography'

const ExpandAction = styled(Typography)(({ theme }) => ({
  color: theme?.palette.link.main,
  cursor: 'pointer'
}))

export default ExpandAction
