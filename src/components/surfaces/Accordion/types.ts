import {
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetailsProps
} from '@mui/material'

export type AccordionVariant = 'standard' | 'filled'

export interface AccordionSummaryProps extends Omit<MuiAccordionSummaryProps, 'variant'> {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: AccordionVariant
}

export interface AccordionProps extends Omit<MuiAccordionProps, 'title' | 'content' | 'children' | 'defaultExpanded'> {
  /**
   * The title of accordion.
   */
  title?: React.ReactNode
  /**
   * The content of accordion.
   * To draw only one Accordion element, the content must be a single React Node element.
   * To draw multiple Accordion elements, the content of the Accordion contains a list of elements.
   */
  content?:
    | React.ReactNode
    | {
        title?: string
        content?: React.ReactNode
      }[]
  /**
   * When the content is a React.Node element, meaning it will be a single Accordion item, @defaultExpanded must be a boolean value.
   * If `true`, expands the accordion by default.
   * @default false
   * When the content of the Accordion contains a list of elements,
   * @defaultExpanded property must be a number indicating the index of the item to be set expanded by default.
   * @default undefined
   */
  defaultExpanded?: number | boolean
  /**
   * Only applies if the content of the Accordion contains a list of elements.
   * @default false
   * If false, only one accordion at a time can be expanded
   */
  canExpandAll?: boolean
  /**
   * The props of the AccordionSummary component
   */
  summaryProps?: AccordionSummaryProps
  /**
   * The props of the AccordionDetails component
   */
  detailsProps?: AccordionDetailsProps
}
