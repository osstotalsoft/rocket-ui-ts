import MuiAutocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'
import Typography from '../../dataDisplay/Typography'
import { Theme } from '@mui/material'
import { AutocompleteProps } from './types'
import { MUIStyledCommonProps } from '@mui/system'

const PREFIX = 'StyledAutocomplete'
export const classes = {
  noOptionsMessage: `${PREFIX}-noOptionsMessage`,
  input: `${PREFIX}-input`
}

const colorTransformations: Record<string, string> = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
}

const transformDeprecatedColors = (color: string) => {
  return colorTransformations[color] || color
}

const matchThemeColor = (theme: Theme, color: string) => {
  const { primary, textPrimary, secondary, textSecondary, error } = colorTransformations

  switch (color) {
    case primary:
      return theme.palette.primary.main
    case secondary:
      return theme.palette.secondary.main
    case textPrimary:
      return theme.palette.text.primary
    case textSecondary:
      return theme.palette.text.secondary
    case error:
      return theme.palette.error.main
    default:
      return undefined
  }
}

export const Autocomplete = styled(MuiAutocomplete, { shouldForwardProp: prop => prop !== 'typographyContentColor' })(
  ({ theme, typographyContentColor, multiple }: AutocompleteProps<any, false, false, false> & MUIStyledCommonProps<Theme> & { multiple: boolean }) => {
    const color = matchThemeColor(theme, transformDeprecatedColors(typographyContentColor))

    return {
      ...(!multiple && {['& .MuiTextField-root .MuiAutocomplete-inputRoot .MuiAutocomplete-input']: {
        width: 'fit-content',
        minWidth: 'fit-content'
      }}),
      [`& .${classes.input}`]: {
        display: 'flex',
        whiteSpace: 'nowrap',
        '&::placeholder': {
          color
        }
      },
      [`& .${classes.noOptionsMessage}`]: {
        ...theme.typography.defaultFont,
        padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
        color: 'red'
      }
    }
  }
)

export const Option = styled('div')(({ theme }) => ({
  ...theme.typography.defaultFont,
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%'
}))

export const NoOptionsText = styled(Typography)(({ theme }) => ({
  ...theme.typography.defaultFont,
  padding: `${theme.spacing()}px ${theme.spacing(2)}px`
}))
