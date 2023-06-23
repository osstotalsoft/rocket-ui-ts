// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { fireEvent, render, screen, userClick, waitFor } from '../../../testingUtils'
import { ListFilter, ListFilterProps, SortableColumn, UserPreference } from '../../index'

const localizedStrings = {
  OrderAscending: 'Ascending',
  OrderDescending: 'Descending',
  FilterName: 'Filter name',
  Implicit: 'Implicit',
  UserPreference: 'User preference',
  UserPreferences: 'User preferences',
  DeleteUserPreference: 'Do you want to delete the preference?',
  Search: 'Search',
  ResetFilters: 'Reset filter values',
  ShowFilters: 'Show filters',
  ChooseFilters: 'Choose filters',
  OrderBy: 'Order by',
  InOrder: 'In order',
  EditUserPreferences: 'Edit user preferences',
  Download: 'Download',
  ChooseFields: 'Choose fields to be displayed',
  Delete: 'Delete',
  Add: 'Add',
  Close: 'Close'
}

const filters= {
  orderByColumnName: 'name',
  orderByDescending: false,
  fullTextFilter: '',
  code: '',
  name: ''
}

const sortableColumns: Array<SortableColumn> = [
  {
    dbColumnName: 'name',
    displayName: 'Name'
  },
  {
    dbColumnName: 'code',
    displayName: 'Code'
  }
]

export const visibleFilters: ListFilterProps['visibleFilters'] = [
  {
    defaultValue: null,
    fieldName: 'name',
    isVisible: true,
    label: 'Name'
  },
  {
    defaultValue: null,
    fieldName: 'code',
    isVisible: true,
    label: 'Code'
  }
]

export const visibleFields = [
  {
    fieldName: 'name',
    isVisible: true,
    label: 'Name'
  },
  {
    fieldName: 'code',
    isVisible: true,
    label: 'Code'
  }
]

export const userPreferencesList: Array<UserPreference> = [
  {
    fields: [
      {
        fieldName: 'name',
        isVisible: true,
        label: 'Name'
      },
      {
        fieldName: 'code',
        isVisible: true,
        label: 'Code'
      }
    ],
    filterName: 'pref 1',
    filters: [
      {
      defaultValue: '',
      fieldName: 'name',
      isVisible: true,
      label: 'Name'
    },
    {
      defaultValue: '',
      fieldName: 'code',
      isVisible: true,
      label: 'Code'
    }],
    implicit: true,
    isDefault: true,
    order: {
      orderByColumnName: 'name',
      orderByColumns: null,
      orderByDescending: false
    }
  },
  {
    fields: [
      {
        fieldName: 'name',
        isVisible: true,
        label: 'Name'
      },
      {
        fieldName: 'code',
        isVisible: false,
        label: 'Code'
      }
    ],
    filterName: 'pref 2',
    filters: [
      {
      defaultValue: 't',
      fieldName: 'name',
      isVisible: true,
      label: 'Name'
    },
    {
      defaultValue: '',
      fieldName: 'code',
      isVisible: true,
      label: 'Code'
    }],
    implicit: false,
    isDefault: false,
    order: {
      orderByColumnName: 'code',
      orderByColumns: null,
      orderByDescending: true
    }
  },
  {
    fields: [
      {
        fieldName: 'name',
        isVisible: true,
        label: 'Name'
      },
      {
        fieldName: 'code',
        isVisible: true,
        label: 'Code'
      }
    ],
    filterName: 'pref 3',
    filters: [
      {
      defaultValue: '',
      fieldName: 'name',
      isVisible: false,
      label: 'Name'
    },
    {
      defaultValue: 'CN',
      fieldName: 'code',
      isVisible: true,
      label: 'Code'
    }],
    implicit: false,
    isDefault: false,
    order: {
      orderByColumnName: 'code',
      orderByColumns: null,
      orderByDescending: true
    }
  }
]

describe('ListFilter search field', () => {
  test('renders a search field', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    expect(screen.getByRole('textbox', {name: 'Search'})).toBeInTheDocument()
  })

  test('fullTextFilter is changed when user types in the search field', async () => {
    const mockOnChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={mockOnChange} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    await waitFor(() => fireEvent.change(screen.getByRole('textbox', {name: 'Search'}), { target: { value: 'A' } }))
    expect(mockOnChange).toHaveBeenCalledWith('fullTextFilter', 'A')
  })
})

describe('ListFilter "Order by" combobox', () => {
  test('renders an "Order by" combobox', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    expect(screen.getByLabelText('Order by')).toHaveValue('Name')
  })

  test('changes orderByColumnName to the selected value when it is changed', async () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    const orderByCombobox = screen.getByRole('combobox', {name: 'Order by'})
    await waitFor(() => userClick(orderByCombobox))
    await waitFor(() => userClick(screen.getByRole('option', {name: 'Code'})))
    expect(orderByCombobox).toHaveValue('Code')
  })
})

