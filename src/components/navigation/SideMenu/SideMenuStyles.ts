import { Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import IconButton from '../../buttons/IconButton'

export const SideMenuWrapper = styled('div')(() => ({
  position: 'fixed',
  top: '180px',
  right: 0
}))

export const SideMenuButton = styled(IconButton)(() => ({
  position: 'fixed',
  top: '180px',
  right: 0,
  width: '44px',
  height: '38px',
  borderRadius: '8px 0 0 8px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
}))

export const SideMenuContent = styled('div', { shouldForwardProp: prop => prop !== 'show' })(
  ({ show, theme }: { show: boolean; theme?: Theme }) => ({
    position: 'absolute',
    top: '8px',
    right: '60px',
    display: show ? 'block' : 'none',
    minWidth: '160px',
    minHeight: '80px',
    backgroundColor: '#fff',
    opacity: show ? 1 : 0,
    border: `1px solid ${theme?.palette?.grey?.[500]}`,
    borderRadius: '4px',
    WebkitBoxShadow: theme?.customShadows?.z1,
    WebkitTransform: 'translateY(-15%)',
    transformOrigin: '0 0',
    margin: '5px',
    padding: '10px',
    '&:before, &:after': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      top: '8%'
    },
    '&:before': {
      borderBottom: '16px solid transparent',
      borderLeft: `16px solid ${theme?.palette?.grey?.[500]}`,
      borderTop: '16px solid transparent',
      right: '-17px'
    },
    '&:after': {
      borderBottom: '16px solid transparent',
      borderLeft: '16px solid #fff',
      borderTop: '16px solid transparent',
      right: '-16px'
    }
  })
)
