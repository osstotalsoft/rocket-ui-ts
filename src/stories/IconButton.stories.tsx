import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from '../components/buttons/Button/Button'
import { colors, sizes, variants } from '../components/buttons/Button/types'
import { Grid } from '@mui/material'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Buttons/Icon Button',
  component: ButtonComponent

  // tags: ['autodocs'],
  // argTypes: {
  //   color: { control: { type: 'select' }, options: colors },
  //   size: { control: { type: 'select' }, options: sizes },
  //   variant: { control: { type: 'select' }, options: variants }
  // }
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

export const IconButton: Story = {
  render: () => <ButtonComponent children="My button" />
}

// export const Button: Story = {
//   render: argTypes => (
//     <Grid container spacing={3}>
//       <Grid item>
//         <ButtonComponent
//           {...argTypes}
//           children="My button" /*variant="contained" children="Variant contained" color="primary"*/
//         />
//       </Grid>
//       <Grid item>
//         <ButtonComponent {...argTypes} variant="outlined" children="Variant outlined" />
//       </Grid>
//       <Grid item>
//         <ButtonComponent {...argTypes} variant="text" children="Variant text" />
//       </Grid>
//       <Grid item>
//         <ButtonComponent {...argTypes} variant="contained" gradient children="Gradient" />
//       </Grid>
//     </Grid>
//   )
// }
