import React from 'react'
import { render, screen } from 'testingUtils'
import CardHeader from './CardHeader'
import getTheme from '../../../themes'
import Button from '../../../buttons/Button'

const theme = getTheme()

const title = 'Title'

describe('CardHeader', () => {
  it('when `filled` property is set, the card has a grey background color', () => {
    render(<CardHeader filled title={title} />)
    expect(screen.getByText(title)?.parentElement?.parentElement?.parentElement).toHaveStyle(
      `background-color: ${theme.palette.grey[200]}`
    )
  })

  it('has `elevation` variant by default', () => {
    render(<CardHeader title={title} />)
    expect(screen.getByText(title)?.parentElement?.parentElement).not.toHaveStyle(
      `background-color: ${theme.palette.grey[200]}`
    )
  })

  it('when `actions` is not an array, renders the node as it is', () => {
    render(<CardHeader actions={<Button key={1}>one</Button>} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
