import { Theme } from '@mui/material'
import BaseCard from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { CardColor } from './types'
import defaultTheme from 'components/themes/defaultTheme'

export const iconStyle = {
  color: '#FFFFFF',
  width: '30px',
  height: '30px',
  margin: 'auto',
  padding: '2px'
}

const getThemeColor = ({ palette: { gradients, white, primary } }: Theme, color?: CardColor) => {
  switch (color) {
    case 'rose':
      return { background: gradients.rose, color: white.main }
    case 'success':
      return { background: gradients.success }
    case 'error':
      return { background: gradients.error }
    case 'primary':
      return { background: primary.main, color: white.main }
    case 'warning':
      return { background: gradients.warning }
    case 'info':
      return { background: gradients.info }
    default:
      return { color: primary.main }
  }
}

type StyledProps = { theme: Theme; color: CardColor; hasIcon: boolean }

const Card = styled(BaseCard, {
  shouldForwardProp: prop => !includes(prop, ['hasIcon', 'iconColor'])
})(({ theme, color, hasIcon }: Partial<StyledProps>) => {
  return {
    ...getThemeColor(theme || defaultTheme, color),
    ...(hasIcon && {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
      background: '#fff',
      overflow: 'visible'
    })
  }
})

export default Card
