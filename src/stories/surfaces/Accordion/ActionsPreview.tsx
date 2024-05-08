import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import { Accordion, Autocomplete, IconButton, Typography } from 'components'
import { mockedAccordionContent } from './_mocks'
import { options } from 'stories/inputs/Autocomplete/_mocks'

const { content } = mockedAccordionContent

const ActionsPreview = () => {
  const [value, setValue] = useState()

  const handleChange = useCallback((val: any) => {
    setValue(val)
  }, [])

  const handleDelete = useCallback((event: any) => {
    event.stopPropagation()
  }, [])

  return (
    <Accordion
      title={
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item lg={4}>
            <Typography variant="subtitle1" emphasis="bold" color="primary">
              {'Accordion Title'}
            </Typography>
          </Grid>
          <Grid item lg={7}>
            <Autocomplete
              label="Basic Autocomplete"
              options={options}
              value={value}
              onChange={handleChange}
              stopEventPropagation
              isClearable
            />
            <Typography>{`Selected value: ${JSON.stringify(value)}`}</Typography>
          </Grid>
          <Grid item lg={1}>
            <IconButton type="delete" variant="text" size="small" color="error" tooltip={'Delete'} onClick={handleDelete} />
          </Grid>
        </Grid>
      }
      content={content}
    />
  )
}

export default ActionsPreview
