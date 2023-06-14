import { ReactNode } from 'react'

export interface SortableColumn {
  dbColumnName: string
  displayName: string
}

export type Filters = {
  fullTextFilter: string
  orderByColumnName: string
  orderByDescending: boolean
  [key: string]: unknown
}

export interface UserPreference {
  fields: Array<{fieldName: string; isVisible: boolean; label: string}>
  filterName: string
  filters: Array<{defaultValue: unknown; fieldName: string; isVisible: boolean; label: string}>
  implicit: boolean
  isDefault: boolean
  order?: {
    orderByColumnName: string
    orderByColumns?: Array<string>
    orderByDescending: boolean
  }
}

export interface LocalizedStrings {
  OrderAscending: string,
  OrderDescending: string,
  FilterName: string,
  Implicit: string,  
  UserPreference: string,
  UserPreferences: string,
  DeleteUserPreference: string,
  Search: string,
  ResetFilters: string,
  ShowFilters: string,
  ChooseFilters: string,
  OrderBy: string,
  InOrder: string,
  EditUserPreferences: string,
  Download: string,
  ChooseFields: string,
  Delete: string,
  Add: string,
  Close: string
}

export type ListFilterProps = {
  sortableColumns: Array<SortableColumn>
  filters: Filters
  localizedStrings: LocalizedStrings,
  visibleFilters?: Array<{ defaultValue: unknown; label: string; isVisible: boolean; fieldName: string }>
  visibleFields?: Array<{ label: string; isVisible: boolean; fieldName: string }>
  onChangeFilterValue: (filterName: string, value?: unknown) => void
  onDownload?: (filetype: string) => void
  downloadEnabled?: boolean
  downloadButtonVisible?: boolean
  handleVisibleFieldsChange?: (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  handleVisibleFilterChange?: (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  children?: ReactNode
  onResetFilters?: () => void
  searchTextMaxLength?: number
  searchPlaceholder?: string
  visibleUserPreferences?: boolean
  onUserPreferenceChanged?: (name: string) => void
  onListImplicitChanged?: (item: UserPreference) => void
  onListDeleteChanged?: (item: UserPreference) => void
  onAddUserPreference?: (item: UserPreference) => void
  selectedUserPreference?: UserPreference
  userPreferences?: Array<UserPreference>
}

export type UserPreferencesPopUpProps = {
  showModal: boolean
  onCloseModal: () => void
  userPreferences: Array<UserPreference>
  selectedUserPreference?: UserPreference
  onAddUserPreference: () => void
  onListImplicitChanged: (item: UserPreference) => void
  onListDeleteChanged: (item: UserPreference) => void
  onUserPreferencesPropertyChanged: (event: React.ChangeEvent<HTMLInputElement>, propertyName: string) => void,
  localizedStrings: LocalizedStrings,
}