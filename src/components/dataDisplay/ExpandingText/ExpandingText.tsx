import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import ExpandAction from './ExpandingTextStyles'
import Typography from '../Typography'
import { ExpandingTextProps } from './types'

/**
 * The ExpandText component provides expand and collapse functionality for inline-text.
 */
const ExpandingText: React.FC<ExpandingTextProps> = ({
  text,
  minLength,
  showLessText = 'Show less',
  showMoreText = 'Show more',
  display = 'block',
  textProps,
  expandingActionProps,
  expanded = false,
  ...rest
}) => {
  const shouldCollapse = minLength && text.length > minLength
  const [localExpanded, setLocalExpanded] = useState(expanded)

  const displayedText = shouldCollapse && !localExpanded ? `${text.substring(0, minLength)}...` : text
  const toggleExpanded = useCallback(() => setLocalExpanded((current: boolean) => !current), [])

  return (
    <>
      <Typography style={{ whiteSpace: 'pre-wrap' }} display={display} {...textProps}>
        {displayedText + ' '}
      </Typography>
      {shouldCollapse && (
        <ExpandAction display={display} onClick={toggleExpanded} {...expandingActionProps} {...rest}>
          {localExpanded ? showLessText : showMoreText}
        </ExpandAction>
      )}
    </>
  )
}

ExpandingText.propTypes = {
  /**
   * Text to be displayed.
   */
  text: PropTypes.string.isRequired,
  /**
   * Length of text to be displayed.
   */
  minLength: PropTypes.number,
  /**
   * @default 'Show less'
   * Text of `showLess` button.
   */
  showLessText: PropTypes.node,
  /**
   * @default 'Show more'
   * Text of `showMore` button.
   */
  showMoreText: PropTypes.node,
  /**
   * @default 'block'
   * CSS `display` prop applied to the text.
   */
  display: PropTypes.oneOf(['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'none']),
  /**
   * Props applied to the text.
   */
  textProps: PropTypes.object,
  /**
   * Props applied to the ShowLess/ShowMore component.
   */
  expandingActionProps: PropTypes.object,
  /**
   * @default false
   * Expanded state of the text.
   */
  expanded: PropTypes.bool
}

export default ExpandingText
