import React from 'react'
import { render, screen, userClick, waitFor, fireEvent } from '../../../testingUtils'
import Button from './Button'
import getTheme from '../../themes'
import { ButtonColor } from './types'

const theme = getTheme()

const basicColors = [
  { color: 'dark' },
  { color: 'default' },
  { color: 'error' },
  { color: 'info' },
  { color: 'primary' },
  { color: 'rose' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'warning' },
  { color: 'white' }
] satisfies { color: ButtonColor }[]

describe('Button colors', () => {
  describe('Button basic colors', () => {
    it.each(basicColors)('displays the correct background color for color = { $color }', ({ color }) => {
      render(<Button color={color} />)
      expect(screen.getByRole('button')).toHaveStyle(`background-color: ${theme.palette[color]?.main}`)
    })
  })

  describe('Button `noBackground` colors', () => {
    it('displays the correct font color and background color for color = `transparent`', () => {
      render(<Button color={'transparent'} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle('background-color: transparent')
      expect(button).toHaveStyle(`color: ${theme.palette['primary'].main}`)
      expect(button).toHaveClass('MuiButton-text')
    })

    it('displays primary background color by default', () => {
      render(<Button />)
      expect(screen.getByRole('button')).toHaveStyle(`background-color: ${theme.palette['primary'].main}`)
    })
  })
})

describe('Button sizes and shapes', () => {
  it('has a min-width of 160px when wd = { true }', () => {
    render(<Button wd />)
    expect(screen.getByRole('button')).toHaveStyle('min-width: 160px')
  })

  it('has round corners when round = { true }', () => {
    render(<Button round />)
    expect(screen.getByRole('button')).toHaveStyle('border-radius: 30px')
  })
})

describe('Disabled button', () => {
  it('does not call onClick', async () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick} disabled />)
    userClick(screen.getByRole('button'))

    await waitFor(() => {
      expect(mockOnClick).not.toHaveBeenCalledWith()
    })
  })

  it('displays tooltip when disabled', async () => {
    render(<Button tooltip="tooltip" disabled />)
    fireEvent.mouseOver(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('tooltip')).toBeInTheDocument()
    })
  })
})

describe('Other button functionalities', () => {
  it('renders a progress bar when loading = { true }', () => {
    render(<Button loading />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('disables capitalization when capitalize = { false }', () => {
    render(<Button capitalize={false}>Text</Button>)
    expect(screen.getByText('Text')).toHaveStyle('text-transform: none')
  })
})
