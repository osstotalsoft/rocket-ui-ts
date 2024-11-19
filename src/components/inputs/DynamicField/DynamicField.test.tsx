import React from 'react'
import DynamicField from './DynamicField'
import { ControlType } from './types'
import { render, userClick, screen } from 'testingUtils'

describe('DynamicField', () => {
  test('renders a text field if control type is "Text"', () => {
    const value = 'input value'
    render(<DynamicField controlType={ControlType.Text} value={value} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByDisplayValue(value)).toBeInTheDocument()
  })

  test('renders an integer field if control type is "Integer"', () => {
    render(<DynamicField controlType={ControlType.Integer} value={1000} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByDisplayValue('1000')).toBeInTheDocument()
  })

  test('renders a number field if control type is "Numeric"', () => {
    render(<DynamicField controlType={ControlType.Numeric} value={1000} thousandSeparator="%" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // the separators depend on the browser settings, so we should cover both cases
    expect(screen.queryByDisplayValue('1%000,00') || screen.queryByDisplayValue('1%000.00')).not.toBeNull()
  })

  test('renders a date field if control type is "Date"', () => {
    const value = new Date('2022-03-14 16:35:25.123')
    render(<DynamicField controlType={ControlType.Date} showPicker={'dateTime'} value={value} />)
    expect(screen.getAllByDisplayValue('14.03.2022 16:35')).toHaveLength(1)
  })

  test('renders an checkbox if control type is "Checkbox"', () => {
    render(<DynamicField controlType={ControlType.Checkbox} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('calls onChange with the toggled value when control type is "Checkbox"', () => {
    const mockOnChange = jest.fn()
    render(<DynamicField controlType={ControlType.Checkbox} value={false} onChange={mockOnChange} />)
    userClick(screen.getByRole('checkbox'))
    expect(mockOnChange).toHaveBeenCalledWith(true)
  })

  test('renders an autocomplete if control type is "Autocomplete"', () => {
    const mockOnChange = jest.fn()
    render(<DynamicField controlType={ControlType.Autocomplete} onChange={mockOnChange} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('can render a custom component if control type is "Custom"', () => {
    render(
      <DynamicField
        controlType={ControlType.Custom}
        CustomComponent={({ text }: { text: string }) => <span>{text}</span>}
        customComponentProps={{ text: 'test' }}
      />
    )
    expect(screen.getAllByText('test')).toHaveLength(1)
  })
})
