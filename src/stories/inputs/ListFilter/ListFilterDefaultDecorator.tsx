import React, { useCallback, useMemo, useState } from 'react'
import { Filters, TextField, UserPreference, VisibleField, VisibleFilter } from 'components'
import { filtersWithChildren } from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid, Divider } from '@mui/material'
import ControlledCheckbox from '../Autocomplete/components/ControlledCheckBox'
import { useFilteredList } from './_hooks'
import { Args } from '@storybook/react'

const getDefaultFilterValues = (userPreference: UserPreference) => {
  const filters = {...filtersWithChildren}
  userPreference.filters.forEach(el => {
    (filters as any)[el.fieldName] = el.defaultValue
  })
  if (userPreference.order) {
    filters.orderByColumnName = userPreference.order.orderByColumnName
    filters.orderByDescending = userPreference.order.orderByDescending
  }
  return filters as Filters
}

const ListFilterDefaultDecorator: React.FC<{args: Args, updateArgs: (newArgs: Partial<Args>) => void, children: React.JSX.Element}> = ({
  args: {
    filters,
    visibleFilters,
    visibleFields,
    userPreferences,
    selectedUserPreference,
    downloadEnabled,
    visibleUserPreferences,
    ...args
  },
  updateArgs,
  children: story
}) => {
  const {listData} = useFilteredList(filters)
  const [demoVisibleFields, setDemoVisibleFields] = useState(false)
  const [demoVisibleFilters, setDemoVisibleFilters] = useState(false)

  const handleFilterPropertyChange = useCallback(
    (prop: string, value: unknown) => {
      updateArgs({filters: { ...filters, [prop]: value }})
    },
    [filters, updateArgs]
  )

  const handleVisibleFilterChange = useCallback((name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const newVisibleFilters = [...visibleFilters]
    newVisibleFilters.find((x: VisibleFilter) => x.fieldName === name).isVisible = value
    updateArgs({visibleFilters: newVisibleFilters})
  }, [visibleFilters, updateArgs])

  const filtersToShow = useMemo(() => visibleFilters.filter((x: VisibleFilter) => x.isVisible).map((x: VisibleFilter) => x.fieldName), [visibleFilters])

  const handleVisibleFieldsChange = useCallback((name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const newVisibleFields = [...visibleFields]
    newVisibleFields.find((x: VisibleField) => x.fieldName === name).isVisible = value
    updateArgs({visibleFields: newVisibleFields})
  }, [visibleFields, updateArgs])

  const fieldsToShow = useMemo(() => visibleFields.filter((x: VisibleField) => x.isVisible).map((x: VisibleField) => x.fieldName), [visibleFields])

  const onUserPreferenceChanged = useCallback((name: string) => {
    const newValue = userPreferences.filter((x: UserPreference) => x.filterName.toLowerCase() === name.toLowerCase())[0]
    updateArgs({selectedUserPreference: newValue})

    const defaultFilters = getDefaultFilterValues(newValue)
    updateArgs({filters: defaultFilters, visibleFields:[...newValue.fields], visibleFilters:[...newValue.filters]})
  }, [userPreferences, updateArgs])

  const onAddUserPreference = useCallback((popUpUserPreference: UserPreference) => {
    if (!popUpUserPreference.filterName) return
    const newPreference = {
      ...popUpUserPreference,
      isDefault: false,
      implicit: false,
      filterName: popUpUserPreference.filterName.trim()
    }
    const newValue = userPreferences.filter((x: UserPreference) => x.filterName.toLowerCase() === newPreference.filterName.toLowerCase())[0]
    if (newValue) return
    else {
      const newUserPreferences = [...userPreferences, newPreference]
      updateArgs({userPreferences: newUserPreferences, selectedUserPreference: newPreference})
    }
  }, [userPreferences, updateArgs])

  const onListDeleteChanged = useCallback((item: UserPreference) => {
    if (item.isDefault) {
      alert('Can\'t delete default filter')
      return
    }

    const newUserPreferences = userPreferences.filter((p: UserPreference) => p.filterName.toLowerCase() !== item.filterName.toLowerCase())

    if (item.filterName.toLowerCase() === selectedUserPreference.filterName.toLowerCase()) {
      const newPreference = {
        ...selectedUserPreference, 
        isDefault: false,
        filterName: '',
        implicit: false
      }
      updateArgs({selectedUserPreference: newPreference})
    }
    updateArgs({userPreferences: newUserPreferences})
  }, [selectedUserPreference, userPreferences, updateArgs])

  const onListImplicitChanged = useCallback((item: UserPreference) => {
    const newUserPreferences = userPreferences.map((x: UserPreference) => {
      if (x.filterName.toLowerCase() === item.filterName.toLowerCase()) return { ...x, implicit: !item.implicit }
      else return { ...x, implicit: false }
    })

    let newPreference
    if (selectedUserPreference.filterName.toLowerCase() === item.filterName.toLowerCase()) {
      newPreference = {...selectedUserPreference, implicit: !selectedUserPreference.implicit }
    } else {
      const newImplicitPreference = newUserPreferences.filter((p: UserPreference) => p.implicit === true)
      if (newImplicitPreference && newImplicitPreference.length > 0) newPreference = newImplicitPreference[0]
      else newPreference = {...selectedUserPreference, implicit: false }
    }
    updateArgs({userPreferences: newUserPreferences, selectedUserPreference: newPreference})
  }, [selectedUserPreference, userPreferences, updateArgs])

  const onDownloadEnabledChanged = useCallback(() => updateArgs({downloadEnabled: !downloadEnabled}), [downloadEnabled, updateArgs])
  const onDemoVisibleFiltersChanged = useCallback(() => setDemoVisibleFilters(!demoVisibleFilters), [demoVisibleFilters])
  const onDemoVisibleFieldsChanged = useCallback(() => setDemoVisibleFields(!demoVisibleFields), [demoVisibleFields])
  const onVisibleUserPreferencesChanged = useCallback(() => updateArgs({visibleUserPreferences: !visibleUserPreferences}), [visibleUserPreferences, updateArgs])

  return (
    <>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item>
          <ControlledCheckbox value={downloadEnabled} onChange={onDownloadEnabledChanged} label={'Download Button'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFilters} onChange={onDemoVisibleFiltersChanged} label={'Visible Filters'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFields} onChange={onDemoVisibleFieldsChanged} label={'Visible Fields'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={visibleUserPreferences} onChange={onVisibleUserPreferencesChanged} label={'User Preferences'} />
        </Grid>
      </Grid>
      <Divider/>
      {React.cloneElement(story, {args: {
        ...args,
        filters,
        visibleFilters,
        visibleFields,
        userPreferences,
        selectedUserPreference,
        downloadEnabled,
        visibleUserPreferences,
        children: <Grid container spacing={2}>
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
        </Grid>,
        onChangeFilterValue: handleFilterPropertyChange,
        downloadButtonVisible: downloadEnabled,
        handleVisibleFilterChange: handleVisibleFilterChange,
        handleVisibleFieldsChange: handleVisibleFieldsChange,
        visibleFields: demoVisibleFields ? visibleFields : undefined,
        visibleFilters: demoVisibleFilters ? visibleFilters: undefined,
        visibleUserPreferences: visibleUserPreferences,
        onUserPreferenceChanged: onUserPreferenceChanged,
        onAddUserPreference: onAddUserPreference,
        onListDeleteChanged: onListDeleteChanged,
        onListImplicitChanged: onListImplicitChanged,
        }})
      }
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

export default ListFilterDefaultDecorator
