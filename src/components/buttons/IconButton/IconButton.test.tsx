// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import React from 'react'
import { render, screen, userClick, waitFor, fireEvent } from '../../../testingUtils'
import IconButton from './IconButton'
import { ButtonType } from './types'

const customButtonTypes = [
  {
    type: 'add',
    testId: 'AddIcon'
  },
  { type: 'cancel', testId: 'CloseIcon' },
  {
    type: 'delete',
    testId: 'DeleteIcon'
  },
  {
    type: 'download',
    testId: 'CloudDownloadIcon'
  },
  {
    type: 'downward',
    testId: 'ArrowDownwardIcon'
  },
  {
    type: 'edit',
    testId: 'EditIcon'
  },
  {
    type: 'view',
    testId: 'VisibilityIcon'
  },
  {
    type: 'save',
    testId: 'SaveIcon'
  },
  {
    type: 'upward',
    testId: 'ArrowUpwardIcon'
  }
] satisfies { type: ButtonType; testId: string }[]

describe('Custom icon buttons', () => {
  it.each(customButtonTypes)('displays the correct icon for type = { \'$type\' }', ({ type, testId }) => {
    render(<IconButton type={type} />)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})

describe('Disabled icon button', () => {
  it('doesn\'t call onClick', async () => {
    const mockOnClick = jest.fn()
    render(<IconButton onClick={mockOnClick} disabled />)
    userClick(screen.getByRole('button'))

    await waitFor(() => {
      expect(mockOnClick).not.toHaveBeenCalledWith()
    })
  })

  it('displays tooltip when disabled', async () => {
    render(<IconButton tooltip="tooltip" disabled />)
    fireEvent.mouseOver(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('tooltip')).toBeInTheDocument()
    })
  })
})

describe('Loading button', () => {
  it('renders a progress bar when loading = { true }', () => {
    render(<IconButton loading />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
