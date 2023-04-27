import React, { ReactNode, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Tabs, Tab } from './NavPillsStyles'
import { NavPillsProps, TabPanelProps, OrientationWrapperProps, TabsWrapperProps } from './types'

const TabPanel: React.FC<TabPanelProps> = ({ children, active, index, ...other }) => {
  return (
    <Box
      role="tab-panel"
      hidden={active !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {active === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

const OrientationWrapper: React.FC<OrientationWrapperProps> = ({ children, actions, orientation }) => {
  return orientation == 'vertical' ? (
    <Box role="vertical-tab-wrapper" sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>{children}</Box>
      {actions && (
        <Box sx={{ flexGrow: 1, borderLeft: 1, borderColor: 'divider', p: 1, maxWidth: 'fit-content' }}>
          {actions?.map((action: ReactNode, index: number) => (
            <Box key={index} role="action" m="4px">
              {action}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ) : (
    <>{children}</>
  )
}
OrientationWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.arrayOf(PropTypes.node),
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({
  children,
  actions,
  orientation,
  fullWidth,
  indicatorColor,
  ...other
}) => {
  return orientation == 'vertical' ? (
    <Tabs
      role="vertical-tabs"
      orientation={orientation}
      indicatorColor={indicatorColor}
      sx={{ borderRight: 1, borderColor: 'divider' }}
      {...other}
    >
      {children}
    </Tabs>
  ) : (
    <Box sx={{ maxWidth: fullWidth ? 'unset' : 'fit-content', borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
      <Tabs role="horizontal-tabs" orientation={orientation} indicatorColor={indicatorColor} {...other}>
        {children}
      </Tabs>
      {actions &&
        actions?.map((action, index) => (
          <Box key={index} role="action" m="4px" mt="auto" mb="auto">
            {action}
          </Box>
        ))}
    </Box>
  )
}
TabsWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  actions: PropTypes.array,
  fullWidth: PropTypes.bool
}

/**
 *  Nav Pills component make it easy to explore and switch between different views.
 *  The component, organizes and allows navigation between groups of content that are related and at the same level of hierarchy.
 *
 *  At its core, it uses [Material-UI Tabs](https://mui.com/base/react-tabs/components-api/#tabs) and [Material-UI Tab](https://mui.com/material-ui/api/tab/).
 */
const NavPills: React.FC<NavPillsProps> = ({
  active = 0,
  onChange,
  tabs,
  tabProps,
  actions,
  selectedColor = 'secondary',
  capitalize,
  indicatorColor = 'secondary',
  variant = 'scrollable',
  orientation = 'horizontal',
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
        indicatorColor={indicatorColor}
        variant={variant}
        orientation={orientation}
        {...other}
      >
        {tabs.map(({ content: _content, ...tab }, index) => (
          <Tab
            key={`simple-tab-${index}`}
            color={other?.color}
            colorGradient={other?.colorGradient}
            selectedColor={selectedColor}
            capitalize={capitalize}
            {...tabProps}
            {...tab}
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
   * @default 0
   * Index of the default active pill
   */
  active: PropTypes.number,
  /**
   * Handle tab change event manually
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
      label: PropTypes.node,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      content: PropTypes.node,
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
  indicatorColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * @default "primary"
   * Determines the color of the selected Tab.
   */
  selectedColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * Indicates the background color of the selected Tab and the indicator color
   * Precedes 'indicatorColor' and 'selectedColor' properties
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * Indicates the gradient background available for most of the colors of the selected Tab and the indicator color
   */
  colorGradient: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
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
   * e.g. `[<Button />, <Button />]`
   */
  actions: PropTypes.array
}

export default NavPills
