import React from 'react'
import { Grid2 as Grid, Link } from '@mui/material'
import { Typography, Card } from 'components'
import natureSound from '../../assets/audio/rain-ambient.mp3'

const MediaPreview = () => {
  return (
    <Grid container spacing={2}>
      <Grid container spacing={2} size={12}>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Image"
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 's', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;s&#39; size.</Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Image"
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 'm', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;m&#39; size.</Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Image"
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 'l', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;l&#39; size.</Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} size={12}>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Video"
            mediaProps={{
              component: 'video',
              src: 'https://www.w3schools.com/html/mov_bbb.mp4',
              size: 'l',
              alt: 'Video Demo',
              controls: true
            }}
          >
            <Typography>This is rendering a random video.</Typography>
            <Typography>
              Video courtesy of
              <Link href="https://www.bigbuckbunny.org/" target="_blank">
                Big Buck Bunny
              </Link>
              .
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Audio"
            mediaProps={{
              component: 'audio',
              src: natureSound,
              size: 'l',
              controls: true
            }}
          >
            <Typography>This is a random audio file with default controls.</Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            title="Random Image"
            mediaProps={{
              component: 'img',
              src: 'https://i.imgur.com/8woNLN2.jpeg',
              height: '280px',
              alt: 'Image Demo'
            }}
          >
            <Typography>This is a random image.</Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MediaPreview
