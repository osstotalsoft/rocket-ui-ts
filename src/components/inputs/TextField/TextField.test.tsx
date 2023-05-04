// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { render, userClick, waitFor, screen, fireEvent } from '../../../testingUtils'
import { TextField, getTheme } from 'components'

const theme = getTheme()
const defaultFont = theme.typography.defaultFont

const stringValue = 'johnsmith@gmail.com'

describe('TextField', () => {
  test('font family of the input is taken from the default font', () => {
    render(<TextField value={stringValue} InputProps={{ 'data-testid': 'mui-input-base-root' } as any} />)
    expect(screen.getByTestId('mui-input-base-root')).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
  })

  test('font family of the label is taken from the default font', () => {
    render(<TextField label={stringValue} InputLabelProps={{ 'data-testid': 'mui-input-label' } as any} />)
    expect(screen.getByTestId('mui-input-label')).toHaveStyle(`font-family: ${defaultFont.fontFamily}`)
  })

  test('should have the `standard` default variant', () => {
    render(<TextField InputProps={{ 'data-testid': 'mui-input-base-root' } as any} />)

    expect(screen.getByTestId('mui-input-base-root')).toHaveClass('MuiInput-root')
    expect(screen.getByTestId('mui-input-base-root')).not.toHaveClass('MuiOutlinedInput-root')
    expect(screen.getByTestId('mui-input-base-root')).not.toHaveClass('MuiFilledInput-root')
  })

  test('when using debounceBy, doesn\'t call onChange immediately', async () => {
    const mockOnChange = jest.fn()
    render(<TextField onChange={mockOnChange} debounceBy={500} value={stringValue} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'A' } })
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'B' } })
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'C' } })

    expect(mockOnChange).not.toHaveBeenCalled()
    await waitFor(
      () => {
        expect(mockOnChange).toHaveBeenCalledWith('C')
        expect(mockOnChange).toHaveBeenCalledTimes(1)
      },
      { timeout: 600 }
    )
  })

  test('erases the value on clear button click', async () => {
    render(<TextField value={stringValue} inputProps={{ 'data-testid': 'input-root' }} isClearable={true} />)
    userClick(screen.getByLabelText('Clear'))

    await waitFor(() => expect((screen.getByTestId('input-root') as HTMLInputElement | null)?.value).toBeUndefined())
  })

  test('can have a start adornment', () => {
    render(<TextField value={stringValue} startAdornment={<div>{'start'}</div>} />)
    expect(screen.getByText('start')).toBeInTheDocument()
  })

  test('can have an end adornment', () => {
    render(<TextField value={stringValue} startAdornment={<div>{'end'}</div>} />)
    expect(screen.getByText('end')).toBeInTheDocument()
  })
})

