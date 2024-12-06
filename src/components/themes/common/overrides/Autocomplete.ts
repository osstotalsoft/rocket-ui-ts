import { Theme } from '@mui/material/styles'
import { CustomComponents } from '../../types'

export default function Autocomplete(theme: Theme): CustomComponents {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: (props: any) =>
          !props.ownerState.multiple && {
            '& .MuiAutocomplete-input': {
              width: 'fit-content',
              minWidth: 'fit-content'
            }
          },
        input: {
          display: 'flex',
          whiteSpace: 'nowrap'
        },
        noOptions: {
            ...theme.typography.defaultFont,
            padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
            color: 'textSecondary'
          },
        option: {
          div: {
            ...theme.typography.defaultFont,
            display: 'block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }
        }
      }
    }
  }
}
