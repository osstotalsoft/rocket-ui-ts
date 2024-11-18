import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { render, userClick } from 'testingUtils'
import DateTime from './DateTime'

const value = new Date('2022-03-14 16:35:25.123')

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
    render(<DateTime showPicker="dateTime" value={value} localeFormat="fr" />)

    // act
    const pickers = screen.getAllByDisplayValue('14/03/2022 16:35')

    // assert
    expect(pickers).toHaveLength(1)
  })

  it('renders the date in united states', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} localeFormat="en-US" />)

    // act
    const picker = screen.getAllByDisplayValue('03/14/2022 04:35 PM')

    // assert
    expect(picker).toHaveLength(1)
  })

  it('renders the date in romanian', () => {
    // arrange
    render(<DateTime showPicker="dateTime" value={value} localeFormat="ro" />)

    // act
    const picker = screen.getAllByDisplayValue('14.03.2022 16:35')

    // assert
    expect(picker).toHaveLength(1)
  })
})

describe('Date Time buttons work', () => {
  it('clears the value', async () => {
    // arrange
    render(<DateTime value={value} label="Clear" isClearable={true} />)

    // act
    await waitFor(() => fireEvent.click(screen.getByTitle('Clear')))

    // assert
    expect(() => screen.getAllByDisplayValue('14.03.2022')).toThrow()
  })

  it('opens dialog to choose date', async () => {
    // arrange
    render(<DateTime value={null} />)
    expect(() => screen.getByRole('dialog')).toThrow()

    // act
    await waitFor(() => fireEvent.click(screen.getByLabelText('Choose date')))

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
    render(<DateTime value={value} slotProps={{ textField: { helperText } }} />)

    // act
    const helper = screen.getByText(helperText)

    // assert
    expect(helper).toBeTruthy()
  })
})
