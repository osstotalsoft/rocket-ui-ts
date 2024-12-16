import React from 'react'
import { render, screen, userClick, fireEvent, waitFor } from '../../../testingUtils'
import { autocompleteClasses as classes } from '@mui/material/Autocomplete'
import { act } from '@testing-library/react'
import Autocomplete from './Autocomplete'

const basicOptions = [
  { id: 1, name: 'first option', displayName: 'First Option' },
  { id: 2, name: 'second option', displayName: 'Second Option', isDisabled: true },
  { id: 3, name: 'third option', displayName: 'Third Option' }
]

const stringOptions = ['first option', 'second option', 'third option']

const numericOptions = [1, 2, 3]

describe('Single-value Autocomplete', () => {
  it('renders open button', () => {
    render(<Autocomplete options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getByTitle('Open')).toBeInTheDocument()
  })

  it('does not break when options are undefined and displays "No options" message', () => {
    render(<Autocomplete open onChange={jest.fn()} />)
    expect(screen.getByText('No options')).toBeInTheDocument()
  })

  it('highlights the selected option', () => {
    render(<Autocomplete open options={basicOptions} value={2} onChange={jest.fn()} />)
    const focused = screen.getByRole('listbox').querySelector(`.${classes.focused}`)
    expect(focused).toHaveTextContent('second option')
  })

  it('is clearable', async () => {
    render(<Autocomplete isClearable value={1} options={basicOptions} onChange={jest.fn()} />)

    expect(screen.getByTitle('Clear')).toBeInTheDocument()
    expect(screen.getByRole<HTMLInputElement>('combobox')?.value).toBe('first option')

    userClick(screen.getByTitle('Clear'))
    await waitFor(() => {
      expect(screen.getByRole<HTMLInputElement>('combobox')?.value).toBe('')
    })
  })

  it('text field is read-only when isSearchable={false}', () => {
    render(<Autocomplete isSearchable={false} value={1} options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getByRole('combobox')).toHaveAttribute('readonly')
  })

  it('sets "No option" text to selections', () => {
    render(<Autocomplete options={[]} onChange={jest.fn()} />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('No options')).toBeInTheDocument()
  })

  // color is not working with this version of jest yet.
  it.skip('sets input text to color', () => {
    render(
      <Autocomplete
        open
        value={1}
        options={basicOptions}
        onChange={jest.fn()}
        inputTextFieldProps={{ sx: { color: 'rgb(255,0,0)' } }}
      />
    )
    expect(screen.getByRole('combobox')).toHaveStyle('color: rgb(255,0,0)')
  })

  describe('creatable', () => {
    test('displays created label text after typing some characters', () => {
      render(<Autocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={basicOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      expect(screen.getByText('Add "new"')).toBeInTheDocument()
    })

    test('displays created label text after typing some characters with multi select', () => {
      render(
        <Autocomplete
          isMultiSelection
          creatable
          createdLabel={'Add'}
          value={[]}
          options={basicOptions}
          onChange={jest.fn()}
        />
      )
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new option' } })
      expect(screen.getByText('Add "new option"')).toBeInTheDocument()
    })

    test('displays created label text after typing some characters with load options', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<Autocomplete open creatable={true} createdLabel={'Add'} onChange={jest.fn()} loadOptions={mockLoadOptions} />)

      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      expect(screen.getByText('Add "new"')).toBeInTheDocument()
    })

    test('does not show "Add" option for the ones that already exist', () => {
      render(<Autocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={basicOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'first option' } })
      expect(screen.queryByText('Add "first option"')).not.toBeInTheDocument()
    })

    test('calls onChange with the new option', async () => {
      const mockOnChange = jest.fn()
      render(
        <Autocomplete
          open
          creatable={true}
          valueKey="id"
          labelKey="displayName"
          createdLabel={'Add'}
          onChange={mockOnChange}
          options={basicOptions}
        />
      )
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      act(() => userClick(screen.getByText('Add "new"')))

      await waitFor(() => {
        expect(mockOnChange).toBeCalledWith('new', expect.anything(), 'createOption', expect.anything())
      })
    })
  })

  describe('text field', () => {
    test('displays label', () => {
      render(<Autocomplete options={basicOptions} onChange={jest.fn()} label={'Country'} />)
      expect(screen.getByText('Country')).toBeInTheDocument()
    })

    test('displays helperText', () => {
      render(<Autocomplete options={basicOptions} onChange={jest.fn()} helperText={'Mandatory field.'} />)
      expect(screen.getByText('Mandatory field.')).toBeInTheDocument()
    })

    test('adds an * for if required={true}', () => {
      render(<Autocomplete options={basicOptions} onChange={jest.fn()} label={'Country'} required />)
      expect(screen.getByText('*')).toBeInTheDocument()
    })

    test('displays custom styles when error={true}', () => {
      render(<Autocomplete options={basicOptions} onChange={jest.fn()} error={true} />)
      expect(screen.getByRole('combobox').parentElement).toHaveClass('Mui-error')
    })
  })

  describe('with value "primitive"', () => {
    test('displays value of [labelKey] property', () => {
      render(<Autocomplete labelKey={'displayName'} value={1} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('First Option')
    })

    test('displays value of name by default', () => {
      render(<Autocomplete value={1} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls onChange with selected option', () => {
      const mockOnChange = jest.fn()
      render(<Autocomplete open valueKey="name" options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(basicOptions[0], expect.anything(), 'selectOption', expect.anything())
    })

    test('can display a value that is number', () => {
      render(<Autocomplete value={1} labelKey="id" options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('1')
    })
  })

  describe('with object values', () => {
    test('displays value of labelKey property', () => {
      render(<Autocomplete labelKey={'displayName'} value={basicOptions[0]} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('First Option')
    })

    test('calls onChange with the option object', () => {
      const mockOnChange = jest.fn()
      render(<Autocomplete open valueKey="name" options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(basicOptions[0], expect.anything(), 'selectOption', expect.anything())
    })
  })

  describe('with primitive options', () => {
    test('displays selected option in input', () => {
      render(<Autocomplete value={'first option'} options={stringOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls onChange with selected option', () => {
      const mockOnChange = jest.fn()
      render(<Autocomplete open options={stringOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith('first option', expect.anything(), 'selectOption', expect.anything())
    })

    test('displays selected option in input for numeric options', () => {
      render(<Autocomplete value={1} options={numericOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('1')
    })

    test('calls onChange with selected option for numeric options', () => {
      const mockOnChange = jest.fn()
      render(<Autocomplete open options={numericOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))
      expect(mockOnChange).toBeCalledWith(1, expect.anything(), 'selectOption', expect.anything())
    })

    test('does not show "Add" option for the one that already exist with numeric options', () => {
      render(<Autocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={numericOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 1 } })
      expect(screen.queryByText('Add "1"')).not.toBeInTheDocument()
    })

    test('does not show "Add" option for the one that already exist with string options', () => {
      render(<Autocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={stringOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'first option' } })
      expect(screen.queryByText('Add "first option"')).not.toBeInTheDocument()
    })
  })
})

describe('Multi-value Autocomplete', () => {
  it('renders checkboxes for options when withCheckboxes={true}', () => {
    render(<Autocomplete open isMultiSelection withCheckboxes={true} options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getAllByRole('checkbox')).toBeDefined()
  })

  it('disables corresponding chip when option is disabled', () => {
    render(<Autocomplete isMultiSelection value={[1, 2]} options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getByText('second option').parentElement).toHaveClass('Mui-disabled')
  })

  // Open issue: https://github.com/mui/material-ui/issues/44603
  it.skip('does not clear disabled selections when "Clear" button is clicked', async () => {
    const mockGetOptionDisabled = jest.fn(option => option.isDisabled)
    const mockOnChange = jest.fn()
    render(
      <Autocomplete
        isMultiSelection
        isClearable
        value={[1, 2]}
        options={basicOptions}
        onChange={mockOnChange}
        getOptionDisabled={mockGetOptionDisabled}
      />
    )
    expect(screen.queryByText('first option')).toBeInTheDocument()
    act(() => userClick(screen.getByTitle('Clear')))

    await waitFor(() => {
      expect(mockOnChange).toBeCalledWith([basicOptions[1].id], expect.anything(), 'clear', expect.anything())
    })
  })

  describe('display from option when value is just the "id" (valueKey)', () => {
    test('displays values of name by default', () => {
      render(<Autocomplete isMultiSelection value={[1, 2]} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByText('first option')).toBeInTheDocument()
      expect(screen.getByText('second option')).toBeInTheDocument()
    })

    test('calls onChange with values of [basicOptions[0]] property', () => {
      const mockOnChange = jest.fn()
      render(<Autocomplete open isMultiSelection valueKey="name" options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith([basicOptions[0]], expect.anything(), 'selectOption', expect.anything())
    })
  })

  describe('default behavior when you send simple values', () => {
    test('displays values of [labelKey] property', () => {
      render(
        <Autocomplete isMultiSelection labelKey={'displayName'} value={[1, 2]} options={basicOptions} onChange={jest.fn()} />
      )
      expect(screen.getByText('First Option')).toBeInTheDocument()
      expect(screen.getByText('Second Option')).toBeInTheDocument()
    })

    test('calls onChange with the option object', () => {
      const mockOnChange = jest.fn()
      render(
        <Autocomplete
          open
          isMultiSelection={true}
          value={[]}
          valueKey="name"
          options={basicOptions}
          onChange={mockOnChange}
        />
      )
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(
        [{ id: 1, name: 'first option', displayName: 'First Option' }],
        expect.anything(),
        'selectOption',
        expect.anything()
      )
    })
  })
})

describe('Async Autocomplete', () => {
  test('calls loadOptions when options dialog is opened', async () => {
    const promise = Promise.resolve([])
    const mockLoadOptions = jest.fn(() => promise)
    render(<Autocomplete loadOptions={mockLoadOptions} onChange={jest.fn()} />)

    expect(mockLoadOptions).not.toBeCalled()
    act(() => userClick(screen.getByTitle('Open')))
    expect(mockLoadOptions).toBeCalled()
  })

  // not yet implemented
  test.skip('calls loadOptions at render when it has initial value', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<Autocomplete loadOptions={mockLoadOptions} value={1} onChange={jest.fn()} />)

    await waitFor(() => expect(mockLoadOptions).toBeCalled())
  })

  test('has loading state', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    const loadingText = 'Loading...'
    render(<Autocomplete loadingText={loadingText} loadOptions={mockLoadOptions} onChange={jest.fn()} />)

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText(loadingText)).toBeInTheDocument()
  })

  test('calls loadOptions with three parameters - when isPaginated is true', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<Autocomplete loadOptions={mockLoadOptions} value={'first option'} onChange={jest.fn()} isPaginated />)

    fireEvent.click(screen.getByRole('button'))
    expect(mockLoadOptions).toBeCalledWith('first option', [], null)
    expect(mockLoadOptions.mock.calls[0]).toHaveLength(3)
  })

  describe('loadOptions', () => {
    test('displays initial value even when there are no options', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<Autocomplete loadOptions={mockLoadOptions} value={basicOptions[0]} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls loadOptions with input value', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<Autocomplete loadOptions={mockLoadOptions} value={basicOptions[0]} onChange={jest.fn()} />)

      fireEvent.click(screen.getByRole('button'))
      expect(mockLoadOptions).toBeCalledWith('first option', expect.anything(), null)
      expect(mockLoadOptions.mock.calls[0]).toHaveLength(3)
    })
    test('loadOptions should be called only once, even if Autocomplete was opened multiple times', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<Autocomplete loadOptions={mockLoadOptions} onChange={jest.fn()} />)

      // open the Autocomplete
      act(() => userClick(screen.getByTitle('Open')))
      await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(3))

      // change the input value
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      // open the Autocomplete again
      act(() => userClick(screen.getByTitle('Open')))

      await waitFor(() => expect(mockLoadOptions).toHaveBeenCalledTimes(1))
    })
  })
})
