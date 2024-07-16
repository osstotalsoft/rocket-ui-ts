// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatsCard as StatsCardComponent, Typography } from 'components'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import People from '@mui/icons-material/People'
import Group from '@mui/icons-material/HeartBroken'
import { LinearProgress, Stack } from '@mui/material'

const meta: Meta<typeof StatsCardComponent> = {
  title: 'Components/Surfaces/StatsCard',
  component: StatsCardComponent,
  argTypes: {
    icon: {
      control: false
    },
    footer: {
      control: false
    }
  }
} satisfies Meta<typeof StatsCardComponent>

export default meta
type Story = StoryObj<typeof meta>

const icon = AttachMoneyIcon
const title = 'Stats Card'
const description = 'Stats card description'
const footer = 'Stats card footer'

/**
 * The default Stats Card component.
 */
export const Default: Story = {
  args: { icon, title, description, footer },
  parameters: {
    docs: {
      source: {
        code: `
        <StatsCard 
          icon={AttachMoneyIcon}
          iconColor='info'
          title={'Stats Card'} 
          description={'Stats card description'} 
          footer={'Stats card footer'}
        />
        `,
        format: true
      }
    }
  }
}

/**
 * Stats Card component allows displaying any type of data, string, numeric, React Node, etc.
 */
export const VariousContents: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <StatsCard 
          icon={AttachMoneyIcon}
          iconColor='info'
          title={'Stats Card'} 
          description={
            <>
              <Stack spacing={2} direction="row-reverse">
                <Typography variant="body1">{'Loading employees statistics...'}</Typography>
                <People />
              </Stack>
              <Stack sx={{ color: 'grey.500' }} spacing={2} direction="column">
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
              </Stack>
            </>
          } 
          footer={'Stats card footer'}
        />
        `,
        format: true
      }
    }
  },
  render: () => (
    <>
      <StatsCardComponent {...Default.args} description={'4.39 $'} />
      <StatsCardComponent
        {...Default.args}
        icon={Group}
        description={
          <>
            <Stack spacing={2} direction="row-reverse">
              <Typography variant="body1">{'Loading employees statistics...'}</Typography>
              <People />
            </Stack>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="column">
              <LinearProgress color="secondary" />
              <LinearProgress color="success" />
              <LinearProgress color="inherit" />
            </Stack>
          </>
        }
      />
    </>
  )
}
