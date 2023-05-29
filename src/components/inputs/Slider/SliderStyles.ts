import MuiSlider from '@mui/material/Slider'
import MuiFormControl from '@mui/material/FormControl'
import MuiFormHelperText from '@mui/material/FormHelperText'
import { styled } from '@mui/material/styles'
import TextField from '../TextField'

export const StyledSlider: any = styled(MuiSlider)(() => ({
  ['&.MuiSlider-root']: {
    top: '-1px',
    margin: 0,
    ['& .MuiSlider-markLabel']: {
      top: '20px',
      fontSize: '14px',
      lineHeight: '1.5em'
    }
  }
}))

export const StyledTextField = styled(TextField)(() => ({
  margin: '-14px 0'
}))

export const FormControl = styled(MuiFormControl)(() => ({
  overflow: 'visible', // fix for mobile horizontal scroll
  marginLeft: 0
}))

export const FormHelperText = styled(MuiFormHelperText)(() => ({
  marginLeft: 0
}))
