import React from 'react'
import Grid from '@mui/material/Grid2'
import TagsInput from 'components/inputs/Tags/TagsInput'
import DisplayTags from 'components/inputs/Tags/DisplayTags'
import Typography from 'components/dataDisplay/Typography/TypographyStyles'

const ColorsPreview = () => {
  return (
    <Grid container spacing={4}>
      <Grid container size={6}>
        <Grid size={12}>
          <Typography variant="body1">{'<TagsInput />'}</Typography>
        </Grid>
        <Grid size={12}>
          <TagsInput value={['default']} onChange={() => {}} />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['error']} onChange={() => {}} color="error" />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['info']} onChange={() => {}} color="info" />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['primary']} onChange={() => {}} color="primary" />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['secondary']} onChange={() => {}} color="secondary" />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['success']} onChange={() => {}} color="success" />
        </Grid>
        <Grid size={12}>
          <TagsInput value={['warning']} onChange={() => {}} color="warning" />
        </Grid>
      </Grid>
      <Grid container size={6}>
        <Grid size={12}>
          <Typography variant="body1">{'<DisplayTags />'}</Typography>
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['default']} />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['error']} color="error" />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['info']} color="info" />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['primary']} color="primary" />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['secondary']} color="secondary" />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['success']} color="success" />
        </Grid>
        <Grid size={12}>
          <DisplayTags value={['warning']} color="warning" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ColorsPreview
