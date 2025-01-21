import React from 'react'
import { render, screen, userClick, fireEvent, waitFor } from '../../../testingUtils'
import { autocompleteClasses as classes } from '@mui/material/Autocomplete'
import { act } from '@testing-library/react'
import getTheme from '../../themes'
import DeprecatedAutocomplete from './DeprecatedAutocomplete'

const theme = getTheme()

const basicOptions = [
  { id: 1, name: 'first option', displayName: 'First Option' },
  { id: 2, name: 'second option', displayName: 'Second Option', isDisabled: true },
  { id: 3, name: 'third option', displayName: 'Third Option' }
]

const stringOptions = ['first option', 'second option', 'third option']

const numericOptions = [1, 2, 3]

describe('Single-value DeprecatedAutocomplete', () => {
  it('renders open button', () => {
    render(<DeprecatedAutocomplete options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getByTitle('Open')).toBeInTheDocument()
  })

  it('does not break when options are undefined and displays "No options" message', () => {
    render(<DeprecatedAutocomplete open onChange={jest.fn()} />)
    expect(screen.getByText('No options')).toBeInTheDocument()
  })

  it('highlights the selected option', () => {
    render(<DeprecatedAutocomplete open simpleValue options={basicOptions} value={2} onChange={jest.fn()} />)
    const focused = screen.getByRole('listbox').querySelector(`.${classes.focused}`)
    expect(focused).toHaveTextContent('second option')
  })

  it.skip('is clearable', async () => {
    render(<DeprecatedAutocomplete isClearable simpleValue value={1} options={basicOptions} onChange={jest.fn()} />)

    expect(screen.getByTitle('Clear')).toBeInTheDocument()
    expect(screen.getByRole<HTMLInputElement>('combobox')?.value).toBe('first option')

    userClick(screen.getByTitle('Clear'))
    await waitFor(() => {
      expect(screen.getByRole<HTMLInputElement>('combobox')?.value).toBe('')
    })
  })

  it('text field is read-only when isSearchable={false}', () => {
    render(<DeprecatedAutocomplete simpleValue isSearchable={false} value={1} options={basicOptions} onChange={jest.fn()} />)
    expect(screen.getByRole('combobox')).toHaveAttribute('readonly')
  })

  it('sets "No option" text to typographyContentColor', () => {
    render(<DeprecatedAutocomplete open options={[]} onChange={jest.fn()} typographyContentColor={'secondary'} />)
    expect(screen.getByText('No options')).toHaveStyle(`color: ${theme.palette.secondary.main}`)
  })

  it('sets input text to inputSelectedColor', () => {
    render(
      <DeprecatedAutocomplete
        open
        simpleValue
        value={1}
        options={basicOptions}
        onChange={jest.fn()}
        inputSelectedColor={'rgb(255,0,0)'}
      />
    )
    expect(screen.getByRole('combobox')).toHaveStyle('color: rgb(255,0,0)')
  })

  describe('creatable', () => {
    test('displays created label text after typing some characters', () => {
      render(<DeprecatedAutocomplete open creatable={true} createdLabel={'Add'} onChange={jest.fn()} options={basicOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      expect(screen.getByText('Add "new"')).toBeInTheDocument()
    })

    test('does not show "Add" option for the ones that already exist', () => {
      render(<DeprecatedAutocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={basicOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'first option' } })
      expect(screen.queryByText('Add "first option"')).not.toBeInTheDocument()
    })

    test('when simpleValue={false} - calls onChange with the new option', async () => {
      const mockOnChange = jest.fn()
      render(
        <DeprecatedAutocomplete
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
        expect(mockOnChange).toBeCalledWith({ id: 'new', displayName: 'new' }, expect.anything(), 'selectOption')
      })
    })

    test('when simpleValue={true} - calls onChange with the new value', async () => {
      const mockOnChange = jest.fn()
      render(
        <DeprecatedAutocomplete
          open
          creatable={true}
          simpleValue={true}
          labelKey="displayName"
          createdLabel={'Add'}
          onChange={mockOnChange}
          options={basicOptions}
        />
      )
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      act(() => userClick(screen.getByText('Add "new"')))

      await waitFor(() => {
        expect(mockOnChange).toBeCalledWith('new', expect.anything(), 'selectOption')
      })
    })
  })

  describe('text field', () => {
    test('displays label', () => {
      render(<DeprecatedAutocomplete options={basicOptions} onChange={jest.fn()} label={'Country'} />)
      expect(screen.getByText('Country')).toBeInTheDocument()
    })

    test('displays helperText', () => {
      render(<DeprecatedAutocomplete options={basicOptions} onChange={jest.fn()} helperText={'Mandatory field.'} />)
      expect(screen.getByText('Mandatory field.')).toBeInTheDocument()
    })

    test('adds an * for if required={true}', () => {
      render(<DeprecatedAutocomplete options={basicOptions} onChange={jest.fn()} label={'Country'} required />)
      expect(screen.getByText('*')).toBeInTheDocument()
    })

    test('displays custom styles when error={true}', () => {
      render(<DeprecatedAutocomplete options={basicOptions} onChange={jest.fn()} error={true} />)
      expect(screen.getByRole('combobox').parentElement).toHaveClass('Mui-error')
    })
  })

  describe('with simpleValue={true}', () => {
    test('displays value of [labelKey] property', () => {
      render(<DeprecatedAutocomplete simpleValue labelKey={'displayName'} value={1} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('First Option')
    })

    test('displays value of name by default', () => {
      render(<DeprecatedAutocomplete simpleValue value={1} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls onChange with value of [valueKey] property', () => {
      const mockOnChange = jest.fn()
      render(<DeprecatedAutocomplete open simpleValue valueKey="name" options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith('first option', expect.anything(), 'selectOption')
    })

    test('calls onChange with value of id by default', () => {
      const mockOnChange = jest.fn()
      render(<DeprecatedAutocomplete open simpleValue options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(1, expect.anything(), 'selectOption')
    })

    test('can display a value that is number', () => {
      render(<DeprecatedAutocomplete simpleValue value={1} labelKey="id" options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('1')
    })
  })

  describe('with simpleValue={false} (default)', () => {
    test('displays value of labelKey property', () => {
      render(<DeprecatedAutocomplete labelKey={'displayName'} value={basicOptions[0]} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('First Option')
    })

    test('calls onChange with the option object', () => {
      const mockOnChange = jest.fn()
      render(<DeprecatedAutocomplete open valueKey="name" options={basicOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(basicOptions[0], expect.anything(), 'selectOption')
    })
  })

  describe('with primitive options', () => {
    test('displays selected option in input', () => {
      render(<DeprecatedAutocomplete value={'first option'} options={stringOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls onChange with selected option', () => {
      const mockOnChange = jest.fn()
      render(<DeprecatedAutocomplete open options={stringOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith('first option', expect.anything(), 'selectOption')
    })

    test('displays selected option in input for numeric options', () => {
      render(<DeprecatedAutocomplete value={1} options={numericOptions} onChange={jest.fn()} />)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('1')
    })

    test('calls onChange with selected option for numeric options', () => {
      const mockOnChange = jest.fn()
      render(<DeprecatedAutocomplete open options={numericOptions} onChange={mockOnChange} />)
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))
      expect(mockOnChange).toBeCalledWith(1, expect.anything(), 'selectOption')
    })

    test('does not show "Add" option for the one that already exist with numeric options', () => {
      render(<DeprecatedAutocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={numericOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 1 } })
      expect(screen.queryByText('Add "1"')).not.toBeInTheDocument()
    })

    test('does not show "Add" option for the one that already exist with string options', () => {
      render(<DeprecatedAutocomplete open creatable createdLabel={'Add'} onChange={jest.fn()} options={stringOptions} />)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'first option' } })
      expect(screen.queryByText('Add "first option"')).not.toBeInTheDocument()
    })
  })
})

describe('Multi-value DeprecatedAutocomplete', () => {
  it('renders checkboxes for options when withCheckboxes={true}', () => {
    render(
      <DeprecatedAutocomplete open isMultiSelection withCheckboxes={true} simpleValue options={basicOptions} onChange={jest.fn()} />
    )
    expect(screen.getAllByRole('checkbox')).toBeDefined()
  })

  it('disables corresponding chip when option is disabled', () => {
    const mockGetOptionDisabled = jest.fn(option => option.isDisabled)
    render(
      <DeprecatedAutocomplete
        isMultiSelection
        simpleValue
        value={[1, 2]}
        options={basicOptions}
        onChange={jest.fn()}
        getOptionDisabled={mockGetOptionDisabled}
      />
    )
    expect(screen.getByText('second option').parentElement).toHaveClass('Mui-disabled')
  })

  it('does not clear disabled selections when "Clear" button is clicked', async () => {
    const mockGetOptionDisabled = jest.fn(option => option.isDisabled)
    const mockOnChange = jest.fn()
    render(
      <DeprecatedAutocomplete
        isMultiSelection
        isClearable
        simpleValue
        value={[1, 2]}
        options={basicOptions}
        onChange={mockOnChange}
        getOptionDisabled={mockGetOptionDisabled}
      />
    )
    expect(screen.queryByText('first option')).toBeInTheDocument()
    act(() => userClick(screen.getByTitle('Clear')))

    await waitFor(() => {
      expect(mockOnChange).toBeCalledWith([basicOptions[1].id], expect.anything(), 'clear')
    })
  })

  describe('creatable', () => {
    test('displays created label text after typing some characters (simpleValue={false})', () => {
      render(
        <DeprecatedAutocomplete
          isMultiSelection
          creatable
          createdLabel={'Add'}
          value={[]}
          options={basicOptions}
          onChange={jest.fn()}
        />
      )
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new option' } })
      expect(screen.getByText('Add "new option"')).toBeInTheDocument()
    })
  })

  describe('with simpleValue={true}', () => {
    test('displays values of [labelKey] property', () => {
      render(
        <DeprecatedAutocomplete
          isMultiSelection
          simpleValue
          labelKey={'displayName'}
          value={[1, 2]}
          options={basicOptions}
          onChange={jest.fn()}
        />
      )
      expect(screen.getByText('First Option')).toBeInTheDocument()
      expect(screen.getByText('Second Option')).toBeInTheDocument()
    })

    test('displays values of name by default', () => {
      render(<DeprecatedAutocomplete isMultiSelection simpleValue value={[1, 2]} options={basicOptions} onChange={jest.fn()} />)
      expect(screen.getByText('first option')).toBeInTheDocument()
      expect(screen.getByText('second option')).toBeInTheDocument()
    })

    test('calls onChange with values of [valueKey] property', () => {
      const mockOnChange = jest.fn()
      render(
        <DeprecatedAutocomplete open isMultiSelection simpleValue valueKey="name" options={basicOptions} onChange={mockOnChange} />
      )
      const options = screen.getAllByRole('option')
      act(() => userClick(options[0]))

      expect(mockOnChange).toBeCalledWith(['first option'], expect.anything(), 'selectOption')
    })

    test('can display a value that is number', () => {
      render(
        <DeprecatedAutocomplete isMultiSelection simpleValue value={[1]} labelKey="id" options={basicOptions} onChange={jest.fn()} />
      )
      expect(screen.getByText('1')).toBeInTheDocument()
    })
  })

  describe('with simpleValue={false} (default)', () => {
    test('displays values of [labelKey] property', () => {
      render(
        <DeprecatedAutocomplete
          isMultiSelection
          simpleValue
          labelKey={'displayName'}
          value={[1, 2]}
          options={basicOptions}
          onChange={jest.fn()}
        />
      )
      expect(screen.getByText('First Option')).toBeInTheDocument()
      expect(screen.getByText('Second Option')).toBeInTheDocument()
    })

    test('calls onChange with the option object', () => {
      const mockOnChange = jest.fn()
      render(
        <DeprecatedAutocomplete
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
        'selectOption'
      )
    })
  })
})

describe('Async DeprecatedAutocomplete', () => {
  test('calls loadOptions when options dialog is opened', async () => {
    const promise = Promise.resolve()
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete loadOptions={mockLoadOptions} onChange={jest.fn()} />)

    expect(mockLoadOptions).not.toBeCalled()
    act(() => userClick(screen.getByTitle('Open')))
    expect(mockLoadOptions).toBeCalled()
    await act(() => promise)
  })

  test('calls loadOptions at render when defaultOptions={true}', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete loadOptions={mockLoadOptions} simpleValue defaultOptions={true} onChange={jest.fn()} />)

    expect(mockLoadOptions).toBeCalled()
    await act(() => promise)
  })

  test('calls loadOptions at render when it has initial value', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete simpleValue loadOptions={mockLoadOptions} value={1} onChange={jest.fn()} />)

    await waitFor(() => expect(mockLoadOptions).toBeCalled())
    await act(() => promise)
  })

  test('has loading state', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    const loadingText = 'Loading...'
    render(
      <DeprecatedAutocomplete
        open
        loadingText={loadingText}
        loadOptions={mockLoadOptions}
        value={basicOptions[0]}
        defaultOptions={true}
        onChange={jest.fn()}
      />
    )

    expect(screen.getByText(loadingText)).toBeInTheDocument()
    await act(() => promise)
    expect(screen.queryByText(loadingText)).not.toBeInTheDocument()
  })

  test('calls loadOptions with three parameters - when isPaginated is true', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(
      <DeprecatedAutocomplete
        simpleValue
        loadOptions={mockLoadOptions}
        value={1}
        defaultOptions={basicOptions}
        onChange={jest.fn()}
        isPaginated
      />
    )

    expect(mockLoadOptions).toBeCalledWith('first option', [], null)
    expect(mockLoadOptions.mock.calls[0]).toHaveLength(3)
    await act(() => promise)
  })

  describe('with simpleValue={false}', () => {
    test('displays initial value - when defaultOptions={false}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<DeprecatedAutocomplete loadOptions={mockLoadOptions} value={basicOptions[0]} onChange={jest.fn()} />)
      await act(() => promise)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls loadOptions with input value - when defaultOptions={true}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete loadOptions={mockLoadOptions} value={basicOptions[0]} defaultOptions={true} onChange={jest.fn()} />
      )
      expect(mockLoadOptions).toBeCalledWith('first option')
      expect(mockLoadOptions.mock.calls[0]).toHaveLength(1)
      await act(() => promise)
    })

    test('calls loadOptions with input value - when defaultOptions is an array', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete
          loadOptions={mockLoadOptions}
          value={basicOptions[0]}
          defaultOptions={basicOptions}
          onChange={jest.fn()}
        />
      )
      expect(mockLoadOptions).toBeCalledWith('first option')
      expect(mockLoadOptions.mock.calls[0]).toHaveLength(1)
      await act(() => promise)
    })
  })

  describe('with simpleValue={true}', () => {
    test('calls loadOptions with input value', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<DeprecatedAutocomplete simpleValue loadOptions={mockLoadOptions} value={1} defaultOptions={true} onChange={jest.fn()} />)
      await act(() => promise)

      expect(mockLoadOptions).toBeCalledWith(undefined)
      await act(() => promise)

      expect(mockLoadOptions).toBeCalledWith('first option')
      expect(mockLoadOptions).toBeCalledTimes(2)
    })

    test('displays initial value - when defaultOptions={true}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<DeprecatedAutocomplete loadOptions={mockLoadOptions} simpleValue defaultOptions value={1} onChange={jest.fn()} />)
      await act(() => promise)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('displays initial value - when defaultOptions={false}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<DeprecatedAutocomplete loadOptions={mockLoadOptions} simpleValue value={1} onChange={jest.fn()} />)
      await act(() => promise)
      expect(screen.getByRole<HTMLInputElement>('combobox').value).toBe('first option')
    })

    test('calls loadOptions with input value - when defaultOptions is an array', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete
          simpleValue
          loadOptions={mockLoadOptions}
          value={1}
          defaultOptions={basicOptions}
          onChange={jest.fn()}
        />
      )
      expect(mockLoadOptions).toBeCalledWith('first option')
      expect(mockLoadOptions.mock.calls[0]).toHaveLength(1)
      await act(() => promise)
    })

    test('does not call loadOptions at render if defaultOptions is not true', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(<DeprecatedAutocomplete simpleValue loadOptions={mockLoadOptions} onChange={jest.fn()} />)
      expect(mockLoadOptions).not.toBeCalled()
      await act(() => promise)
    })

    test('does not call loadOptions at render for initial value if defaultOptions={false}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete simpleValue loadOptions={mockLoadOptions} value={1} defaultOptions={false} onChange={jest.fn()} />
      )
      expect(mockLoadOptions).not.toBeCalled()
      await act(() => promise)
    })
  })

  describe('creatable', () => {
    test('displays created label text after typing some characters - when simpleValue={false}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete
          open
          creatable={true}
          createdLabel={'Add'}
          onChange={jest.fn()}
          loadOptions={mockLoadOptions}
          defaultOptions
        />
      )

      await act(() => promise)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      await act(() => promise)
      expect(screen.getByText('Add "new"')).toBeInTheDocument()
    })

    test('displays created label text after typing some characters - when simpleValue={true}', async () => {
      const promise = Promise.resolve(basicOptions)
      const mockLoadOptions = jest.fn(() => promise)
      render(
        <DeprecatedAutocomplete
          open
          creatable={true}
          simpleValue
          createdLabel={'Add'}
          onChange={jest.fn()}
          loadOptions={mockLoadOptions}
          defaultOptions
        />
      )

      await act(() => promise)
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'new' } })
      await act(() => promise)

      expect(screen.getByText('Add "new"')).toBeInTheDocument()
    })
  })
})

describe('Async Multi-value DeprecatedAutocomplete', () => {
  test('calls loadOptions at render when it has initial value - when simpleValue={true}', async () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete isMultiSelection simpleValue loadOptions={mockLoadOptions} value={[1]} onChange={jest.fn()} />)
    await act(() => promise)
    expect(mockLoadOptions).toBeCalledTimes(1)
  })

  test('does not call loadOptions if no initial value was provided - when simpleValue={true}', () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete isMultiSelection simpleValue loadOptions={mockLoadOptions} value={[]} onChange={jest.fn()} />)
    expect(mockLoadOptions).not.toBeCalled()
  })

  test('does not call loadOptions if no initial value was provided - when simpleValue={false}', () => {
    const promise = Promise.resolve(basicOptions)
    const mockLoadOptions = jest.fn(() => promise)
    render(<DeprecatedAutocomplete isMultiSelection loadOptions={mockLoadOptions} value={[]} onChange={jest.fn()} />)
    expect(mockLoadOptions).not.toBeCalled()
  })
})
