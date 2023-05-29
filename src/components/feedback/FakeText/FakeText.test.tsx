import React from 'react'
import FakeText from './FakeText'
import { render, screen } from 'testingUtils'

describe('Loading fake text', () => {
  test('applies the correct variant (text)', () => {
    render(<FakeText variant={'text'} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('MuiSkeleton-text')
  })

  test('applies the correct variant (circular)', () => {
    render(<FakeText variant={'circular'} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('MuiSkeleton-circular')
  })

  test('applies the correct animation (wave)', () => {
    render(<FakeText animation={'wave'} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('MuiSkeleton-wave')
  })

  test('applies the correct animation (pulse)', () => {
    render(<FakeText animation={'pulse'} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('MuiSkeleton-pulse')
  })

  test('renders the correct number of lines', () => {
    render(<FakeText data-testid="skeleton" lines={10} />)
    expect(screen.getAllByTestId('skeleton')).toHaveLength(10)
  })

  test('by default it renders only one line', () => {
    render(<FakeText data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  test('it renders on paper if onPaper is set to true', () => {
    render(<FakeText data-testid="skeleton" onPaper={true} />)
    expect(screen.getByTestId('skeleton').parentNode).toHaveClass('MuiPaper-root')
  })

  test('other variants than text, are ignoring lines parameter and render only once', () => {
    render(<FakeText data-testid="skeleton" variant="rectangular" lines={2} />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})
