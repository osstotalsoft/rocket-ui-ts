// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { fireEvent, render, screen } from '../../../testingUtils'
import { DisplayTags, TagsInput } from '../../index'

describe('DisplayTags', () => {
  it('renders the tags correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<DisplayTags value={tags} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('renders the avatar correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<DisplayTags avatar={<span data-testid="avatar">A</span>} value={tags} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
      expect(screen.getAllByTestId('avatar').some(avatar => avatar.textContent === 'A')).toBe(true)
    })
  })
  it('renders the icon correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<DisplayTags icon={<span data-testid="icon">I</span>} value={tags} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
      expect(screen.getAllByTestId('icon').some(icon => icon.textContent === 'I')).toBe(true)
    })
  })
})

describe('TagsInput', () => {
  it('renders the tags correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<TagsInput value={tags} onChange={jest.fn} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('renders the avatar correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<TagsInput avatar={<span data-testid="avatar">A</span>} value={tags} onChange={jest.fn} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
      expect(screen.getAllByTestId('avatar').some(avatar => avatar.textContent === 'A')).toBe(true)
    })
  })

  it('renders the icon correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']

    render(<TagsInput icon={<span data-testid="icon">I</span>} value={tags} onChange={jest.fn} />)

    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
      expect(screen.getAllByTestId('icon').some(icon => icon.textContent === 'I')).toBe(true)
    })
  })

  it('handles the onChange event correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']
    const handleChange = jest.fn()

    render(<TagsInput value={tags} onChange={handleChange} />)

    // Simulate adding a new tag
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'NewTag' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    // Check if handleChange was called with the correct arguments
    expect(handleChange).toHaveBeenCalledWith([...tags, 'NewTag'])
  })

  it('handles deleting a tag correctly', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']
    const handleChange = jest.fn()

    render(<TagsInput value={tags} onChange={handleChange} />)

    // Simulate deleting a tag
    const deleteButton = screen.getByText('Tag2').nextSibling // Assuming the delete button is next to the tag
    fireEvent.click(deleteButton)

    // Check if handleChange was called with the correct arguments
    expect(handleChange).toHaveBeenCalledWith(['Tag1', 'Tag3'])
  })

  it('handles deleting a tag correctly using Backspace', () => {
    const tags = ['Tag1', 'Tag2', 'Tag3']
    const handleChange = jest.fn()

    render(<TagsInput value={tags} onChange={handleChange} />)

    // Simulate focusing the input and pressing Backspace to delete the last tag
    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' })

    // Check if handleChange was called with the correct arguments
    expect(handleChange).toHaveBeenCalledWith(['Tag1', 'Tag2'])
  })
})
