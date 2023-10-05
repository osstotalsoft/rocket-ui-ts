import React, { useCallback, useMemo, useState } from 'react'
import Collapse from '@mui/material/Collapse'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Card, IconButton } from '../../index'
import { CollapseCardProps } from './types'
import { CardContent, Stack } from '@mui/material'

/**
 * A Collapse Card is basically a 'smarter' Card component that allows users to toggle the display of content by expanding or collapsing the card.
 */
const CollapseCard: React.FC<CollapseCardProps> = ({
  content,
  children,
  actions,
  variant = 'elevation',
  defaultExpanded,
  expanded,
  onToggle,
  subheader,
  hideSubheaderOnExpand = false,
  toggleOnHeaderClick = false,
  ...rest
}) => {
  const [localExpanded, setLocalExpanded] = useState(defaultExpanded || false)
  const exp = expanded || localExpanded

  const toggleCard = useCallback(
    (event: React.SyntheticEvent<Element, Event>) =>
      onToggle ? onToggle(event, expanded) : setLocalExpanded(current => !current),
    [expanded, onToggle]
  )

  const iconButton = (
    <IconButton size="small" variant="text" color="primary" onClick={toggleCard}>
      {exp ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  )

  const headerProps = useMemo(() => {
    if (!toggleOnHeaderClick) return undefined
    return { sx: { cursor: 'pointer' }, onClick: toggleCard }
  }, [toggleOnHeaderClick, toggleCard])

  const handleActionsClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      /* Stop click event propagation on card actions to prevent card toggle (if toggleOnHeaderClick is enabled) */
      if (!toggleOnHeaderClick) return
      event.stopPropagation()
    },
    [toggleOnHeaderClick]
  )

  return (
    <Card
      disablePadding
      actions={
        <Stack direction="row" spacing={1} onClick={handleActionsClick}>
          {(Array.isArray(actions) ? [...actions, iconButton] : [actions, iconButton]).map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </Stack>
      }
      variant={variant}
      headerProps={headerProps}
      subheader={hideSubheaderOnExpand && exp ? <></> : subheader}
      {...rest}
    >
      <Collapse in={exp}>
        <CardContent children={content || children} />
      </Collapse>
    </Card>
  )
}

CollapseCard.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node,
  /**
   * Content of the component.
   */
  content: PropTypes.node,
  /**
   * @default 'elevation'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: PropTypes.number,
  /**
   * If 'true', the card header and footer will be filled with a grayish color
   * @default false
   */
  filled: PropTypes.bool,
  /**
   * Content of the subheader.
   */
  subheader: PropTypes.node,
  /**
   * If true, the card will be expanded by default.
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If true, the card will be expanded.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired on toggle.
   */
  onToggle: PropTypes.func,
  /**
   * If true, the subheader will be hidden when the card is expanded.
   * @default false
   */
  hideSubheaderOnExpand: PropTypes.bool,
  /**
   * If true, the card will toggle when clicking on the whole header, not just the expand button.
   * @default false
   */
  toggleOnHeaderClick: PropTypes.bool
}

export default CollapseCard
