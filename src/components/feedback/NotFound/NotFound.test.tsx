import React from 'react'
import getTheme from 'components/themes'
import NotFound from './NotFound'
import { render, screen } from 'testingUtils'

const theme = getTheme()
const defaultFont = theme.typography.defaultFont
const text = 'Not Found'
const details = 'The resource requested could not be found on this server!'

describe('NotFound', () => {
  test('displays not found message when page does not exist', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(details)).toBeInTheDocument()
  })

  test('uses the correct color for not found', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toHaveStyle(`color: ${'defaultTheme.palette.timColors.greyColor'}`)
    expect(screen.getByText(details)).toHaveStyle(`color: ${'defaultTheme.palette.timColors.greyColor'}`)
  })

  test('uses the correct font weight for not found', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toHaveStyle('font-weight: bold')
  })

  test('uses the correct position for not found', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toHaveStyle('text-align: center')
  })

  test('not found content in screen', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(details)).toBeInTheDocument()
  })

  test('font family of the text and details is taken from default font', () => {
    render(<NotFound text={text} details={details} />)
    expect(screen.getByText(text)).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
    expect(screen.getByText(details)).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
  })
})
