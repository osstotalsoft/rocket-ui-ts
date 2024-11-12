import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid2'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Accordion } from 'components'
import { mockedAccordionContent } from './_mocks'

const { title, content } = mockedAccordionContent

const controlled = `
  function ControlledAccordion({tabs}) {
    const [expanded, setExpanded] = useState(false)

    const handleToggle = useCallback(() => setExpanded(current => !current), [])

    return(
      <Accordion 
        title="Title"
        content={--Text content here--}  
        expanded={expanded} 
        onChange={handleToggle} 
      />
    )
  }
`

const uncontrolled = `
  function UncontrolledAccordion({tabs}) {
    return(
      <Accordion
        title="Title"
        content={--Text content here--} 
      />
    )
  }
`

const ControlledPreview = () => {
  const [expanded, setExpanded] = useState(false)
  const handleToggle = useCallback(() => setExpanded(current => !current), [])

  return (
    <Grid container spacing={4}>
      <Grid size={4}>
        <Accordion title={title} content={content} expanded={expanded} onChange={handleToggle} />
      </Grid>
      <Grid size={4}>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {controlled}
        </SyntaxHighlighter>
      </Grid>
      <Grid size={4}>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {uncontrolled}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  )
}

export default ControlledPreview
