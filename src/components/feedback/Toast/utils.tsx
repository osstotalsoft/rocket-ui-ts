import React from 'react'
import { TypeOptions } from 'react-toastify'
import { IconButton, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import Typography from 'components/dataDisplay/Typography'
import CloseIcon from '@mui/icons-material/Close'
import { cond, equals, always, T, includes } from 'ramda'

type MyIconProps = {
  myVariant?: TypeOptions
}

const MyIcon = ({ myVariant }: MyIconProps) => {
  const iconStyle = {
    position: 'sticky',
    top: '50%',
    alignItems: 'center',
    display: 'flex',
    margin: '0px 6px 0px 0px'
  }

  const renderIcon = cond([
    [equals('error'), always(<ErrorIcon sx={iconStyle} />)],
    [equals('info'), always(<InfoIcon sx={iconStyle} />)],
    [equals('success'), always(<CheckCircleIcon sx={iconStyle} />)],
    [equals('warning'), always(<WarningIcon sx={iconStyle} />)],
    [T, always(null)]
  ])

  return renderIcon(myVariant)
}

const toastStyle = {
  maxHeight: '500px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '6px'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px #ffffff3d',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: ' #ffffffba',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#fff'
  }
}

const MyToast = (props: any) => {
  const { message, closeToast, variant, actions } = props

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={toastStyle}>
        <MyIcon myVariant={variant} />
        <Typography sx={{ maxHeight: '450px' }}>{message}</Typography>
        {includes(variant, ['success', 'info', 'error', 'warning']) ? (
          <IconButton sx={{ position: 'sticky', top: '50%', padding: 0, margin: '0px 6px' }} onClick={closeToast}>
            <CloseIcon fontSize="small" htmlColor="white" />
          </IconButton>
        ) : (
          <IconButton sx={{ position: 'sticky', top: '50%', padding: 0, margin: '0px 6px' }} onClick={closeToast}>
            <CloseIcon fontSize="small" color="primary" />
          </IconButton>
        )}
      </Stack>
      {actions}
    </>
  )
}

export default MyToast
