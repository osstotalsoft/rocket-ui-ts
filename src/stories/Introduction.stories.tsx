import React, { useState } from 'react'
import OrbitContainer from './_introduction/orbits/OrbitContainer'
import AboutContainer from './_introduction/about/AboutContainer'
import Grid from '@mui/material/Grid'
import type { Meta, StoryObj } from '@storybook/react'

const LandingPage = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <Grid container alignItems="stretch" justifyContent="center">
      <Grid item xs={12} md={6}>
        <OrbitContainer setActiveItem={setActiveItem} />
      </Grid>
      <Grid item xs={12} md={6}>
        <AboutContainer activeItem={activeItem} />
      </Grid>
    </Grid>
  )
}

const meta: Meta<typeof LandingPage> = {
  title: 'Introduction',
  component: LandingPage,
  tags: ['!autodocs'],
  parameters: {
    options: {
      showPanel: false
    }
  }
} satisfies Meta<typeof LandingPage>

export default meta
type Story = StoryObj<typeof LandingPage>

export const Introduction: Story = {
  render: () => <LandingPage />
}
