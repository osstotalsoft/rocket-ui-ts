import React from 'react'
import PropTypes from 'prop-types'
import { Accordion as MuiAccordion, AccordionDetails } from '@mui/material/'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionSummary } from './AccordionStyles'
import Typography from 'components/dataDisplay/Typography'
import { AccordionProps, AccordionVariant } from './types'

/**
 *
 * The accordion component allows the user to show and hide sections of related content on a page.
 *
 * Props of the [Material-UI Accordion](https://mui.com/material-ui/api/accordion/),
 * [Material-UI AccordionDetails](https://mui.com/material-ui/api/accordion-details/)
 * and [Material-UI AccordionSummary](https://mui.com/material-ui/api/accordion-summary/) components are also available.
 *
 */
const Accordion: React.FC<AccordionProps> = ({ title, content, summaryProps, detailsProps, ...rest }) => {
  return (
    <MuiAccordion {...rest}>
      <AccordionSummary variant={'standard' as AccordionVariant} expandIcon={<ExpandMoreIcon />} {...summaryProps}>
        <Typography variant="subtitle1" color={'textPrimary'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails {...detailsProps}>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  )
}

Accordion.propTypes = {
  /**
   * The title of accordion.
   */
  title: PropTypes.node,
  /**
   * The content of accordion.
   */
  content: PropTypes.node,
  /**
   * The props of the AccordionSummary component
   */
  summaryProps: PropTypes.object,
  /**
   * The props of the AccordionDetails component
   */
  detailsProps: PropTypes.object
}

export default Accordion
