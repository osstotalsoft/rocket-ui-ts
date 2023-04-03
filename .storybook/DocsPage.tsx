// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import * as React from 'react'
import { Controls, Description, DocsContext, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import { makeStyles } from '@mui/styles'
import { TableOfContent } from './TableOfContent'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex'
  },
  toc: {
    flexBasis: '200px',
    flexShrink: 0,
    [`@media screen and (max-width: 1300px)`]: {
      display: 'none'
    }
  },
  container: {
    width: '200px',
    flexGrow: 1
  }
})

export const DocsPage = () => {
  const context = React.useContext(DocsContext)
  const stories = context.componentStories()
  const styles = useStyles()

  return (
    <>
      <Title />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </div>
        <div className={styles.toc}>
          <TableOfContent stories={stories} />
        </div>
      </div>
    </>
  )
}
