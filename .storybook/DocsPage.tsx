// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useContext } from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Heading,
  DocsStory,
  DocsContext,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks'

const DocsPage = () => {
  //   const context = useContext(DocsContext)
  //   const stories = context.componentStories()
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
      <Heading>Examples</Heading>
      {/* {stories?.map(story => story && <DocsStory key={story.id} {...story} expanded withToolbar />)} */}
      <Heading>Properties</Heading>
    </>
  )
}

DocsPage.displayName = 'DocsPage'

export default DocsPage
