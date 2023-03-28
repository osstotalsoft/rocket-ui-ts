// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Palette, PaletteColor, PaletteOptions, SimplePaletteColorOptions, ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { CSSProperties } from 'react'

export interface TypographyCustomOptions {}

export interface CreateThemeOptions extends Omit<ThemeOptions, 'typography'> {
  typography: TypographyCustomOptions | TypographyOptions | ((palette: Palette) => TypographyOptions)
}

export interface TypographyCustomOptions extends TypographyOptions {
  defaultFont: CSSProperties
  useNextVariants: boolean
  body: CSSProperties
}

export interface TypeCustomBackground {
  main?: string
}

export type SideMenuOptions = CSSProperties & {
  bgColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  bgOpacity?: string
}

export interface PaletteColorCustomOptions extends SimplePaletteColorOptions {
  lighter: string
  light: string
  dark: string
  darker: string
  rgba: string
  contrastText: string
}

export interface PaletteThemeOptions {
  primary: PaletteColorCustomOptions
  secondary: PaletteColorCustomOptions
  sideMenu: SideMenuOptions
  background: TypeCustomBackground
}

export interface PaletteCustomOptions
  extends Omit<PaletteOptions, 'background' | 'primary' | 'secondary'>,
    PaletteThemeOptions {
  info: PaletteColorCustomOptions
  success: PaletteColorCustomOptions
  warning: PaletteColorCustomOptions
  error: PaletteColorCustomOptions
  danger: PaletteColorCustomOptions
}

export interface PaletteCustomColor extends PaletteColor {
  lighter: string
  light: string
  dark: string
  darker: string
  rgba: string
  contrastText: string
}
