import React from 'react'
import { Grid } from '@mui/material'
import { NavPills } from 'components'
import { tabs } from './_options'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const controlled = `function ControlledNavPills({tabs}) {
  const [active, setActive] = useState(0)

  const handleChange = (event, newValue) => {
    setActive(newValue)
  }

  return(
    <NavPills
      tabs={tabs}
      active={active}
      onChange={handleChange}
    />
  )
`

const uncontrolled = `function UncontrolledNavPills({tabs}) {
  return(
    <NavPills
      tabs={tabs}
    />
  )
`

const ControlledPreview = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <NavPills tabs={tabs(false, true)} />
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
