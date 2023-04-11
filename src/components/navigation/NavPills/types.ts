// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { BoxProps } from '@mui/system'

export type Orientation = 'horizontal' | 'vertical'
export type Variant = 'scrollable' | 'fullWidth' | 'standard'
export type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'rose'
  | 'default'
  | 'white'
  | 'dark'
  | 'transparent'
  | 'inherit'

export interface TabPanelProps extends BoxProps {
  children?: React.ReactNode
  active: number
  index: number
}

export interface OrientationWrapperProps {
  children?: React.ReactNode
  actions?: Array<React.ReactNode>
  orientation?: Orientation
}

export interface TabsWrapperProps {
  children?: React.ReactNode
  actions?: Array<React.ReactNode>
  orientation?: Orientation
  fullWidth?: boolean
  [x: string]: any
}

export interface NavPillsProps {
  active?: number
  onChange?: any
  tabs: Array<any>
  tabProps?: Object
  actions?: Array<React.ReactNode>
  selectedColor?: Color
  capitalize?: boolean
  gradient?: boolean
  indicatorColor?: Color
  color?: Color
  variant?: Variant
  orientation?: Orientation
  fullWidth?: boolean
}

export interface TabStyleProps {
  theme: any //should be Theme type but typography if of type unknown
  selectedColor: Color
  color: Color
  capitalize: boolean
  gradient: boolean
  [x: string]: any
}
