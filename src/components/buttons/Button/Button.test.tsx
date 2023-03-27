// @ts-nocheck
import React from 'react'
import { render, screen, userClick, waitFor, fireEvent } from '../../../testingUtils'
import Button from './Button'
import getTheme from '../../themes'

const theme = getTheme()

const noBackgroundColors = [
  { receivedColor: 'themeNoBackground', color: 'theme' },
  { receivedColor: 'defaultNoBackground', color: 'primary' },
  { receivedColor: 'primaryNoBackground', color: 'primary' },
  { receivedColor: 'infoNoBackground', color: 'info' },
  { receivedColor: 'successNoBackground', color: 'success' },
  { receivedColor: 'warningNoBackground', color: 'warning' },
  { receivedColor: 'dangerNoBackground', color: 'danger' },
  { receivedColor: 'roseNoBackground', color: 'rose' }
]

const basicColors = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'info' },
  { color: 'success' },
  { color: 'warning' },
  { color: 'danger' },
  { color: 'rose' },
  { color: 'theme' },
  { color: 'white' },
  { color: 'dark' }
]

describe('Button colors', () => {
  describe('Button basic colors', () => {
    it.each(basicColors)('displays the correct background color for color = { $color }', ({ color }) => {
      render(<Button color={color} />)
      expect(screen.getByRole('button')).toHaveStyle(`background-color: ${theme.palette[color].main}`)
    })
  })

  describe('Button `noBackground` colors', () => {
    it.each(noBackgroundColors)(
      'displays the correct font color for color = { $receivedColor }',
      ({ receivedColor, color }) => {
        render(<Button color={receivedColor} />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle('background-color: transparent')
        expect(button).toHaveStyle(`color: ${theme.palette[color].main}`)
        expect(button).toHaveClass('MuiButton-text')
      }
    )

    it('displays the correct font color for color = `themeWithBackground`', () => {
      render(<Button color={'themeWithBackground'} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle('background-color: transparent')
      expect(button).toHaveStyle(`color: ${theme.palette['theme'].main}`)
      expect(button).toHaveClass('MuiButton-outlined')
    })

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
  it('doesn\'t call onClick', async () => {
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