describe('Numeric TextField', () => {
  test('default thousand and decimal separators can be overridden', async () => {
    render(<TextField isNumeric={true} value={1000} thousandSeparator="." decimalSeparator="," />)
    expect(await screen.findByDisplayValue('1.000,00')).toBeInTheDocument()
  })

  test('doesn\'t separate thousands when `thousandSeparator` is false', async () => {
    render(<TextField isNumeric={true} value={1000} thousandSeparator={false} decimalScale={0} />)
    expect(await screen.findByDisplayValue('1000')).toBeInTheDocument()
  })

  test('doesn\'t display any decimals when decimal scale is 0', async () => {
    render(<TextField isNumeric={true} value={1000} thousandSeparator={false} decimalScale={0} />)
    expect(await screen.findByDisplayValue('1000')).toBeInTheDocument()
  })

  test('displays custom format based on the provided language', async () => {
    render(<TextField isNumeric={true} value={1000} language="de-DE" />)
    expect(await screen.findByDisplayValue('1.000,00')).toBeInTheDocument()
  })

  test('works with numeric strings', async () => {
    render(<TextField isNumeric={true} value={'1000'} thousandSeparator={false} decimalScale={0} />)
    expect(await screen.findByDisplayValue('1000')).toBeInTheDocument()
  })

  test('calls onChange with the input value', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isNumeric={true} onChange={mockOnChange} value={2} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 3 } })
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(3), { timeout: 2000 })
  })

  test('adds `currency` as a prefix if provided', async () => {
    render(<TextField isNumeric={true} value={1000} currency="EUR" language="de-DE" />)
    expect(await screen.findByDisplayValue('€1.000,00')).toBeInTheDocument()
  })

  test('can have a start adornment', () => {
    render(<TextField isNumeric={true} value={stringValue} startAdornment={<div>{'start'}</div>} />)
    expect(screen.getByText('start')).toBeInTheDocument()
  })

  test('can have an end adornment', () => {
    render(<TextField isNumeric={true} value={stringValue} startAdornment={<div>{'end'}</div>} />)
    expect(screen.getByText('end')).toBeInTheDocument()
  })

  test('forwards inputProps to the input component', () => {
    render(<TextField isNumeric={true} inputProps={{ 'data-testid': 'input-root' }} />)
    expect(screen.getByTestId('input-root')).toBeInTheDocument()
  })

  test('forwards InputProps to the input component', () => {
    render(<TextField isNumeric={true} InputProps={{ 'data-testid': 'input-root' } as any} />)
    expect(screen.getByTestId('input-root')).toBeInTheDocument()
  })

  test('can have min limit', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isNumeric={true} onChange={mockOnChange} value={0} minValue={0} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: -3 } })

    await waitFor(() => expect(mockOnChange).not.toHaveBeenCalledWith(-3))
  })

  test('can have max limit', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isNumeric={true} onChange={mockOnChange} value={0} maxValue={10} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 15 } })

    await waitFor(() => expect(mockOnChange).not.toHaveBeenCalledWith(15))
  })

  test('erases the value on clear button click for formatted input', async () => {
    render(
      <TextField
        isNumeric={true}
        value={'544059305'}
        inputProps={{ format: '+40 (###) ### ###', mask: '_', allowEmptyFormatting: true }}
        isClearable={true}
      />
    )
    userClick(screen.getByLabelText('Clear'))

    await waitFor(() => expect((screen.getByRole('textbox') as HTMLInputElement | null)?.value).toBeUndefined())
  })
})

describe('Stepper', () => {
  test('renders + and - buttons', () => {
    render(<TextField isStepper={true} value={0} />)
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
  })

  test('input value is centered', () => {
    render(<TextField isStepper={true} value={0} decimalScale={0} />)
    expect(screen.getByRole('textbox')).toHaveStyle('text-align: center')
  })

  test('increases by 1 when `+` is clicked', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isStepper={true} value={0} decimalScale={0} onChange={mockOnChange} />)
    userClick(screen.getByText('+'))
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(1))
  })

  test('decreases by 1 when `-` is clicked', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isStepper={true} value={0} decimalScale={0} onChange={mockOnChange} />)
    userClick(screen.getByText('-'))
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(-1))
  })

  test('doesn\'t increase if new value is greater than max', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isStepper={true} value={0} decimalScale={0} maxValue={0} onChange={mockOnChange} />)
    userClick(screen.getByText('+'))
    await waitFor(() => expect(mockOnChange).not.toHaveBeenCalledWith(1))
  })

  test('doesn\'t decrease if new value is lower than min', async () => {
    const mockOnChange = jest.fn()
    render(<TextField isStepper={true} value={0} decimalScale={0} minValue={0} onChange={mockOnChange} />)
    userClick(screen.getByText('-'))
    await waitFor(() => expect(mockOnChange).not.toHaveBeenCalledWith(-1))
  })

  test('if value is empty, clicking `-` will set it to -step', async () => {
    const mockOnChange = jest.fn()
    const step = 2
    render(<TextField isStepper={true} value={''} step={step} decimalScale={0} onChange={mockOnChange} />)
    userClick(screen.getByText('-'))
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(-step))
  })

  test('if value is empty, clicking `+` will set it to step', async () => {
    const mockOnChange = jest.fn()
    const step = 2
    render(<TextField isStepper={true} value={''} step={step} decimalScale={0} onChange={mockOnChange} />)
    userClick(screen.getByText('+'))
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(step))
  })
})
