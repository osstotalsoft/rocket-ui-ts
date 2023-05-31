// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import PasswordField from './PasswordField'
import { render, userClick, waitFor, screen, act } from '../../../testingUtils'

describe('PasswordField', () => {
  test('toggles show/hide icons', async () => {
    render(<PasswordField />)
    expect(screen.getByTestId('VisibilityOffIcon')).toBeInTheDocument()
    act(() => userClick(screen.getByRole('button')))
    await waitFor(() => expect(screen.getByTestId('VisibilityIcon')).toBeInTheDocument())
  })

  test('hides/displays text when toggling the show button', async () => {
    const text = 'password'
    render(<PasswordField value={text} />)
    const input = screen.getByDisplayValue(text)
    expect(input).toHaveAttribute('type', 'password')
    act(() => userClick(screen.getByRole('button')))
    await waitFor(() => expect(input).toHaveAttribute('type', 'text'))
  })
})