describe('ListFilter "In order" combobox', () => {
  test('renders an "In order" combobox', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    const inOrderCombobox = screen.getByRole('combobox', {name: 'In order'})
    expect(inOrderCombobox).toHaveValue('Ascending')
  })

  test('changes orderByDescending to true when the "Descending" option is selected', async () => {
    const mockOnChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={mockOnChange} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
    />)
    const inOrderCombobox = screen.getByRole('combobox', {name: 'In order'})
    await waitFor(() => userClick(inOrderCombobox))
    await waitFor(() => userClick(screen.getByRole('option', {name: 'Descending'})))
    expect(mockOnChange).toHaveBeenCalledWith('orderByDescending', true)
  })
})

describe('ListFilter download Button', () => {
  test('renders a download button', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      downloadEnabled={true}
      downloadButtonVisible={true}
      onDownload={jest.fn()}
    />)
    const downloadButton = screen.getByRole('button', {name: 'Download'})
    expect(downloadButton).toBeInTheDocument()
  })

  test('renders a disabled download button', async () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings}
      downloadEnabled={false}
      downloadButtonVisible={true}
      onDownload={jest.fn()}
    />)
    const downloadButton = screen.getByRole('button', {name: 'Download'})
    expect(downloadButton).toHaveAttribute('aria-disabled', 'true')
  })

  test('calls download function with selected file type', async () => {
    const mockOnDownload = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings}
      downloadEnabled={true}
      downloadButtonVisible={true}
      onDownload={mockOnDownload}
    />)
    const downloadButton = screen.getByRole('button', {name: 'Download'})
    await waitFor(() => userClick(downloadButton))
    await waitFor(() => userClick(screen.getByRole('menuitem', {name: 'Excel'})))
    expect(mockOnDownload).toHaveBeenCalledWith('Excel')
  })
})

describe('ListFilter "Visible fields" button', () => {
  test('renders a "Visible fields" button', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      visibleFields={visibleFields}
      handleVisibleFieldsChange={jest.fn()}
    />)
    const visibleFieldsButton = screen.getByRole('button', {name: 'Visible Fields'})
    expect(visibleFieldsButton).toBeInTheDocument()
  })

  test('calls change visible fields function when visible fields are changed', async () => {
    const mockVisibleFieldsChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      visibleFields={visibleFields}
      handleVisibleFieldsChange={mockVisibleFieldsChange}
    />)
    const visibleFieldsButton = screen.getByRole('button', {name: 'Visible Fields'})
    await waitFor(() => userClick(visibleFieldsButton))
    await waitFor(() => userClick(screen.getByRole('menuitem', {name: 'Code'})))
    await waitFor(() => fireEvent.click(window))
    expect(mockVisibleFieldsChange).toHaveBeenCalled()
  })
})

describe('ListFilter "Visible filters" button', () => {
  test('renders a "Visible filters" button', async () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      visibleFilters={visibleFilters}
      handleVisibleFilterChange={jest.fn()}
      children={<div></div>}
    />)
    const showFiltersButton = screen.getByRole('button', {name: 'Show Filters'})
    await waitFor(() => userClick(showFiltersButton))
    const visibleFiltersButton = screen.getByRole('button', {name: 'Visible Filters'})
    expect(visibleFiltersButton).toBeInTheDocument()
  })
  
  test('calls change visible filters function when visible filters are changed', async () => {
    const mockVisibleFiltersChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      visibleFilters={visibleFilters}
      handleVisibleFilterChange={mockVisibleFiltersChange}
      children={<div></div>}
    />)
    const showFiltersButton = screen.getByRole('button', {name: 'Show Filters'})
    await waitFor(() => userClick(showFiltersButton))
    const visibleFiltersButton = screen.getByRole('button', {name: 'Visible Filters'})
    await waitFor(() => userClick(visibleFiltersButton))
    await waitFor(() => userClick(screen.getByRole('menuitem', {name: 'Code'})))
    await waitFor(() => fireEvent.click(window))
    expect(mockVisibleFiltersChange).toHaveBeenCalled()
  })
})

describe('ListFilter "Reset filters" button', () => {
  test('renders a "Reset filters" button', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings}
      onResetFilters={jest.fn()}
      children={<div></div>}
    />)
    const resetFiltersButton = screen.getByRole('button', {name: 'Reset Filters'})
    expect(resetFiltersButton).toBeInTheDocument()
  })

  test('calls reset filters function when reset filters button is pressed', async () => {
    const mockResetFiltersChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings}
      onResetFilters={mockResetFiltersChange}
      children={<div></div>}
    />)
    const resetFiltersButton = screen.getByRole('button', {name: 'Reset Filters'})
    await waitFor(() => userClick(resetFiltersButton))
    expect(mockResetFiltersChange).toHaveBeenCalled()
  })
})

