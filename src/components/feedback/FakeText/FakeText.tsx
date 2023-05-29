import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { FakeTextProps } from './types'

/**
 * Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
 */

const FakeText: React.FC<FakeTextProps> = ({ lines = 1, onPaper = false, variant, animation = 'wave', ...props }) => {
  const defaultOrText = !variant || variant === 'text'

  const fakeText = (
    <>
      {defaultOrText ? (
        Array(lines)
          .fill('')
          .map((_e, i) => {
            if (i % 2 == 0) return <Skeleton key={i} variant={variant} animation={animation} {...props} />
            return <Skeleton key={i} variant={variant} {...props} width={'80%'} />
          })
      ) : (
        <Skeleton variant={variant} {...props} />
      )}
    </>
  )

  if (onPaper) {
    return <Paper sx={{ p: 2 }}>{fakeText}</Paper>
  }

  return fakeText
}

FakeText.propTypes = {
  /**
   * @default 1
   * The number of lines appearing.
   */
  lines: PropTypes.number,
  /**
   * @default false
   * If true, the fake text will be drawn on a Paper.
   */
  onPaper: PropTypes.bool,
  /**
   * @default 'text'
   * The shape of the loading fake text
   */
  variant: PropTypes.oneOf(['text', 'circular', 'rectangular', 'rounded']),
  /**
   * The animation. If false, the animation effect is disabled
   * @default 'wave'
   */
  animation: PropTypes.oneOf(['pulse', 'wave', false])
}

export default FakeText
