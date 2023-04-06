import { styled } from '@mui/material/styles'
import Typography from '../Typography'

declare module '@mui/material/styles' {
  export interface Palette {
    link: { main?: string }
  }
}

const ExpandAction = styled(Typography)(({ theme }) => ({
  color: theme?.palette.link.main,
  cursor: 'pointer'
}))

export default ExpandAction
