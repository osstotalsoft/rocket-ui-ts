import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Tab } from './NavPillsStyles'
import type { NavPillsProps } from './types'
import TabPanel from './components/TabPanel'
import OrientationWrapper from './components/OrientationWrapper'
import TabsWrapper from './components/TabsWrapper'

/**
 * Nav pills  organize and allow navigation between groups of content that are related and at the same level of hierarchy.
 */
const NavPills: React.FC<NavPillsProps> = ({
  active = 0,
  onChange,
  tabs,
  tabProps,
  actions,
  capitalize,
  variant = 'scrollable',
  orientation = 'horizontal',
  color = 'transparent',
  colorGradient,
  indicatorColor = 'secondary',
  selectedColor = 'secondary',
  ...other
}) => {
  const [selfActive, setSelfActive] = useState(0)

  const handleChange = useCallback((_event: React.SyntheticEvent, newValue: number) => {
    setSelfActive(newValue)
  }, [])

  return (
    <OrientationWrapper orientation={orientation} actions={actions}>
      <TabsWrapper
        value={onChange ? active : selfActive}
        onChange={onChange ?? handleChange}
        actions={actions}
        aria-label="tabs"
        color={color}
        indicatorColor={indicatorColor}
        variant={variant}
        orientation={orientation}
        {...other}
      >
        {tabs.map((tab, index: number) => (
          <Tab
            key={`simple-tab-${index}`}
            color={color}
            colorGradient={colorGradient}
            selectedColor={selectedColor}
            capitalize={capitalize}
            {...tabProps}
            label={tab.label}
            icon={tab.icon}
            {...tab.props}
          />
        ))}
      </TabsWrapper>
      {tabs.map(({ content }, index: number) => (
        <TabPanel key={`tab-panel-${index}`} index={index} active={onChange ? active : selfActive}>
          {content}
        </TabPanel>
      ))}
    </OrientationWrapper>
  )
}

NavPills.propTypes = {
  /**
   * Index of the default active pill
   */
  active: PropTypes.number,
  /**
   * Handle tab change event manually
   *
   * Overrides the default onChange implementation
   * @param {object} event The event source of the callback.
   * @param {number} value We default to the index of the child (number)
   */
  onChange: PropTypes.func,
  /**
   * The content of the component
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      content: PropTypes.string,
      props: PropTypes.object
    }).isRequired
  ).isRequired,
  /**
   * Custom tab properties that apply to all the Tab elements
   */
  tabProps: PropTypes.object,
  /**
   * @default 'scrollable'
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
  variant: PropTypes.oneOf(['scrollable', 'fullWidth', 'standard']),
  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * @default "primary"
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'default',
    'white',
    'dark',
    'transparent'
  ]),
  /**
   * @default "primary"
   * Determines the color of the Tab.
   */
  selectedColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'default',
    'white',
    'dark',
    'transparent'
  ]),
  /**
   * Indicates the background color of the selected Tab and the indicator color
   * Precedes 'indicatorColor' and 'selectedColor' properties
   * @default "secondary"
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'default',
    'white',
    'dark',
    'transparent'
  ]),
  /**
   * If true, a gradient background is applied.
   */
  colorGradient: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'default', 'dark']),
  /**
   * @default false
   * If true, it maximize width to 100%
   * Default value sets width to 'fit-content'
   */
  fullWidth: PropTypes.bool,
  /**
   * @default false
   * If true, tab text is capitalized.
   */
  capitalize: PropTypes.bool,
  /**
   * A list of additional action components
   * e.g. a [<Button />, <Button />]
   */
  actions: PropTypes.array
}

export default NavPills
