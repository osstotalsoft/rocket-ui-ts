// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import { LinearProgress } from 'components'
import ColorsPreview from './ColorsPreview'
import VariantsPreview from './VariantsPreview'
import GlobalPreview from './GlobalPreview'

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/Feedback/LinearProgress',
  component: LinearProgress,
} satisfies Meta<typeof LinearProgress>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default `<LinearProgress />` component
 *
 * The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded.
 */
export const Default: Story = {
  render: args => (
    <Box sx={{ width: '400px' }}>
      <LinearProgress {...args} />
    </Box>
  )
}

export const Colors: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <LinearProgress color={'rose'} />
        `,
        format: true
      }
    }
  },
  render: () => <ColorsPreview />
}

export const Variants: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const VariantsPreview = () => {
          const [progress, setProgress] = useState(0)
          const [buffer, setBuffer] = useState(10)
        
          const progressRef = useRef(() => {})
        
          useEffect(() => {
            progressRef.current = () => {
              if (progress === 100) {
                setProgress(0)
                setBuffer(10)
              } else {
                const diff = Math.random() * 10
                const diff2 = Math.random() * 10
                setProgress(Math.min(progress + diff, 100))
                setBuffer(Math.min(progress + diff + diff2, 100))
              }
            }
          })
        
          useEffect(() => {
            const timer = setInterval(() => {
              progressRef.current()
            }, 500)
        
            return () => {
              clearInterval(timer)
            }
          }, [])
          return (
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid  size={{ sm: 6 }}>
                <Typography textAlign={'center'}>{'determinate '}</Typography>
                <LinearProgress variant={'determinate'} value={progress} />
              </Grid>
              <Grid  size={{ sm: 6 }}>
                <Typography textAlign={'center'}>{'buffer '}</Typography>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
              </Grid>
              <Grid  size={{ sm: 6 }}>
                <Typography textAlign={'center'}>{'indeterminate'}</Typography>
                <LinearProgress />
              </Grid>
              <Grid  size={{ sm: 6 }}>
                <Typography textAlign={'center'}>{'determinate with label'}</Typography>
                <LinearProgress variant={'determinate'} value={progress} showLabel />
              </Grid>
              <Grid  size={{ sm: 6 }}>
                <Typography textAlign={'center'}>{'buffer with label'}</Typography>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} showLabel />
              </Grid>
            </Grid>
          )
        }
        `,
        format: true
      }
    }
  },
  render: () => <VariantsPreview />
}

export const Global: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
          <LinearProgress global />
        `,
        format: true
      }
    }
  },
  render: () => <GlobalPreview />
}
