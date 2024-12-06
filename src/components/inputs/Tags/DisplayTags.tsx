import React, { ReactElement } from 'react'
import { TagProps } from './types'
import { map } from 'ramda'
import { Chip } from '@mui/material'

/**
 * Renders the tags as chips.
 *
 * @param value The array of tags to be displayed.
 * @param size The size of the chips (default: 'small').
 * @param rest Additional props to be passed to the chips.
 * @returns The rendered tags as chips.
 */
const DisplayTags: React.FC<TagProps> = ({ value, size = 'small', ...rest }) => (
  <>
    {map(
      (tag: string): ReactElement => (
        <Chip data-testid={`tag-chip-${tag}`} key={tag} label={tag} size={size} {...rest} />
      ),
      value
    )}
  </>
)

export default DisplayTags
