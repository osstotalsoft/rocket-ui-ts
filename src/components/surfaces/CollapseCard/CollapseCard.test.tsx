import React from 'react'
import { render, screen, userClick, waitFor } from 'testingUtils'
import { Button, CollapseCard } from 'components'

const text = 'Cards are surfaces that display content and actions on a single topic.'

describe('CollapseCard', () => {
  test('is collapsed by default', () => {
    const { container } = render(<CollapseCard content={<div>{text}</div>} />)
    const collapses = container.getElementsByClassName('MuiCollapse-hidden')
    expect(collapses.length).toBe(1)
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('if `defaultExpanded` is true, is expanded by default', () => {
    const { container } = render(<CollapseCard content={<div>{text}</div>} defaultExpanded={true} />)
    const collapses = container.getElementsByClassName('MuiCollapse-hidden')

    expect(collapses.length).toBe(0)
    expect(screen.getByTestId('ExpandLessIcon')).toBeInTheDocument()
  })

  test('when actions is an array, renders the items and the expand button', () => {
    render(<CollapseCard actions={[<Button key="button">OK</Button>]} />)
    expect(screen.getByText('OK')).toBeInTheDocument()
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('when actions is a node, renders the node and the expand button', () => {
    render(<CollapseCard actions={<Button key="button">OK</Button>} />)
    expect(screen.getByText('OK')).toBeInTheDocument()
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('expands the card when the button is clicked', async () => {
    const { container } = render(<CollapseCard />)
    expect(container.getElementsByClassName('MuiCollapse-hidden').length).toBe(1)

    userClick(screen.getByTestId('ExpandMoreIcon').parentElement)

    await waitFor(() => {
      expect(container.getElementsByClassName('MuiCollapse-hidden').length).toBe(0)
    })
  })

  test('calls onToggle when the button is pressed', async () => {
    const mockOnToggle = jest.fn()
    render(<CollapseCard onToggle={mockOnToggle} />)
    userClick(screen.getByTestId('ExpandMoreIcon').parentElement)
    await waitFor(() => {
      expect(mockOnToggle).toHaveBeenCalled()
    })
  })

  test('displays subheader', () => {
    render(<CollapseCard subheader={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
