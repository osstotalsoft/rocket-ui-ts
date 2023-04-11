import { Palette, Theme } from '@mui/material'
import MuiCardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { Color, Variant } from '../types'

type StyledProps = { theme: Theme; variant: Variant; hasIcon: boolean; iconColor: Color }

const CardHeader = styled(MuiCardHeader, {
  shouldForwardProp: prop => !includes(prop, ['variant', 'hasIcon', 'iconColor'])
})(({ theme, variant = 'standard', hasIcon, iconColor = 'secondary' as Color & keyof Palette }: Partial<StyledProps>) => ({
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
