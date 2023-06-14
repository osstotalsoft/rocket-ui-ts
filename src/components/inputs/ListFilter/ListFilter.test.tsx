// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import { render, screen } from '../../../testingUtils'
import { ListFilter } from '../../index'

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
  fullTextFilter: ''
}

const sortableColumns= [
  {
    dbColumnName: 'name',
    displayName: 'Name'
  },
  {
    dbColumnName: 'code',
    displayName: 'Code'
  }
]

describe('ListFilter', () => {
  test('renders a search field', () => {
    render(<ListFilter 
      filters={filters}
      onChangeFilterValue={() => {}} 
      sortableColumns={sortableColumns} localizedStrings={localizedStrings} 
    />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})

