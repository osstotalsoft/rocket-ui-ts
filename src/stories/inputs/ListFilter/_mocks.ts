import { ListFilterProps, LocalizedStrings, SortableColumn, UserPreference } from 'components'

export const minimumFilters = {
  orderByColumnName: 'name',
  orderByDescending: false,
  fullTextFilter: ''
}

export const filtersWithChildren = {
  orderByColumnName: 'name',
  orderByDescending: false,
  fullTextFilter: '',
  code: '',
  name: ''
}

export const sortableColumns: Array<SortableColumn> = [
  {
    columnName: 'name',
    displayName: 'Name'
  },
  {
    columnName: 'code',
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

export const listData = [
  { name: 'Cat', code: 'FL_CAT' },
  { name: 'Dog', code: 'CN_DOG' },
  { name: 'Turtle', code: 'RP_TRT' },
  { name: 'Tiger', code: 'FL_TGR' },
  { name: 'Wolf', code: 'CN_WLF' },
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

export const localizedStrings : LocalizedStrings = {
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