describe('ListFilter "User preferences"', () => {
  window.confirm = jest.fn(() => true)
  test('renders an "User preferences" combobox', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      userPreferences={userPreferencesList}
      selectedUserPreference={userPreferencesList[0]}
      visibleUserPreferences={true}
      onUserPreferenceChanged={jest.fn()}
      onAddUserPreference={jest.fn()}
      onListDeleteChanged={jest.fn()}
      onListImplicitChanged={jest.fn()}
    />)
    const userPreferenceCombobox = screen.getByRole('combobox', {name: 'User preference'})
    expect(userPreferenceCombobox).toBeInTheDocument()
  })

  test('calls change user preference function when user preference changed', async () => {
    const mockUserPreferencesChange = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      userPreferences={userPreferencesList}
      selectedUserPreference={userPreferencesList[0]}
      visibleUserPreferences={true}
      onUserPreferenceChanged={mockUserPreferencesChange}
      onAddUserPreference={jest.fn()}
      onListDeleteChanged={jest.fn()}
      onListImplicitChanged={jest.fn()}
    />)
    const userPreferenceCombobox = screen.getByRole('combobox', {name: 'User preference'})
    await waitFor(() => userClick(userPreferenceCombobox))
    await waitFor(() => userClick(screen.getByRole('option', {name: 'pref 2'})))
    expect(userPreferenceCombobox).toHaveValue('pref 2')
  })

  test('calls add user preference function when user preference added', async () => {
    const mockAddUserPreferences = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      userPreferences={userPreferencesList}
      selectedUserPreference={userPreferencesList[0]}
      visibleUserPreferences={true}
      onUserPreferenceChanged={jest.fn()}
      onAddUserPreference={mockAddUserPreferences}
      onListDeleteChanged={jest.fn()}
      onListImplicitChanged={jest.fn()}
    />)
    const userPreferenceButton = screen.getByRole('button', {name: 'User Preferences'})
    await waitFor(() => userClick(userPreferenceButton))
    const userPreferenceNameField = screen.getByRole('textbox', {name: 'Filter name'})
    await waitFor(() => fireEvent.change(userPreferenceNameField, { target: { value: 'ABC' }}))
    const addUserPreferenceButton = screen.getByRole('button', {name: 'Add'})
    await waitFor(() => expect(addUserPreferenceButton).not.toBeDisabled())
    await waitFor(() => userClick(screen.getByRole('button', {name: 'Add'})))
    await waitFor(() => userClick(screen.getByRole('button', {name: 'Close'})))
    await waitFor(() => expect(mockAddUserPreferences).toHaveBeenCalled())
  })

  test('calls change implicit user preference function when implicit user preference changed', async () => {
    const mockChangeImplicitUserPreferences = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      userPreferences={userPreferencesList}
      selectedUserPreference={userPreferencesList[0]}
      visibleUserPreferences={true}
      onUserPreferenceChanged={jest.fn()}
      onAddUserPreference={jest.fn()}
      onListDeleteChanged={jest.fn()}
      onListImplicitChanged={mockChangeImplicitUserPreferences}
    />)
    const userPreferenceButton = screen.getByRole('button', {name: 'User Preferences'})
    await waitFor(() => userClick(userPreferenceButton))
    expect(screen.getByRole('textbox', {name: 'Filter name'})).toBeInTheDocument()
    const changeImplicitUserPreferenceButton = screen.getAllByRole('checkbox')[0]
    await waitFor(() => userClick(changeImplicitUserPreferenceButton))
    expect(mockChangeImplicitUserPreferences).toBeCalled()
  })

  test('calls delete user preference function when user preference deleted', async () => {
    const mockDeleteImplicitUserPreferences = jest.fn()
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={jest.fn()} 
      sortableColumns={sortableColumns}
      localizedStrings={localizedStrings} 
      userPreferences={userPreferencesList}
      selectedUserPreference={userPreferencesList[0]}
      visibleUserPreferences={true}
      onUserPreferenceChanged={jest.fn()}
      onAddUserPreference={jest.fn()}
      onListDeleteChanged={mockDeleteImplicitUserPreferences}
      onListImplicitChanged={jest.fn()}
    />)
    const userPreferenceButton = screen.getByRole('button', {name: 'User Preferences'})
    await waitFor(() => userClick(userPreferenceButton))
    expect(screen.getByRole('textbox', {name: 'Filter name'})).toBeInTheDocument()
    const deleteUserPreferenceButton = screen.getAllByRole('button', {name: 'iconButton'})[0]
    await waitFor(() => userClick(deleteUserPreferenceButton))
    expect(mockDeleteImplicitUserPreferences).toHaveBeenCalled()
  })
})