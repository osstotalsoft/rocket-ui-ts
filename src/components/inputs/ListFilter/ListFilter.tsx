import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Autocomplete } from 'components'
import { Toolbar, Collapse, Menu, MenuItem, InputAdornment, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ListFilterProps, UserPreference } from './types'
import UserPreferencesPopUp from './UserPreferencesPopUp'
import FullTextFilterEndAdornment from './FullTextFilterEndAdornment'
import ListFilterButtons from './ListFilterButtons'
import VisibleFiltersMenu from './VisibleFiltersMenu'
import VisibleFieldsMenu from './VisibleFieldsMenu'
import { map } from 'ramda'

const fileType = {
  excel: 'Excel',
  csv: 'CSV'
}

/**
 * The ListFilter component provides a user interface for filtering and sorting lists. It can display
 * additional filter components passed in as children, it can customize which of these filters are 
 * visible, it can control the visibility of the list data and save/apply predetermined configurations.
 * When given additional filters as child components the search field has an expand button that reveals them.
 * The component can display a download button for exporting the contents of the list to Excel or CSV.
 * Which child filters are visible can be customized using the visibleFilters prop.
 * The data displayed within the list can be customized using the visibleFields prop. 
 * Predetermined filter configurations can be saved and applied using the userPreferences prop.
*/
const ListFilter: React.FC<ListFilterProps> = ({
  sortableColumns,
  filters,
  localizedStrings,
  visibleFilters,
  visibleFields,
  onChangeFilterValue,
  handleVisibleFieldsChange,
  handleVisibleFilterChange,
  onDownload,
  downloadEnabled,
  downloadButtonVisible,
  children,
  onResetFilters,
  searchTextMaxLength,
  searchPlaceholder,
  visibleUserPreferences,
  onUserPreferenceChanged,
  selectedUserPreference,
  onListImplicitChanged,
  onListDeleteChanged,
  onAddUserPreference,
  userPreferences
}) => {
  const [expanded, setExpanded] = useState(false)
  const [anchorElCustomize, setAnchorElCustomize] = useState(null)
  const [anchorElFieldsFilter, setAnchorElFieldsFilter] = useState(null)
  const [anchorElDownload, setAnchorElDownload] = useState(null)
  const [showUserPreferencesModal, setShowUserPreferencesModal] = useState(false)
  const [popUpUserPreference, setPopUpUserPreference] = useState(null)
  const [userPreferencesIsDirty, setUserPreferencesIsDirty] = useState(false)

  const isDescendingOptions = useMemo(() => [
    { id: false, name: localizedStrings.OrderAscending },
    { id: true, name: localizedStrings.OrderDescending }
  ], [localizedStrings.OrderAscending, localizedStrings.OrderDescending])

  const userPreferencesOptions = useMemo(
    () =>
      map(item => {
        return {
          id: item.filterName,
          name: item.filterName
        }
      }, userPreferences || [])
      ,
    [userPreferences]
  )

  const mdLengthButtons = useMemo(() => {
    let mdLength = 0
    if (visibleFields) mdLength++
    if (visibleUserPreferences) mdLength++
    if (downloadButtonVisible) mdLength++
    return mdLength === 3 ? 2 : mdLength
  }, [downloadButtonVisible, visibleFields, visibleUserPreferences])

  const expandFilters = useCallback(() => setExpanded(!expanded), [expanded])

  const onTextFilterChanged = useCallback(
    (value: unknown) => onChangeFilterValue('fullTextFilter', value),
    [onChangeFilterValue]
  )

  const resetTextFilter = useCallback(() => {
    onChangeFilterValue('fullTextFilter', '')
    if (onResetFilters) onResetFilters()
  }, [onChangeFilterValue, onResetFilters])

  const onSelectedColumnChanged = useCallback(
    (name: string) => onChangeFilterValue('orderByColumnName', name),
    [onChangeFilterValue]
  )

  const onSortDirectionChanged = useCallback(
    (isDescending: boolean) => onChangeFilterValue('orderByDescending', isDescending),
    [onChangeFilterValue]
  )

  const openVisibleFiltersMenu = useCallback((event: React.MouseEvent) => {
    setAnchorElCustomize(event.target)
  },[])

  const closeVisibleFiltersMenu = useCallback(() => {
    setAnchorElCustomize(null)
  },[])

  const openVisibleFieldsMenu = useCallback((event: React.MouseEvent) => {
    setAnchorElFieldsFilter(event.target)
  },[])

  const closeVisibleFieldsMenu = useCallback(() => {
    setAnchorElFieldsFilter(null)
  },[])

  const openExportMenu = useCallback((event: React.MouseEvent) => {
    setAnchorElDownload(event.target)
  },[])

  const closeExportMenu = useCallback(() => {
    setAnchorElDownload(null)
  },[])

  const handleDownload = useCallback(((fileType: string) => () => {
    onDownload(fileType)
    setAnchorElDownload(null)
  }), [onDownload])

  const onShowUserPreferencesModal = useCallback(() => {
    setShowUserPreferencesModal(true)
    if (selectedUserPreference.isDefault)
      setPopUpUserPreference({
        ...selectedUserPreference,
        isDefault: false,
        filterName: '',
        implicit: false
      })
    else 
      setPopUpUserPreference({...selectedUserPreference})
  },[selectedUserPreference])

  const onCloseUserPreferencesModal = useCallback(() => {
    setUserPreferencesIsDirty(false)
    setShowUserPreferencesModal(false)
  },[])

  const onUserPreferencesPropertyChanged = useCallback((value: unknown) => {
    setUserPreferencesIsDirty(true)
    setPopUpUserPreference({
      ...popUpUserPreference,
      filterName: value as string
    })
  },[popUpUserPreference])

  const onAddUserPreferenceLocal = useCallback(() => {
    onAddUserPreference(popUpUserPreference)
    setUserPreferencesIsDirty(false)
  },[onAddUserPreference, popUpUserPreference])

  const onListDeleteChangedLocal = useCallback((item: UserPreference) => {
    if (confirm(localizedStrings.DeleteUserPreference) && item.filterName.toLowerCase() === selectedUserPreference.filterName.toLowerCase()) {
      setPopUpUserPreference({
        ...selectedUserPreference,
        isDefault: false,
        filterName: '',
        implicit: false
      })
    }
    onListDeleteChanged(item)
  },[localizedStrings.DeleteUserPreference, onListDeleteChanged, selectedUserPreference])

  const onListImplicitChangedLocal = useCallback((item: UserPreference) => {
    const newImplicitValue = selectedUserPreference.filterName.toLowerCase() === item.filterName.toLowerCase() ? !selectedUserPreference.implicit : false
    setPopUpUserPreference({
      ...selectedUserPreference,
      implicit: newImplicitValue
    })
    onListImplicitChanged(item)
  },[onListImplicitChanged, selectedUserPreference])

  const hasChildren= useMemo(() => Boolean(children), [children])
  const hasVisibleFilters= useMemo(() => Boolean(visibleFilters), [visibleFilters])
  const hasVisibleFields= useMemo(() => Boolean(visibleFields), [visibleFields])

  return (
    <>
      <Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid container alignItems='center' spacing={2}>
          {(filters.fullTextFilter || filters.fullTextFilter === '') && (
            <Grid item xs={12} md>
              <TextField
                fullWidth={true}
                value={filters.fullTextFilter}
                onChange={onTextFilterChanged}
                label={localizedStrings.Search}
                inputProps={{
                  maxLength: searchTextMaxLength,
                  placeholder: searchPlaceholder
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment:
                  <FullTextFilterEndAdornment
                    localizedStrings={localizedStrings}
                    resetTextFilter={resetTextFilter}
                    expandFilters={expandFilters}
                    expanded={expanded}
                    openVisibleFiltersMenu={openVisibleFiltersMenu}
                    hasChildren={hasChildren}
                    hasVisibleFilters={hasVisibleFilters}
                  />
                }}
              />
            </Grid>
          )}
          <Grid item xs={6} sm={visibleUserPreferences ? 4 : 6} md={visibleUserPreferences || (mdLengthButtons > 1) ? 2 : 3}>
            <Autocomplete
              label={localizedStrings.OrderBy}
              value={filters.orderByColumnName}
              onChange={onSelectedColumnChanged}
              options={sortableColumns}
              isSearchable={false}
              simpleValue={true}
              valueKey="columnName"
              labelKey="displayName"
            />
          </Grid>
          <Grid item xs={6} sm={visibleUserPreferences ? 4 : 6} md={visibleUserPreferences || (mdLengthButtons > 1)  ? 2 : 3}>
            <Autocomplete
              label={localizedStrings.InOrder}
              value={filters.orderByDescending}
              onChange={onSortDirectionChanged}
              options={isDescendingOptions}
              isSearchable={false}
              simpleValue={true}
            />
          </Grid>
          {visibleUserPreferences && (
            <Grid item xs={6} sm={4} md={2}>
              <Autocomplete
                label={localizedStrings.UserPreference}
                value={selectedUserPreference.filterName}
                simpleValue={true}
                onChange={onUserPreferenceChanged}
                options={userPreferencesOptions}
              />
            </Grid>
          )}
          <ListFilterButtons
              localizedStrings={localizedStrings}
              visibleUserPreferences={visibleUserPreferences}
              downloadButtonVisible={downloadButtonVisible}
              downloadEnabled={downloadEnabled}
              hasVisibleFields={hasVisibleFields}
              mdLengthButtons={mdLengthButtons}
              onShowUserPreferencesModal={onShowUserPreferencesModal}
              openExportMenu={openExportMenu}
              openVisibleFieldsMenu={openVisibleFieldsMenu}
          />
          {visibleFilters && 
            <VisibleFiltersMenu
              visibleFilters={visibleFilters}
              anchorElCustomize={anchorElCustomize}
              closeVisibleFiltersMenu={closeVisibleFiltersMenu}
              handleVisibleFilterChange={handleVisibleFilterChange}
            />
          }
          {downloadButtonVisible && (
              <Menu anchorEl={anchorElDownload} open={Boolean(anchorElDownload)} onClose={closeExportMenu}>
                <MenuItem onClick={handleDownload(fileType.excel)}>{fileType.excel}</MenuItem>
                <MenuItem onClick={handleDownload(fileType.csv)}>{fileType.csv}</MenuItem>
              </Menu>
            )}
          {visibleFields && 
            <VisibleFieldsMenu
              visibleFields={visibleFields}
              anchorElFieldsFilter={anchorElFieldsFilter}
              closeVisibleFieldsMenu={closeVisibleFieldsMenu}
              handleVisibleFieldsChange={handleVisibleFieldsChange}
            />
          }
        </Grid>
      </Toolbar>
      <Collapse in={expanded}>
        <Toolbar>{children}</Toolbar>
      </Collapse>
      {popUpUserPreference && 
        <UserPreferencesPopUp
          showModal={showUserPreferencesModal}
          onCloseModal={onCloseUserPreferencesModal}
          onAddUserPreference={onAddUserPreferenceLocal}
          userPreferences={userPreferences}
          selectedUserPreference={popUpUserPreference}
          onListImplicitChanged={onListImplicitChangedLocal}
          onUserPreferencesPropertyChanged={onUserPreferencesPropertyChanged}
          onListDeleteChanged={onListDeleteChangedLocal}
          localizedStrings={localizedStrings}
          isDirty={userPreferencesIsDirty}
        />
      }
    </>
  )
}

