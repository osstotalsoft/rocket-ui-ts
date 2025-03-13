import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogTitle from '@mui/material/DialogTitle'
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material/styles'

export const justifyRight = {
  position: 'absolute',
  top: 'auto',
  right: 14
}

export const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  fontFamily: theme.typography.defaultFont.fontFamily,
  fontSize: theme.typography.defaultFont.fontSize
}))

export const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.defaultFont.fontFamily,
  padding: 0
}))

export const TransparentBackdrop = styled(Backdrop)(() => ({
  backgroundColor: 'transparent'
}))
