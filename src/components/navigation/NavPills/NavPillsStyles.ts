import MuiTab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import type { Color } from './types'
import type { Palette } from '@mui/material'
import type { Theme } from '@mui/material'

const localTabsOverriddenProps = ['indicatorColor', 'color', 'selectedColor']
export const Tabs = styled(MuiTabs, { shouldForwardProp: prop => !includes(prop, localTabsOverriddenProps) })(
  ({ theme, color, indicatorColor }: { theme: Theme; color?: Color; indicatorColor?: Color }) => {
    const defaultFont = theme.typography.defaultFont
    type PaletteCollor = keyof Palette

    return {
      ...defaultFont,
      '& .MuiTabs-indicator': {
        borderRadius: '0.5rem',
        backgroundColor: color ? theme?.palette[color as PaletteCollor].main : theme?.palette[indicatorColor as PaletteCollor].main
      }
    }
  }
)

const localTabOverriddenProps = ['color', 'capitalize', 'selectedColor', 'gradient']
export const Tab = styled(MuiTab, { shouldForwardProp: prop => !includes(prop, localTabOverriddenProps) })(
  ({
    theme,
    selectedColor,
    color,
    capitalize,
    gradient
  }: {
    theme?: Theme
    selectedColor: Color
    color?: Color
    capitalize?: boolean
    gradient?: boolean
  }) => {
    const defaultFont = theme?.typography.defaultFont
    const defaultTheme = theme ?? {} as Theme
    type GradientColor = keyof typeof defaultTheme.palette.gradients
    type PaletteCollor = keyof typeof defaultTheme.palette
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
        color: theme?.palette[color as PaletteCollor]?.main
      },
      '&.Mui-selected': {
        transition: 'all 500ms linear 1ms',
        marginBottom: 5,
        borderRadius: Number(theme?.shape.borderRadius) * 1.5,

        backgroundColor: color ? theme?.palette[color as PaletteCollor]?.main : 'transparent',
        color: color ? theme?.palette[color as PaletteCollor]?.contrastText : theme?.palette[selectedColor as PaletteCollor]?.main,
        ...(gradient && {
          background: theme?.palette.gradients[color as GradientColor]
        })
      }
    }
  }
)
