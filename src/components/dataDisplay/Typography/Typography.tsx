import React from 'react'
import PropTypes from 'prop-types'
import MuiTypography from './TypographyStyles'
import Tooltip from '@mui/material/Tooltip'
import * as R from 'ramda'
import { Emphasis, TypographyProps } from './types'

const emphasisToCSSProps = {
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  overline: { textDecoration: 'overline' },
  'line-through': { textDecoration: 'line-through' },
  underline: { textDecoration: 'underline' }
}
const getCSSPropsFromEmphasis = (emphasis: Emphasis) => emphasisToCSSProps?.[emphasis]

const parseEmphasis = (emphasis?: Emphasis | Emphasis[]): React.CSSProperties => {
  if (!emphasis) return {}
  if (R.is(String, emphasis)) return getCSSPropsFromEmphasis(emphasis)
  if (R.is(Array, emphasis))
    // Parse all emphasis array values in order to concatenate all the associated CSS object properties
    return R.reduce<string, React.CSSProperties>(
      (acc, elem) => {
        // Retrieves the associated CSS object for an emphasis value
        const cssObj = getCSSPropsFromEmphasis(elem as Emphasis)
        /**
         * If 2 or more CSS objects have the same property, we need to merge their values
         * e.g.
         * - overline => { textDecoration: 'overline' },
         * - line-through => { textDecoration: 'line-through' }
         * becomes:
         * { textDecoration: 'overline line-through' }
         */
        return R.mergeWithKey(
          (prop, val1, val2) => (R.includes(prop, Object.getOwnPropertyNames(acc)) ? `${val1} ${val2}` : val2),
          acc,
          cssObj
        )
      },
      {},
      emphasis
    )
  return {}
}

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 */
const Typography: React.FC<TypographyProps> = ({ tooltip, emphasis, style, variant, ...rest }) => {
  const base = <MuiTypography style={{ ...style, ...parseEmphasis(emphasis) }} variant={variant} {...rest} />
  return tooltip ? (
    <Tooltip title={tooltip} placement="bottom-start">
      {base}
    </Tooltip>
  ) : (
    base
  )
}

Typography.propTypes = {
  /**
   * If provided, a text will appear on hover.
   */
  tooltip: PropTypes.node,
  /**
   * Inline styles object.
   */
  style: PropTypes.object,
  /**
   * The color of the text.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
    PropTypes.string
  ]),
  /**
   * Controls the text emphasis. Different font styles can be used individually or in combination.
   */
  emphasis: PropTypes.oneOfType([
    PropTypes.oneOf(['bold', 'italic', 'underline', 'line-through', 'overline'] as Emphasis[]),
    PropTypes.arrayOf(PropTypes.oneOf(['bold', 'italic', 'underline', 'line-through', 'overline'] as Emphasis[]).isRequired)
  ]),
  /**
   * @default 'body1'
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2'
  ])
}

export default Typography
