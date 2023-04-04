import BaseTypography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

const Typography = styled(BaseTypography)(({ theme, variant }) => ({
  fontFamily: theme.typography.fontFamily,
  textTransform: includes(variant, ['overline', 'button']) ? 'uppercase' : 'none'
}))

export default Typography
