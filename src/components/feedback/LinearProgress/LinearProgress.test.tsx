import React from 'react'
import { render, screen } from 'testingUtils'
import { LinearProgress } from 'components'

describe('LinearProgress', () => {
  it('renders the label', () => {
    render(<LinearProgress value={80} showLabel={true} />)
    expect(screen.getByText('80%')).toBeInTheDocument()
  })
})
