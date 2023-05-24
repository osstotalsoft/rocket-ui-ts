import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import DateTime from './DateTime'
import { render, userClick } from 'testingUtils'

const value = new Date('2022-03-14 16:35:25.123 GMT+0200')

describe('Standard Date Picker', () => {
  it('renders a Date component by default', () => {
    // arrange
    render(
      <>
        <DateTime showPicker="date" value={value} />
        <DateTime value={value} />
      </>
    )

    // act
    const pickers = screen.getAllByDisplayValue('14.03.2022')

    // assert
    expect(pickers).toHaveLength(2)
  })

  it('renders a DateTime component', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} />)

    // act
    const picker = screen.getAllByDisplayValue('14.03.2022 16:35')

    // assert
    expect(picker).toHaveLength(1)
  })

  it('renders a Time component', () => {
    // arrange
    render(<DateTime showPicker="time" value={value} />)

    // act
    const picker = screen.getAllByDisplayValue('16:35')

    // assert
    expect(picker).toHaveLength(1)
  })
})

describe('Date Picker Formats', () => {
  it('renders the date in french', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} format="fr" />)

    // act
    const pickers = screen.getAllByDisplayValue('14/03/2022 16:35')

    // assert
    expect(pickers).toHaveLength(1)
  })

  it('renders the date in united states', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} format="en-US" />)

    // act
    const picker = screen.getAllByDisplayValue('03/14/2022 04:35 pm')

    // assert
    expect(picker).toHaveLength(1)
  })

  it('renders the date in romanian', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} format="ro" />)

    // act
    const picker = screen.getAllByDisplayValue('14.03.2022 16:35')

    // assert
    expect(picker).toHaveLength(1)
  })
})

describe('Date Time buttons work', () => {
  it('clears the value', async () => {
    // arrange
    render(<DateTime value={value} clearable={true} />)

    // act
    await waitFor(() => fireEvent.click(screen.getByLabelText('Clear')))

    // assert
    expect(() => screen.getAllByDisplayValue('14.03.2022')).toThrow()
  })

  it('opens dialog to choose date', async () => {
    // arrange
    render(<DateTime value={value} />)
    expect(() => screen.getByRole('dialog')).toThrow()

    // act
    await waitFor(() => fireEvent.click(screen.getByLabelText('Open')))

    // assert
    expect(() => screen.getByRole('dialog')).not.toThrow()
  })

  it('closes dialog', async () => {
    // arrange
    const mockOnClose = jest.fn()
    render(<DateTime value={value} onClose={mockOnClose} open />)

    // act
    await waitFor(() => userClick(screen.getByRole('dialog').parentElement))

    // assert
    // expect(() => screen.getByRole('dialog')).toThrow()
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})

describe('Date Time helper text', () => {
  it('displays helper text', () => {
    // arrange
    const helperText = 'Helper Text'
    render(<DateTime value={value} helperText={helperText} />)

    // act
    const helper = screen.getByText(helperText)

    // assert
    expect(helper).toBeTruthy()
  })
})
