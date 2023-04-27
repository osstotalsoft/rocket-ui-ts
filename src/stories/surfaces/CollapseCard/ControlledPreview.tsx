import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button, CollapseCard, IconButton } from 'components'
import QuestionMark from '@mui/icons-material/QuestionMark'

const controlled = `function ControlledCollapseCard({tabs}) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = useCallback(() => setExpanded(current => !current), [])

  return(
    <CollapseCard
    expanded={expanded}
    onToggle={handleToggle}
    title="Title"
    content={--Text content here--} 
  />
  )
`

const uncontrolled = `function UncontrolledCollapseCard({tabs}) {
  return(
    <CollapseCard
      title="Title"
      content={--Text content here--} 
    />
  )
`

const ControlledPreview = () => {
  const [expanded, setExpanded] = useState(false)
  const handleToggle = useCallback(() => setExpanded(current => !current), [])

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <CollapseCard
          expanded={expanded}
          onToggle={handleToggle}
          title="Title"
          content='--Text content here--'
          footer={
            <Button variant="contained" size="small" color="info">
              SUBMIT
            </Button>
          }
          actions={
            <IconButton color="info" variant="text" size="small">
              <QuestionMark fontSize="small" />
            </IconButton>
          }
        />
      </Grid>
      <Grid item xs={4}>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {controlled}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={4}>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {uncontrolled}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  )
}

export default ControlledPreview
