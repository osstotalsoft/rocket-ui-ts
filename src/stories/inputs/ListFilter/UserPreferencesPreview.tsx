import React, { useState } from 'react'
import { Filters, ListFilter, TextField, UserPreference } from 'components'
import { filtersWithChildren, sortableColumns, userPreferencesList, localizedStrings } from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@mui/material'
import { useFilteredList } from './_hooks'

const getDefaultFilterValues = (userPreference: UserPreference) => {
  const filters = Object.assign({}, filtersWithChildren)
  userPreference.filters.forEach(el => {
    (filters as any)[el.fieldName] = el.defaultValue
  })
  if (userPreference.order) {
    filters.orderByColumnName = userPreference.order.orderByColumnName
    filters.orderByDescending = userPreference.order.orderByDescending
  }
  return filters as Filters
}

const UserPreferencesPreview = () => {
  const {filters, listData, handleFilterPropertyChange, setFilters} = useFilteredList()
  const [localUserPreferences, setLocalUserPreferences] = useState(userPreferencesList)
  const [selectedUserPreference, setSelectedUserPreference] = useState(userPreferencesList[0])

  const onUserPreferenceChanged = (name: string) => {
    const newValue = localUserPreferences.filter(x => x.filterName.toLowerCase() === name.toLowerCase())[0]
    setSelectedUserPreference(newValue)

    const defaultFilters = getDefaultFilterValues(newValue)
    setFilters(defaultFilters)
  }

  const onAddUserPreference = (popUpUserPreference: UserPreference) => {
    if (popUpUserPreference.filterName === '') return

    const newPreference = Object.assign({}, popUpUserPreference, {
      isDefault: false,
      implicit: false,
      filterName: popUpUserPreference.filterName.trim()
    })
    const newValue = localUserPreferences.filter(x => x.filterName.toLowerCase() === newPreference.filterName.toLowerCase())[0]

    if (newValue) return
    else {
      const newUserPreferences = Object.assign([...localUserPreferences, newPreference])
      setLocalUserPreferences(newUserPreferences)
      setSelectedUserPreference(newPreference)
    }
  }

  const onListDeleteChanged = (item: UserPreference) => {
    if (item.isDefault) {
      alert('Can\'t delete default filter')
      return
    }

    const newUserPreferences = localUserPreferences.filter(p => p.filterName.toLowerCase() !== item.filterName.toLowerCase())

    if (item.filterName.toLowerCase() === selectedUserPreference.filterName.toLowerCase()) {
      const newPreference = Object.assign({}, selectedUserPreference, {
        isDefault: false,
        filterName: '',
        implicit: false
      })
      setSelectedUserPreference(newPreference)
    }
    setLocalUserPreferences(newUserPreferences)
  }

  const onListImplicitChanged = (item: UserPreference) => {
    const newUserPreferences = localUserPreferences.map(x => {
      if (x.filterName.toLowerCase() === item.filterName.toLowerCase()) return { ...x, implicit: !item.implicit }
      else return { ...x, implicit: false }
    })

    let newPreference
    if (selectedUserPreference.filterName.toLowerCase() === item.filterName.toLowerCase()) {
      newPreference = Object.assign({}, selectedUserPreference, { implicit: !selectedUserPreference.implicit })
    } else {
      const newImplicitPreference = newUserPreferences.filter(p => p.implicit === true)
      if (newImplicitPreference && newImplicitPreference.length > 0) newPreference = newImplicitPreference[0]
      else newPreference = Object.assign({}, selectedUserPreference, { implicit: false })
    }
    setLocalUserPreferences(newUserPreferences)
    setSelectedUserPreference(newPreference)
  }

  return (
    <>
      <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
        visibleUserPreferences={true}
        userPreferences={localUserPreferences}
        selectedUserPreference={selectedUserPreference}
        onUserPreferenceChanged={onUserPreferenceChanged}
        onAddUserPreference={onAddUserPreference}
        onListDeleteChanged={onListDeleteChanged}
        onListImplicitChanged={onListImplicitChanged}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label='Name'
              value={filters.name as string}
              onChange={event => handleFilterPropertyChange('name', event)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Code'
              value={filters.code as string}
              onChange={event => handleFilterPropertyChange('code', event)}
              fullWidth
            />
          </Grid>
        </Grid>
      </ListFilter>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map(item => {
            return (
              <TableRow key={item.code}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.code}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default UserPreferencesPreview
