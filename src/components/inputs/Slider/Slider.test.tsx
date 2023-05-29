import React from 'react'
import Slider from './Slider'
import { render, screen, fireEvent, waitFor } from 'testingUtils'

const sliderProps = {
  min: 1,
  max: 12,
  step: 1,
  decimalScale: 0
}

describe('SimpleSlider', () => {
  test('renders label', () => {
    render(<Slider label="Label" {...sliderProps} />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  test('renders helperText', () => {
    render(<Slider helperText="Helper text" {...sliderProps} />)
    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  test('disables text field when `disabled` is true', () => {
    render(<Slider disabled={true} {...sliderProps} />)
    expect(screen.getByRole('textbox')).toHaveClass('Mui-disabled')
  })

  test('displays min and max labels when `showSliderLimits` is true', () => {
    render(<Slider showSliderLimits={true} {...sliderProps} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  test('when `error` is true, applies the error styles to the helper text and label', () => {
    render(<Slider error={true} label={'Label'} helperText="Helper text" {...sliderProps} />)
    expect(screen.getByText('Label')).toHaveClass('Mui-error')
    expect(screen.getByText('Helper text')).toHaveClass('Mui-error')
  })

  test('adds an * if `required` is true', () => {
    render(<Slider label={'Label'} required={true} {...sliderProps} />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  test('renders correct thousands and decimals separators', async () => {
    render(<Slider value={1000} thousandSeparator="." decimalSeparator="," min={0} max={10000} />)
    expect(await screen.findByDisplayValue('1.000,00')).toBeInTheDocument()
  })

  test('takes decimalScale into consideration', async () => {
    render(<Slider value={10} min={0} max={100} decimalScale={0} step={1} />)
    expect(await screen.queryAllByDisplayValue('10')).toHaveLength(2)
  })

  test('calls onChange with the new value when input text changes and is in range', async () => {
    const mockOnChange = jest.fn()
    render(<Slider {...sliderProps} onChange={mockOnChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 3 } })
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(3), { timeout: 2000 })
  })

  test('doesn\'t call onChange when the value is out of range', async () => {
    const mockOnChange = jest.fn()
    render(<Slider {...sliderProps} onChange={mockOnChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 3 } })
    await waitFor(() => expect(mockOnChange).not.toHaveBeenCalled(), { timeout: 2000 })
  })

  test('displays error state when value is not in range', async () => {
    render(<Slider label={'Label'} {...sliderProps} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 1000 } })

    await waitFor(() => expect(screen.getByText('Label')).toHaveClass('Mui-error'), { timeout: 2000 })
    await waitFor(() => expect(screen.getByRole('slider').parentElement.parentElement).toHaveClass('MuiSlider-colorError'), {
      timeout: 2000
    })
  })
})
