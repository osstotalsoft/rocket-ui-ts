import { SvgIconComponent } from '@mui/icons-material'
import { SvgIconProps } from '@mui/material'
import { IconButtonProps } from 'components/buttons/IconButton'
import { HTMLAttributes } from 'react'

export interface SideMenuProps {
  /**
   * Content of the menu
   */
  content?: React.ReactNode
  /**
   * @default MenuOpenIcon
   * Icon to be displayed on the button
   */
  icon?: SvgIconComponent
  /**
   * Props applied to the button
   */
  buttonProps?: IconButtonProps
  /**
   * Props applied to the content
   */
  contentProps?: HTMLAttributes<HTMLDivElement>
  /**
   * Props applied to the icon
   */
  iconProps?: SvgIconProps
}
