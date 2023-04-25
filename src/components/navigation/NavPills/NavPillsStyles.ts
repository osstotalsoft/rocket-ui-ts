import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import type { Color, Gradient } from 'components'
import type { Palette, Theme } from '@mui/material'
import { Tabs as MuiTabs, Tab as MuiTab } from '@mui/material'
import { ColorGradients } from 'components/themes/types'

type StyledTabsProps = {
  theme?: Theme
  color?: Color & keyof Palette
  indicatorColor?: Color & keyof Palette
}

const localTabsOverriddenProps = ['indicatorColor', 'color']
export const Tabs = styled(MuiTabs, { shouldForwardProp: prop => !includes(prop, localTabsOverriddenProps) })(
  ({ theme, color, indicatorColor }: StyledTabsProps) => {
    const defaultFont = theme?.typography.defaultFont
    debugger

    return {
      ...defaultFont,
      '& .MuiTabs-indicator': {
        borderRadius: '0.5rem',
        backgroundColor: color ? theme?.palette[color]?.main : theme?.palette[indicatorColor as Color & keyof Palette]?.main
      }
    }
  }
)

type StyledTabProps = {
  theme?: Theme
  color: Color
  colorGradient?: Gradient
  selectedColor: Color
  capitalize?: boolean
}

type ColorIndex = Color & keyof Palette

const localTabOverriddenProps = ['color', 'capitalize', 'selectedColor', 'colorGradient']
export const Tab = styled(MuiTab, { shouldForwardProp: prop => !includes(prop, localTabOverriddenProps) })(
  ({ theme, color, colorGradient, selectedColor, capitalize }: Partial<StyledTabProps>) => {
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
        color: theme?.palette[color as ColorIndex]?.main
      },
      '&.Mui-selected': {
        transition: 'all 500ms linear 1ms',
        marginBottom: 5,
        borderRadius: Number(theme?.shape.borderRadius) * 1.5,

        backgroundColor: color ? theme?.palette[color as ColorIndex]?.main : 'transparent',
        color: color ? theme?.palette[color as ColorIndex]?.contrastText : theme?.palette[selectedColor as ColorIndex]?.main,
        ...(colorGradient && {
          background: theme?.palette.gradients[colorGradient as keyof ColorGradients]
        })
      }
    }
  }
)
