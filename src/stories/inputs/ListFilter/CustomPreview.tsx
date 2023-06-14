import React, { useState } from 'react'
import { Filters, ListFilter, TextField, UserPreference } from 'components'
import { filtersWithChildren, sortableColumns, visibleFields, visibleFilters, userPreferencesList, localizedStrings } from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid, Divider } from '@mui/material'
import ControlledCheckbox from '../Autocomplete/components/ControlledCheckBox'
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

const CustomPreview = () => {
  const {filters, listData, handleFilterPropertyChange, setFilters} = useFilteredList()
  const [localVisibleFields, setLocalVisibleFields] = useState(visibleFields)
  const [localVisibleFilters, setLocalVisibleFilters] = useState(visibleFilters)
  const [localUserPreferences, setLocalUserPreferences] = useState(userPreferencesList)
  const [selectedUserPreference, setSelectedUserPreference] = useState(userPreferencesList[0])
  const [demoDownloadButton, setDemoDownloadButton] = useState(true)
  const [demoVisibleFields, setDemoVisibleFields] = useState(true)
  const [demoVisibleFilters, setDemoVisibleFilters] = useState(true)
  const [demoUserPreferences, setDemoUserPreferences] = useState(true)

  const handleVisibleFilterChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = localVisibleFilters.find(x => x.fieldName === name)
    const index = localVisibleFilters.indexOf(filter)
    const newVisibleFilters = Object.assign([...localVisibleFilters], { [index]: { ...filter, isVisible: value } })
    setLocalVisibleFilters(newVisibleFilters)
  }

  const filtersToShow = localVisibleFilters.filter(x => x.isVisible).map(x => x.fieldName)

  const handleVisibleFieldsChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = localVisibleFields.find(x => x.fieldName === name)
    const index = localVisibleFields.indexOf(filter)
    const newVisibleFields = Object.assign([...localVisibleFields], { [index]: { ...filter, isVisible: value } })
    setLocalVisibleFields(newVisibleFields)
  }

  const fieldsToShow = localVisibleFields.filter(x => x.isVisible).map(x => x.fieldName)

  const onUserPreferenceChanged = (name: string) => {
    const newValue = localUserPreferences.filter(x => x.filterName.toLowerCase() === name.toLowerCase())[0]
    setSelectedUserPreference(newValue)

    const defaultFilters = getDefaultFilterValues(newValue)
    setFilters(defaultFilters)
    setLocalVisibleFields([...newValue.fields])
    setLocalVisibleFilters([...newValue.filters])
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
      <Grid container justifyContent='center' spacing={2}>
        <Grid item>
          <ControlledCheckbox value={demoDownloadButton} onChange={() => setDemoDownloadButton(!demoDownloadButton)} label={'Download Button'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFilters} onChange={() => setDemoVisibleFilters(!demoVisibleFilters)} label={'Visible Filters'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFields} onChange={() => setDemoVisibleFields(!demoVisibleFields)} label={'Visible Fields'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoUserPreferences} onChange={() => setDemoUserPreferences(!demoUserPreferences)} label={'User Preferences'} />
        </Grid>
      </Grid>
      <Divider/>
      <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
        handleVisibleFilterChange={handleVisibleFilterChange}
        handleVisibleFieldsChange={handleVisibleFieldsChange}
        visibleFields={demoVisibleFields ? localVisibleFields : undefined}
        visibleFilters={demoVisibleFilters ? localVisibleFilters: undefined}
        visibleUserPreferences={demoUserPreferences}
        userPreferences={localUserPreferences}
        selectedUserPreference={selectedUserPreference}
        onUserPreferenceChanged={onUserPreferenceChanged}
        onAddUserPreference={onAddUserPreference}
        onListDeleteChanged={onListDeleteChanged}
        onListImplicitChanged={onListImplicitChanged}
        downloadEnabled
        downloadButtonVisible={demoDownloadButton}
        onDownload={()=>{}}
      >
        <Grid container spacing={2}>
          {filtersToShow.includes('name') && (
            <Grid item xs={6}>
              <TextField
                label='Name'
                value={filters.name as string}
                onChange={event => handleFilterPropertyChange('name', event)}
                fullWidth
              />
            </Grid>
          )}
          {filtersToShow.includes('code') && (
            <Grid item xs={6}>
              <TextField
                label='Code'
                value={filters.code as string}
                onChange={event => handleFilterPropertyChange('code', event)}
                fullWidth
              />
            </Grid>
          )}
        </Grid>
      </ListFilter>
      <Table>
        <TableHead>
          <TableRow>
            {fieldsToShow.includes('name') && <TableCell>Name</TableCell>}
            {fieldsToShow.includes('code') && <TableCell>Code</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map(item => {
            return (
              <TableRow key={item.code}>
                {fieldsToShow.includes('name') && <TableCell>{item.name}</TableCell>}
                {fieldsToShow.includes('code') && <TableCell>{item.code}</TableCell>}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default CustomPreview
