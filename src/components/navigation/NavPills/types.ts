// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { TabsProps as MuiTabsProps } from '@mui/material'
import { Color, Gradient } from 'components/types'
import { BoxProps } from '@mui/system'
import { ReactNode } from 'react'

export type Orientation = 'horizontal' | 'vertical'
export type Variant = 'scrollable' | 'fullWidth' | 'standard'

export interface NavPillsProps {
  active?: number
  onChange?: any
  tabs: {
    label?: string | ReactNode
    icon?: any
    content?: string | null
    props?: object | null
  }[]
  tabProps?: Object
  actions?: ReactNode[]
  color?: Color
  colorGradient?: Gradient
  selectedColor?: Color
  indicatorColor?: Color
  capitalize?: boolean
  variant?: Variant
  orientation?: Orientation
  fullWidth?: boolean
}

export interface TabPanelProps extends BoxProps {
  children?: ReactNode | ReactNode[]
  active: number
  index: number
}

export interface OrientationWrapperProps {
  children?: ReactNode
  actions?: ReactNode[]
  orientation?: Orientation
}

export interface TabsWrapperProps extends Omit<MuiTabsProps, 'color' | 'indicatorColor'> {
  color?: Color
  indicatorColor?: Color
  actions?: ReactNode[]
  orientation?: Orientation
  fullWidth?: boolean
}
