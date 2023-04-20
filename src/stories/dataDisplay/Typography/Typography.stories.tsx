import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TypographyComponent from '../../../components/dataDisplay/Typography/Typography'
import { VariantsPreview } from './VariantsPreview'
import { ColorsPreview } from './ColorsPreview'
import { ExtraStylingPreview } from './ExtraStylingPreview'

const meta: Meta<typeof TypographyComponent> = {
  title: 'Components/DataDisplay/Typography',
  component: TypographyComponent,
  tags: ['autodocs']
} satisfies Meta<typeof TypographyComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Typography is a  styling abstraction component, used to ensure consistency and standardize text throughout your application.
 */
export const Typography: Story = {
  args: { children: 'You can play with this text here!' }
}

/**
 * The Typography component makes it easy to apply a default set of font weights and sizes in your application using the available `variant` values.
 */
export const Variants: Story = {
  args: { gutterBottom: true },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Typography variant="variant-code-here">
          Your text here
        </Typography>
        `,
        format: true
      }
    }
  },
  render: () => <VariantsPreview />
}

export const Colors: Story = {
  args: { gutterBottom: true },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Typography color="color-code-here">
          Your text here
        </Typography>
        `,
        format: true
      }
    }
  },
  render: () => <ColorsPreview />
}

/**
 *  Extra styling can be applied using either `emphasis` or `style` properties.
 */
export const ExtraStyling: Story = {
  args: { gutterBottom: true },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Typography emphasis="emphasis-values-here" style={{...some-CSS-HTML-properties}}>
          Your text here
        </Typography>
        `,
        format: true
      }
    }
  },
  render: () => <ExtraStylingPreview />
}
