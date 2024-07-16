import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FavIcon } from 'components'

const meta: Meta<typeof FavIcon> = {
  title: 'Components/DataDisplay/FavIcon',
  component: FavIcon,
  argTypes: {
    favIconSource: {
      control: { type: 'radio' },
      options: ['/favicon.ico', '/faviconGlobe.ico', '/faviconReact.ico', '/faviconTS.ico']
    }
  },
  decorators: [
    (Story, {args}) => (
      <>
        <img width={32} height={32} src={args.favIconSource}/>
        <Story />
      </>
    )
  ]
} satisfies Meta<typeof FavIcon>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Some predefined icon examples are provided through the documentation controls of the favIconSource prop
 */

export const Default: Story = {
  args: { 
    favIconSource: '/faviconGlobe.ico',
    defaultFavIcon: '/favicon.ico'
  }
}
