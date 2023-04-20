import MuiTab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import type { Color } from './types'
import type { Palette } from '@mui/material'
import type { Theme } from '@mui/material'

const localTabsOverriddenProps = ['indicatorColor', 'color', 'selectedColor']
export const Tabs = styled(MuiTabs, { shouldForwardProp: prop => !includes(prop, localTabsOverriddenProps) })(
  ({ theme, color = 'secondary', indicatorColor= 'secondary' }: { theme?: Theme; color: Color & keyof Palette; indicatorColor: Color & keyof Palette }) => {
    const defaultFont = theme?.typography.defaultFont

    return {
      ...defaultFont,
      '& .MuiTabs-indicator': {
        borderRadius: '0.5rem',
        backgroundColor: color ? theme?.palette[color].main : theme?.palette[indicatorColor].main
      }
    }
  }
)

const localTabOverriddenProps = ['color', 'capitalize', 'selectedColor', 'gradient']
export const Tab = styled(MuiTab, { shouldForwardProp: prop => !includes(prop, localTabOverriddenProps) })(
  ({
    theme,
    selectedColor = 'secondary',
    color = 'secondary',
    capitalize,
    gradient
  }: {
    theme?: Theme
    selectedColor: Color & keyof Palette
    color: Color & keyof Palette
    capitalize?: boolean
    gradient?: boolean
  }) => {
    const defaultFont = theme?.typography.defaultFont
    return {
      ...defaultFont,
      maxWidth: 'unset',
      minWidth: 'unset',
      minHeight: 'unset',
      margin: 5,
      fontWeight: theme?.typography.fontWeightBold,
      ...(!capitalize && {
        textTransform: 'none'
      }),
      '&.MuiTab-root': {
        color: theme?.palette[color].main
      },
      '&.Mui-selected': {
        transition: 'all 500ms linear 1ms',
        marginBottom: 5,
        borderRadius: Number(theme?.shape.borderRadius) * 1.5,

        backgroundColor: color ? theme?.palette[color]?.main : 'transparent',
        color: color ? theme?.palette[color]?.contrastText : theme?.palette[selectedColor]?.main,
        ...(gradient && {
          background: theme?.palette.gradients[color]
        })
      }
    }
  }
)
