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

export interface AccordionProps extends Omit<MuiAccordionProps, 'title' | 'content' | 'children'> {
  /**
   * The title of accordion.
   */
  title?: React.ReactNode
  /**
   * The content of accordion.
   */
  content?: React.ReactNode
  /**
   * The props of the AccordionSummary component
   */
  summaryProps?: AccordionSummaryProps
  /**
   * The props of the AccordionDetails component
   */
  detailsProps?: AccordionDetailsProps
}
