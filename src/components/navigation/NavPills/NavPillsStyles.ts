import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import type { Color, Gradient, TabsWrapperProps } from 'components'
import type { Palette, Theme } from '@mui/material'
import { Tabs as MuiTabs, Tab as MuiTab } from '@mui/material'

type ColorIndex = Color & keyof Palette
type GradientIndex = Gradient & keyof Palette

type StyledTabsProps = {
  theme?: Theme
  color?: Color
  colorGradient?: Gradient
  indicatorColor?: Color
}

const localTabsOverriddenProps = ['indicatorColor', 'color', 'colorGradient']
const StyledTabs = styled(MuiTabs, { shouldForwardProp: prop => !includes(prop, localTabsOverriddenProps) })(
  ({ theme, color, indicatorColor, colorGradient }: StyledTabsProps) => {
    const defaultFont = theme?.typography.defaultFont
    return {
      ...defaultFont,
      '& .MuiTabs-indicator': {
        borderRadius: '0.5rem',
        backgroundColor: colorGradient
          ? theme?.palette[colorGradient as GradientIndex]?.main
          : color
          ? theme?.palette[color as ColorIndex]?.main
          : theme?.palette[indicatorColor as ColorIndex]?.main
      }
    }
  }
)
export const Tabs = StyledTabs as typeof StyledTabs & React.FC<TabsWrapperProps>

type StyledTabProps = {
  theme?: Theme
  color: Color
  colorGradient?: Gradient
  selectedColor: Color
  capitalize?: boolean
}

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
        color: colorGradient
          ? theme?.palette[colorGradient as GradientIndex]?.main
          : theme?.palette[color as ColorIndex]?.main
      },
      '&.Mui-selected': {
        transition: 'all 500ms linear 1ms',
        marginBottom: 5,
        borderRadius: Number(theme?.shape.borderRadius) * 1.5,
        ...(colorGradient
          ? {
              background: theme?.palette.gradients[colorGradient as GradientIndex],
              color: theme?.palette[colorGradient as GradientIndex]?.contrastText
            }
          : {
              backgroundColor: color ? theme?.palette[color as ColorIndex]?.main : 'transparent',
              color: color
                ? theme?.palette[color as ColorIndex]?.contrastText
                : theme?.palette[selectedColor as ColorIndex]?.main
            })
      }
    }
  }
)
