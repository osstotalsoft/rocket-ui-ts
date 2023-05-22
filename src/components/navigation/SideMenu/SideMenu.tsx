import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SideMenuWrapper, SideMenuButton, SideMenuContent } from './SideMenuStyles'
import PropTypes from 'prop-types'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { SideMenuProps } from './types'

/**
 * A side menu displays a list of choices on a temporary surface. It appears when the user interacts with a floating button, positioned by default on the right side of your screen.
 * 
 * Inherits Icon Button props.
 */
const SideMenu: React.FC<SideMenuProps> = ({ icon, content, buttonProps, contentProps, iconProps }) => {
  const [show, setShow] = useState(false)
  const sideMenuRef = useRef<any>()

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef?.current?.contains(e.target)) {
      setShow(false)
    }
  }, [])

  const handleButtonClick = useCallback(() => {
    setShow(current => !current)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  const Icon = icon ? icon : MenuOpenIcon

  return (
    <SideMenuWrapper ref={sideMenuRef}>
      <SideMenuButton onClick={handleButtonClick} {...buttonProps}>
        <Icon fontSize="small" style={{ color: 'white', height: '100%' }} {...iconProps} />
      </SideMenuButton>
      <SideMenuContent show={show} {...contentProps}>
        {content}
      </SideMenuContent>
    </SideMenuWrapper>
  )
}

SideMenu.propTypes = {
  /**
   * Content of the menu
   */
  content: PropTypes.node,
  /**
   * @default MenuOpenIcon
   * Icon to be displayed on the button
   */
  icon: PropTypes.any,
  /**
   * Props applied to the button
   */
  buttonProps: PropTypes.object,
  /**
   * Props applied to the content
   */
  contentProps: PropTypes.object,
  /**
   * Props applied to the icon
   */
  iconProps: PropTypes.object
}

export default SideMenu
