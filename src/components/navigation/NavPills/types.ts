// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { TabProps as MuiTabProps, TabsProps as MuiTabsProps } from '@mui/material'
import { Color, Gradient } from 'components/types'
import { BoxProps } from '@mui/system'
import { ReactNode } from 'react'

export type Orientation = 'horizontal' | 'vertical'
export type TabsVariant = 'scrollable' | 'fullWidth' | 'standard'

export interface TabsWrapperProps extends Omit<MuiTabsProps, 'textColor' | 'color' | 'indicatorColor'> {
  children?: ReactNode
  actions?: ReactNode[]
  fullWidth?: boolean
  orientation?: Orientation
  indicatorColor?: Color
  color?: Color
}

export interface TabProps extends Omit<MuiTabProps, 'color' | 'selectedColor'> {
  selectedColor?: Color
  color?: Color
}

export interface NavPillsProps extends TabsWrapperProps {
  /**
   * @default 0
   * Index of the default active pill
   */
  active?: number
  /**
   * Handle tab change event manually
   * Overrides the default onChange implementation
   * @param {object} event The event source of the callback.
   * @param {number} value We default to the index of the child (number)
   */
  onChange?: (event: React.SyntheticEvent, value: number) => void
  /**
   * The content of the component
   */
  tabs: {
    /**
     * 	The label element.
     */
    label?: ReactNode
    /**
     * The icon to display in a tab.
     */
    icon?: string | React.ReactElement
    /**
     * Tha Tab content
     */
    content?: React.ReactNode
    /**
     * Custom tab properties that apply to the current Tab element
     */
    props?: Omit<TabProps, 'icon' | 'label'>
  }[]
  /**
   * Custom tab properties that apply to all the Tab elements
   */
  tabProps?: Omit<TabProps, 'icon' | 'label'>
  /**
     * @default "scrollable"
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
  variant?: 'scrollable' | 'fullWidth' | 'standard'
  /**
   * The component orientation (layout flow direction)
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * @default "primary"
   * Determines the color of the indicator.
   */
  indicatorColor?: Color
  /**
   * @default "primary"
   * Determines the color of the selected Tab.
   */
  selectedColor?: Color
  /**
   * Indicates the background color of the selected Tab and the indicator color
   * Precedes 'indicatorColor' and 'selectedColor' properties
   */
  color?: Color
  /**
   * Indicates the gradient background available for most of the colors of the selected Tab and the indicator color
   */
  colorGradient?: Gradient
  /**
   * @default false
   * If true, tab text is capitalized.
   */
  capitalize?: boolean
  /**
   * @default false
   * If true, it maximize width to 100%
   * Default value sets width to 'fit-content'
   */
  fullWidth?: boolean
  /**
   * A list of additional action components
   * e.g. a [<Button />, <Button />]
   */
  actions?: string[] | React.ReactElement[]
}

export interface TabPanelProps extends BoxProps {
  children?: ReactNode
  active: number
  index: number
}

export interface OrientationWrapperProps {
  children?: ReactNode
  actions?: ReactNode[]
  orientation?: Orientation
}