ListFilter.propTypes = {
  /**
   * A list that defines which columns of the list may be sorted.
   */
  sortableColumns: PropTypes.array.isRequired,
  /**
   * An object containing the filters used to display the list.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  filters: PropTypes.shape({
    fullTextFilter: PropTypes.string.isRequired,
    orderByColumnName: PropTypes.string.isRequired,
    orderByDescending: PropTypes.bool.isRequired
  }).isRequired,
  /**
   * An object containing the localized text for the component.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  localizedStrings: PropTypes.shape({
    OrderAscending: PropTypes.string.isRequired,
    OrderDescending: PropTypes.string.isRequired,
    FilterName: PropTypes.string.isRequired,
    Implicit: PropTypes.string.isRequired,
    UserPreference: PropTypes.string.isRequired,
    UserPreferences: PropTypes.string.isRequired,
    DeleteUserPreference: PropTypes.string.isRequired,
    Search: PropTypes.string.isRequired,
    ResetFilters: PropTypes.string.isRequired,
    ShowFilters: PropTypes.string.isRequired,
    ChooseFilters: PropTypes.string.isRequired,
    OrderBy: PropTypes.string.isRequired,
    InOrder: PropTypes.string.isRequired,
    EditUserPreferences: PropTypes.string.isRequired,
    Download: PropTypes.string.isRequired,
    ChooseFields: PropTypes.string.isRequired,
    Delete: PropTypes.string.isRequired,
    Add: PropTypes.string.isRequired,
    Close: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * An optional array for controlling which child filters are visible.
   */
  visibleFilters: PropTypes.array,
  /**
   * An optional array for controlling which fields are visible in the list.
   */
  visibleFields: PropTypes.array,
  /**
   * Callback fired when the value of a filter is changed.
   *
   * @param {string} filterName The property name of the filter that was changed.
   * @param {unknown} value The target value from the event source of the callback.
   */
  onChangeFilterValue: PropTypes.func.isRequired,
  /**
   * An optional function that is used to download the contents of the list.
   */
  onDownload: PropTypes.func,
  /**
   * If true, enables the download button.
   */
  downloadEnabled: PropTypes.bool,
  /**
   * If true, makes the download button visible.
   */
  downloadButtonVisible: PropTypes.bool,
  /**
   * Callback fired when one of the visible fields is changed.
   *
   * @param {string} fieldName The property name of the field that was changed.
   */
  handleVisibleFieldsChange: PropTypes.func,
  /**
   * Callback fired when one of the visible filters is changed.
   *
   * @param {string} fieldName The property name of the filter that was changed.
   */
  handleVisibleFilterChange: PropTypes.func,
  /**
   * React component containing the expanded filters
   */
  children: PropTypes.node,
  /**
   * Callback fired when the reset filters button is clicked.
   */
  onResetFilters: PropTypes.func,
  /**
   * Defines the maximum character length of the fulltext filter.
   */
  searchTextMaxLength: PropTypes.number,
  /**
   * The placeholder text displayed initially in the fulltext filter fields.
   */
  searchPlaceholder: PropTypes.string,
  /**
   * If true, enables the functionality related to saving and loading filter preferences.
   */
  visibleUserPreferences: PropTypes.bool,
  /**
   * Callback fired when the selected user preference is change.
   * Required only when visibleUserPreferences is true.
   */
  onUserPreferenceChanged: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Prop onUserPreferenceChanged is missing or is not a function!')
    }
  },
  /**
   * Object containing the selected user preference.
   * Required only when visibleUserPreferences is true.
   */
  selectedUserPreference: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || typeof props[propName] !== 'object')) {
      return new Error('Prop onUserPreferenceChanged is missing or is not an object!')
    }
  },
  /**
   * Callback fired when a user preference is set as implicit.
   * Required only when visibleUserPreferences is true.
   */
  onListImplicitChanged: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Prop onListImplicitChanged is missing or is not a function!')
    }
  },
  /**
   * Callback fired when a user preference is deleted.
   * Required only when visibleUserPreferences is true.
   */
  onListDeleteChanged: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Prop onListDeleteChanged is missing or is not a function!')
    }
  },
  /**
   * Callback fired when a user preference is added.
   * Required only when visibleUserPreferences is true.
   */
  onAddUserPreference: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Prop onAddUserPreference is missing or is not a function!')
    }
  },
  /**
   * An array containing the user preferences that can be selected.
   * Required only when visibleUserPreferences is true.
   */
  userPreferences: function (props, propName, _componentName) {
    if (props['visibleUserPreferences'] && (props[propName] === undefined || !Array.isArray(props[propName]))) {
      return new Error('Prop userPreferences is missing or is not an array!')
    }
  }
}

export default ListFilter
