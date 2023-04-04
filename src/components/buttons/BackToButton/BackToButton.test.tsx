import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BackToButton from './BackToButton'
import { render, userClick, waitFor, screen } from '../../../testingUtils'

describe('BackToButton', () => {
  test('redirects to the path received', async () => {
    render(
      <BrowserRouter>
        <BackToButton path="/back" />
        <Routes>
          <Route path="/back" element={<div>{'redirected'}</div>}></Route>
        </Routes>
      </BrowserRouter>
    )
    userClick(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('redirected')).toBeInTheDocument()
    })
  })
})
