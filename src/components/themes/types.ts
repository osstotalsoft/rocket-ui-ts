// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import {
  Components,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  ThemeOptions
} from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { CSSProperties } from 'react'

declare module '@mui/material' {
  export interface Theme {
    customShadows: CustomShadows
    palette: Palette
  }

  export interface Palette {
    sideMenu: SideMenu
    rose: PaletteColor
    white: PaletteColor
    dark: PaletteColor
    black: Partial<PaletteColor>
    link: Partial<PaletteColor>
    default: PaletteColor
    grey: Color
  }

  export interface PaletteOptions {
    sideMenu: SideMenuOptions
    rose?: PaletteColorOptions
    white?: PaletteColorOptions
    dark?: PaletteColorOptions
    black?: Partial<SimplePaletteColorOptions>
    link?: Partial<SimplePaletteColorOptions>
    default?: PaletteColorOptions
    createGradient?: (colorsArray: string[]) => string
    gradients?: ColorGradients
    darkGradients?: ColorGradients
  }

  export interface SimplePaletteColorOptions {
    lighter?: string
    darker?: string
    rgba?: string
  }

  export interface Color {
    500_8: string
    500_12: string
    500_16: string
    500_24: string
    500_32: string
    500_48: string
    500_56: string
    500_80: string
    main: string
  }
}

export interface CustomComponents extends Components {
  MuiButton?: {
    defaultProps?: ComponentsProps['MuiButton']
    styleOverrides?: ComponentsOverrides['MuiButton'] & { sizeTiny: unknown }
    variants?: ComponentsVariants['MuiButton']
  }
}

export type CustomShadows = {
  z1: string
  z8: string
  z12: string
  z16: string
  z20: string
  z24: string
  primary: string
  secondary: string
  info: string
  success: string
  warning: string
  error: string
}

export type ColorGradients = {
  primary: string
  secondary: string
  rose: string
  error: string
  warning: string
  info: string
  success: string
  dark: string
  default: string
}

export interface TypographyCustomOptions extends TypographyOptions {
  defaultFont: CSSProperties
  useNextVariants: boolean
  body: CSSProperties
}

export interface CreateThemeOptions extends Omit<ThemeOptions, 'typography'> {
  typography: TypographyCustomOptions | TypographyOptions | ((palette: Palette) => TypographyOptions)
}

export type SideMenuOptions = CSSProperties & {
  bgColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  bgOpacity?: string
}

export type SideMenu = CSSProperties & {
  bgColor: string
  hoverBgColor: string
  hoverTextColor: string
  bgOpacity: string
}
