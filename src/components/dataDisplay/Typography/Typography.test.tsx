import React from 'react'
import { render, fireEvent, screen } from '../../../testingUtils'
import getTheme from '../../themes'
import Typography from './Typography'

const theme = getTheme()

const typographyText = 'This is a typography'
const tooltipText = 'This is a tooltip'

describe('Typography', () => {
  test('uses the font family from the theme', () => {
    render(<Typography>{typographyText}</Typography>)

    expect(screen.getByText(typographyText)).toHaveStyle(`font-family: ${theme.typography.fontFamily}`)
  })

  test('displays a tooltip on hover when provided', async () => {
    render(<Typography tooltip={tooltipText}>{typographyText}</Typography>)
    fireEvent.mouseOver(screen.getByText(typographyText))

    const tooltip = await screen.findByText(tooltipText)
    expect(tooltip).toBeInTheDocument()
  })

  test('applies the correct emphasis', async () => {
    render(<Typography emphasis="bold">{typographyText}</Typography>)
    expect(screen.getByText(typographyText)).toHaveStyle('font-weight: bold')
  })

  test('can combine emphases', async () => {
    render(<Typography emphasis={['bold', 'italic']}>{typographyText}</Typography>)
    const typography = screen.getByText(typographyText)

    expect(typography).toHaveStyle('font-weight: bold')
    expect(typography).toHaveStyle('font-style: italic')
  })

  test('allows multiple text decorations', async () => {
    render(
      <Typography emphasis={['overline', 'line-through']} tooltip={tooltipText}>
        {typographyText}
      </Typography>
    )
    expect(screen.getByText(typographyText)).toHaveStyle('text-decoration: overline line-through')
  })
})
