import React from 'react'
import { CardProps } from '../Card'

export interface CollapseCardProps extends Omit<CardProps, 'content'> {
  /**
   * Content of the component.
   */
  content?: React.ReactNode
  /**
   * Content of the subheader.
   */
  subheader?: React.ReactNode
  /**
   * If true, the card will be expanded by default.
   * @default false
   */
  defaultExpanded?: boolean
  /**
   * If true, the card will be expanded.
   */
  expanded?: boolean
  /**
   * If true, the card can be expanded.
   * @deprecated Use `Card` component instead
   */
  canExpand?: boolean
  /**
   * Callback fired on toggle.
   */
  onToggle?: (event: React.SyntheticEvent, expanded: boolean) => void
  /**
   * If true, the subheader will be hidden when the card is expanded.
   */
  hideSubheaderOnExpand?: boolean
  /**
   * If true, the card will toggle when clicking on the whole header, not just the expand button.
   */
  toggleOnHeaderClick?: boolean
}
