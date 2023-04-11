import React from 'react'
import { render, screen } from 'testingUtils'
import CardHeader from './CardHeader'
import getTheme from 'components/themes'
import Button from 'components/buttons/Button'

const theme = getTheme()

const title = 'Title'

describe('CardHeader', () => {
  it('when variant is `filled`, has a grey background color', () => {
    render(<CardHeader variant="filled" title={title} />)
    expect(screen?.getByText(title)?.parentElement?.parentElement).toHaveStyle(
      `background-color: ${theme.palette.grey[200]}`
    )
  })

  it('has `standard` variant by default', () => {
    render(<CardHeader title={title} />)
    expect(screen?.getByText(title)?.parentElement?.parentElement).not.toHaveStyle(
      `background-color: ${theme.palette.grey[200]}`
    )
  })

  it('when `actions` is array, renders the item with spacing between them', () => {
    render(<CardHeader action={[<Button key={1}>one</Button>, <Button key={2}>two</Button>]} />)
    expect(screen.getAllByRole('button').length).toBe(2)
    expect(screen.getByText('two').parentElement).toHaveStyle('margin-left: 8px')
  })

  it('when `actions` is not an array, renders the node as it is', () => {
    render(<CardHeader action={<Button key={1}>one</Button>} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
