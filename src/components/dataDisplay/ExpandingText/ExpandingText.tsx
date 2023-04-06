import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import ShowButton from './ExpandingTextStyles'
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
  buttonProps,
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
        <ShowButton display={display} onClick={toggleExpanded} {...buttonProps} {...rest}>
          {localExpanded ? showLessText : showMoreText}
        </ShowButton>
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
   * Props applied to the button.
   */
  buttonProps: PropTypes.object,
  /**
   * @default false
   * Expanded state of the text.
   */
  expanded: PropTypes.bool
}

export default ExpandingText
