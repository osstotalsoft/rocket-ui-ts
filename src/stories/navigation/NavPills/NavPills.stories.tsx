// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NavPills as NavPillsComponent } from 'components'
// import DefaultPreview from './DefaultPreview'
// import NavPillsWithActions from './WithActionsPreview'
// import FilledPreview from './FilledPreview'
import { tabs } from './options'

const meta: Meta<typeof NavPillsComponent> = {
  title: 'Components/Navigation/NavPills',
  component: NavPillsComponent,
  tags: ['autodocs']
} satisfies Meta<typeof NavPillsComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The Default NavPills component.
 */
export const NavPills: Story = {
  args: { tabs: tabs(false, true) }
}

// /**
//  * Default NavPills 
//  */
// export const Default: Story = {
//   parameters: {
//     controls: { hideNoControlsWarning: true },
//     docs: {
//       source: {
//         code: `
//           <NavPills
//             tabs={
//               [{
//                 label: withText && 'Item one',
//                 icon: <CarRepair />,
//                 content: 'Content 1'
//               },
//               {
//                 label: withText && 'Item two',
//                 icon: <Phone />,
//                 content: 'Content 2'
//               }]
//             }
//             orientation={'horizontal'}
//             indicatorColor={'secondary'}
//             selectedColor={'secondary'}
//           />
//         `,
//         format: true
//       }
//     }
//   },
//   render: () => <DefaultPreview />
// }

// /**
//  * NavPills with actions
//  */
// export const WithActions: Story = {
//   parameters: {
//     controls: { hideNoControlsWarning: true },
//     docs: {
//       source: {
//         code: `
//           <NavPills
//             tabs={
//               [{
//                 label: withText && 'Item one',
//                 icon: <CarRepair />,
//                 content: 'Content 1'
//               },
//               {
//                 label: withText && 'Item two',
//                 icon: <Phone />,
//                 content: 'Content 2'
//               }]
//             }
//             tabProps={{ iconPosition: 'start' }}
//             actions={
//               [
//                 <IconButton type="add" variant="outlined" color="secondary" size="small" />,
//                 <IconButton type="delete" variant="outlined" color="error" size="small" />,
//                 <IconButton type="download" variant="outlined" color="success" size="small" />
//               ]
//             }
//             orientation={'horizontal'}
//             indicatorColor={'secondary'}
//             selectedColor={'secondary'}
//           />
//         )
//         `,
//         format: true
//       }
//     }
//   },
//   render: () => <NavPillsWithActions />
// }

// /**
//  * NavPills with gradient
//  */
// export const WithGradient: Story = {
//   parameters: {
//     controls: { hideNoControlsWarning: true },
//     docs: {
//       source: {
//         code: `
//         <NavPills
//           tabs={
//             [{
//               label: withText && 'Item one',
//               icon: <CarRepair />,
//               content: 'Content 1'
//             },
//             {
//               label: withText && 'Item two',
//               icon: <Phone />,
//               content: 'Content 2'
//             }]
//           }
//           gradient
//           orientation={'horizontal'}
//           indicatorColor={'secondary'}
//           selectedColor={'secondary'}
//         />
//         `,
//         format: true
//       }
//     }
//   },
//   render: () => <FilledPreview />
// }
