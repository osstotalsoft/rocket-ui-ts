import MuiCardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

const CardHeader = styled(MuiCardHeader, {
  shouldForwardProp: prop => !includes(prop, ['variant', 'hasIcon', 'iconColor'])
})(({ theme, variant = 'standard', hasIcon, iconColor = 'secondary' }: any) => ({
  ['&.MuiCardHeader-root']: {
    ...(variant === 'filled' && { backgroundColor: theme?.palette.grey[200], minHeight: '48px' })
  },
  ['& .MuiCardHeader-avatar']: {
    ...(hasIcon && {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.75rem',
      background: `linear-gradient(195deg, ${theme?.palette[iconColor].light}, ${theme?.palette[iconColor].main})`,
      position: 'absolute',
      top: '-20px'
    })
  },
  ['& .MuiCardHeader-content']: {
    ...(hasIcon && {
      paddingLeft: '80px'
    })
  },
  ['& .MuiCardHeader-action']: {
    display: 'flex'
  }
}))

export default CardHeader
