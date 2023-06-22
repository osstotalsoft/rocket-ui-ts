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

export interface VisibleFilter {
  defaultValue: unknown;
  label: string
  isVisible: boolean
  fieldName: string
}

export interface VisibleField {
  label: string
  isVisible: boolean
  fieldName: string
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
  visibleFilters?: Array<VisibleFilter>
  visibleFields?: Array<VisibleField>
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
  onUserPreferencesPropertyChanged: (value: unknown) => void,
  localizedStrings: LocalizedStrings,
  isDirty: boolean
}

export type FullTextFilterEndAdornmentProps = {
  localizedStrings: LocalizedStrings
  resetTextFilter: () => void
  expandFilters: () => void
  expanded: boolean
  openVisibleFiltersMenu: (event: React.MouseEvent) => void
  hasChildren: boolean
  hasVisibleFilters: boolean
}

export type ListFilterButtonsProps = {
  localizedStrings: LocalizedStrings
  visibleUserPreferences: boolean
  downloadButtonVisible: boolean
  downloadEnabled: boolean
  hasVisibleFields: boolean
  mdLengthButtons: number
  onShowUserPreferencesModal: () => void
  openExportMenu: (event: React.MouseEvent) => void
  openVisibleFieldsMenu: (event: React.MouseEvent) => void
}

export type VisibleFiltersMenuProps = {
  visibleFilters: Array<VisibleFilter>
  anchorElCustomize: Element
  closeVisibleFiltersMenu: () => void
  handleVisibleFilterChange: (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export type VisibleFieldsMenuProps = {
  visibleFields: Array<VisibleField>
  anchorElFieldsFilter: Element
  closeVisibleFieldsMenu: () => void
  handleVisibleFieldsChange: (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export type UserPreferencesListProps = {
  localizedStrings: LocalizedStrings
  userPreferences: Array<UserPreference>
  onListImplicitChanged: (item: UserPreference) => void
  onListDeleteChanged: (item: UserPreference) => void
}