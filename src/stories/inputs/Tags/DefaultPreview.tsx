import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import TagsInput from 'components/inputs/Tags/TagsInput'
import DisplayTags from 'components/inputs/Tags/DisplayTags'

const DefaultPreview = (args: any) => {
  const [inputValue, setInputValue] = useState(['test'])
  return (
    <Grid container spacing={4} justifyItems={'flex-start'}>
      <Grid>
        <TagsInput
          value={inputValue}
          onChange={setInputValue}
          title='"TagsInput" component'
          placeholder="Insert new value..."
          {...args}
        />
      </Grid>
      <Grid>
        <DisplayTags value={inputValue} title=' "DisplayTags" component' {...args} />
      </Grid>
    </Grid>
  )
}

export default DefaultPreview
