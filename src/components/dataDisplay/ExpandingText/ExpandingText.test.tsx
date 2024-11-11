import React, { act } from 'react'
import ExpandingText from './ExpandingText'
import { fireEvent, render, screen } from '../../../testingUtils'
import getTheme from '../../themes'

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra in neque non euismod. Nunc convallis ornare sem vel iaculis. Sed in condimentum sapien. Morbi viverra, dolor sed sollicitudin tristique, dui sem pretium odio, nec bibendum nibh velit vel turpis. Maecenas elit velit, molestie quis cursus eu, dignissim a elit. Etiam accumsan cursus ipsum, sit amet semper arcu faucibus sed. Donec aliquam fermentum ligula, a cursus lacus finibus non. Fusce id sollicitudin dui. Suspendisse malesuada lorem enim, at euismod neque tincidunt pellentesque.'

const theme = getTheme()

const showMoreText = 'Show more'
const showLessText = 'Show less'

describe('ExpandingText', () => {
  test('uses the link color from the theme', () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} />)
    expect(screen.getByText(showMoreText)).toHaveStyle(`color: ${theme.palette.link.main}`)
  })

  test('displays correct items when collapsed', () => {
    const minLength = 250
    render(<ExpandingText text={text} minLength={minLength} showMoreText={showMoreText} />)

    expect(screen.getByText(showMoreText)).toBeInTheDocument()
    expect(screen.getByText(`${text.substring(0, minLength)}...`)).toBeInTheDocument()
  })

  test('displays correct items when expanded', async () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} showLessText={showLessText} />)
    await act(async () => fireEvent.click(screen.getByText(showMoreText)))

    expect(screen.getByText(showLessText)).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('displays full text when minLength is greater than text length', () => {
    render(<ExpandingText text={text} minLength={1000} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('applies the value received for display prop to text and button', () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} display="inline-block" />)

    expect(screen.getByText(showMoreText)).toHaveStyle('display: inline-block')
  })

  test('button text color can be overridden through the sx prop', () => {
    const color = 'red'
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} sx={{ color }} />)

    expect(screen.getByText(showMoreText)).toHaveStyle(`color: ${color}`)
  })

  test('typography wrapping the text is customizable', () => {
    render(<ExpandingText text={text} minLength={250} textProps={{ variant: 'body2' }} expanded={true} />)

    expect(screen.getByText(text)).toHaveClass('MuiTypography-body2')
  })

  test('typography wrapping the button text is customizable', () => {
    render(
      <ExpandingText
        text={text}
        minLength={250}
        showMoreText={showMoreText}
        expandingActionProps={{ variant: 'overline', emphasis: 'bold' }}
      />
    )

    expect(screen.getByText(showMoreText)).toHaveClass('MuiTypography-overline')
    expect(screen.getByText(showMoreText)).toHaveStyle('font-weight: bold')
  })
})
