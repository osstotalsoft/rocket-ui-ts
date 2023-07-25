import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import { Accordion as MuiAccordion, AccordionDetails } from '@mui/material/'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionSummary } from './AccordionStyles'
import Typography from '../../dataDisplay/Typography'
import { AccordionProps, AccordionVariant } from './types'
import { isArray, isBoolean } from 'lodash'

const AccordionItem: React.FC<AccordionProps> = ({
  title,
  content,
  summaryProps,
  detailsProps,
  defaultExpanded,
  ...rest
}) => {
  return (
    <MuiAccordion defaultExpanded={isBoolean(defaultExpanded) ? defaultExpanded : false} {...rest}>
      <AccordionSummary variant={'standard' as AccordionVariant} expandIcon={<ExpandMoreIcon />} {...summaryProps}>
        <Typography variant="subtitle1" color={'textPrimary'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails {...detailsProps}>
        {content as ReactNode}
      </AccordionDetails>
    </MuiAccordion>
  )
}

/**
 *
 * The accordion component allows the user to show and hide sections of related content on a page.
 *
 * Props of the [Material-UI Accordion](https://mui.com/material-ui/api/accordion/),
 * [Material-UI AccordionDetails](https://mui.com/material-ui/api/accordion-details/)
 * and [Material-UI AccordionSummary](https://mui.com/material-ui/api/accordion-summary/) components are also available.
 *
 */
const Accordion: React.FC<AccordionProps> = ({ canExpandAll = false, defaultExpanded, content, ...res }) => {
  const [localActive, setLocalActive] = useState(isBoolean(defaultExpanded) ? -1 : defaultExpanded)
  const handleChange = (index: number) => (_: React.SyntheticEvent, expanded: Boolean) =>
    setLocalActive(expanded ? index : -1)

  return isArray(content) ? (
    <>
      {content?.map(({ title, content }, index) => (
        <AccordionItem
          {...res}
          key={index}
          title={title}
          content={content}
          defaultExpanded={defaultExpanded}
          {...(canExpandAll ? {} : { expanded: localActive === index, onChange: handleChange(index) })}
        />
      ))}
    </>
  ) : (
    <AccordionItem content={content} defaultExpanded={defaultExpanded} {...res} />
  )
}

Accordion.propTypes = {
  /**
   * The title of accordion.
   */
  title: PropTypes.node,
  /**
   * The content of accordion.
   * To draw only one Accordion element, the content must be a single React Node element.
   * To draw multiple Accordion elements, the content of the Accordion contains a list of elements.
   */
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        details: PropTypes.node
      })
    ).isRequired
  ]),
  /**
   * When the content is a React.Node element, meaning it will be a single Accordion item, @defaultExpanded must be a boolean value.
   * If `true`, expands the accordion by default.
   * @default false
   * When the content of the Accordion contains a list of elements,
   * @defaultExpanded property must be a number indicating the index of the item to be set expanded by default.
   * @default undefined
   */
  defaultExpanded: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Only applies if the content of the Accordion contains a list of elements.
   * @default false
   * If false, only one accordion at a time can be expanded
   */
  canExpandAll: PropTypes.bool,
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
