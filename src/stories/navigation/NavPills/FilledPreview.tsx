import React from 'react'
import { Grid } from '@mui/material'
import { tabs } from './_options'
import { NavPills } from 'components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const FilledPreview = () => {
  return (
    <Grid container columnSpacing={4} justifyContent="center" direction="column">
      <Grid item>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {'<NavPills color="rose" .../>'}
        </SyntaxHighlighter>
        <NavPills tabs={tabs(false, true)} color="rose" />
      </Grid>
      <Grid item>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {'<NavPills selectedColor="rose" indicatorColor="info" .../>'}
        </SyntaxHighlighter>
        <NavPills tabs={tabs(false, true)} selectedColor="rose" indicatorColor="info" />
      </Grid>
      <Grid item>
        <SyntaxHighlighter language="javascript" wrapLongLines style={github}>
          {'<NavPills colorGradient="warning" .../>'}
        </SyntaxHighlighter>
        <NavPills tabs={tabs(false, true)} colorGradient="warning" />
      </Grid>
    </Grid>
  )
}

export default FilledPreview
