import React from 'react'
import { render, screen } from 'testingUtils'
import Accordion from './index'

const mockedContent = { title: 'Title', content: 'Details of the content' }

describe('Accordion', () => {
  it('renders title content', () => {
    render(<Accordion title={mockedContent.title} expanded />)
    expect(screen.getByText(mockedContent.title)).toBeInTheDocument()
  })

  it('renders details content', () => {
    render(<Accordion content={mockedContent.content} expanded />)
    expect(screen.getByText(mockedContent.content)).toBeInTheDocument()
  })

  it('renders expand more icon', () => {
    render(<Accordion />)
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })
})

const mockedArrayContent = [{ title: 'Title', content: 'Details of the content' }] as {
  title?: string
  content?: string
}[]

describe('Accordion List', () => {
  it('renders title content', () => {
    render(<Accordion content={mockedArrayContent} canExpandAll />)
    expect(screen.getByText(mockedArrayContent[0].title)).toBeInTheDocument()
  })

  it('renders details content', () => {
    render(<Accordion content={mockedArrayContent} defaultExpanded={0} />)
    expect(screen.getByText(mockedArrayContent[0].content)).toBeInTheDocument()
  })
})
