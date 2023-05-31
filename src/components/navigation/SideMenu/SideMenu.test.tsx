import React from 'react'
import { act, render, screen, userClick, waitFor } from 'testingUtils'
import SideMenu from './SideMenu'

const content = 'content'

describe('SideMenu', () => {
  it('doesn\'t display content by default', () => {
    render(<SideMenu content={content} />)
    expect(screen.getByText(content)).not.toBeVisible()
  })

  it('display content when the button is clicked', async () => {
    render(<SideMenu content={content} />)
    act(() => userClick(screen.getByTestId('MenuOpenIcon').parentElement))
    await waitFor(() => expect(screen.getByText(content)).toBeVisible())
  })

  it('hides content when clicked outside', async () => {
    render(<SideMenu content={content} />)
    const button = screen.getByTestId('MenuOpenIcon').parentElement
    act(() => userClick(button))
    await waitFor(() => expect(screen.getByText(content)).toBeVisible())
    act(() => userClick(button.parentElement.parentElement))
    await waitFor(() => expect(screen.getByText(content)).not.toBeVisible())
  })
})
