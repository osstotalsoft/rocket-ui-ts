import React, { useCallback, useState } from 'react'
import { Filters, TextField, UserPreference, VisibleField, VisibleFilter } from 'components'
import { filtersWithChildren} from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid, Divider } from '@mui/material'
import ControlledCheckbox from '../Autocomplete/components/ControlledCheckBox'
import { useFilteredList } from './_hooks'
import { Args } from '@storybook/react'

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

const ListFilterDefaultDecorator: React.FC<{args: Args, updateArgs: (newArgs: Partial<Args>) => void, children: React.JSX.Element}> = ({args, updateArgs, children: story}) => {
  const {listData} = useFilteredList(args.filters)

  const handleFilterPropertyChange = useCallback(
    (prop: string, value: unknown) => {
      updateArgs({filters: { ...args.filters, [prop]: value }})
    },
    [args.filters, updateArgs]
  )
  const [demoVisibleFields, setDemoVisibleFields] = useState(false)
  const [demoVisibleFilters, setDemoVisibleFilters] = useState(false)

  const handleVisibleFilterChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = args.visibleFilters.find((x: VisibleFilter) => x.fieldName === name)
    const index = args.visibleFilters.indexOf(filter)
    const newVisibleFilters = Object.assign([...args.visibleFilters], { [index]: { ...filter, isVisible: value } })
    updateArgs({visibleFilters: newVisibleFilters})
  }

  const filtersToShow = args.visibleFilters.filter((x: VisibleFilter) => x.isVisible).map((x: VisibleFilter) => x.fieldName)

  const handleVisibleFieldsChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = args.visibleFields.find((x: VisibleField) => x.fieldName === name)
    const index = args.visibleFields.indexOf(filter)
    const newVisibleFields = Object.assign([...args.visibleFields], { [index]: { ...filter, isVisible: value } })
    updateArgs({visibleFields: newVisibleFields})
  }

  const fieldsToShow = args.visibleFields.filter((x: VisibleField) => x.isVisible).map((x: VisibleField) => x.fieldName)

  const onUserPreferenceChanged = (name: string) => {
    const newValue = args.userPreferences.filter((x: UserPreference) => x.filterName.toLowerCase() === name.toLowerCase())[0]
    updateArgs({selectedUserPreference: newValue})

    const defaultFilters = getDefaultFilterValues(newValue)
    updateArgs({filters: defaultFilters, visibleFields:[...newValue.fields], visibleFilters:[...newValue.filters]})
  }

  const onAddUserPreference = (popUpUserPreference: UserPreference) => {
    if (popUpUserPreference.filterName === '') return

    const newPreference = Object.assign({}, popUpUserPreference, {
      isDefault: false,
      implicit: false,
      filterName: popUpUserPreference.filterName.trim()
    })
    const newValue = args.userPreferences.filter((x: UserPreference) => x.filterName.toLowerCase() === newPreference.filterName.toLowerCase())[0]

    if (newValue) return
    else {
      const newUserPreferences = Object.assign([...args.userPreferences, newPreference])
      updateArgs({userPreferences: newUserPreferences, selectedUserPreference: newPreference})
    }
  }

  const onListDeleteChanged = (item: UserPreference) => {
    if (item.isDefault) {
      alert('Can\'t delete default filter')
      return
    }

    const newUserPreferences = args.userPreferences.filter((p: UserPreference) => p.filterName.toLowerCase() !== item.filterName.toLowerCase())

    if (item.filterName.toLowerCase() === args.selectedUserPreference.filterName.toLowerCase()) {
      const newPreference = Object.assign({}, args.selectedUserPreference, {
        isDefault: false,
        filterName: '',
        implicit: false
      })
      updateArgs({selectedUserPreference: newPreference})
    }
    updateArgs({userPreferences: newUserPreferences})
  }

  const onListImplicitChanged = (item: UserPreference) => {
    const newUserPreferences = args.userPreferences.map((x: UserPreference) => {
      if (x.filterName.toLowerCase() === item.filterName.toLowerCase()) return { ...x, implicit: !item.implicit }
      else return { ...x, implicit: false }
    })

    let newPreference
    if (args.selectedUserPreference.filterName.toLowerCase() === item.filterName.toLowerCase()) {
      newPreference = Object.assign({}, args.selectedUserPreference, { implicit: !args.selectedUserPreference.implicit })
    } else {
      const newImplicitPreference = newUserPreferences.filter((p: UserPreference) => p.implicit === true)
      if (newImplicitPreference && newImplicitPreference.length > 0) newPreference = newImplicitPreference[0]
      else newPreference = Object.assign({}, args.selectedUserPreference, { implicit: false })
    }
    updateArgs({userPreferences: newUserPreferences, selectedUserPreference: newPreference})
  }

  return (
    <>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item>
          <ControlledCheckbox value={args.downloadEnabled} onChange={() => updateArgs({downloadEnabled: !args.downloadEnabled})} label={'Download Button'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFilters} onChange={() => setDemoVisibleFilters(!demoVisibleFilters)} label={'Visible Filters'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={demoVisibleFields} onChange={() => setDemoVisibleFields(!demoVisibleFields)} label={'Visible Fields'} />
        </Grid>
        <Grid item>
          <ControlledCheckbox value={args.visibleUserPreferences} onChange={() => updateArgs({visibleUserPreferences: !args.visibleUserPreferences})} label={'User Preferences'} />
        </Grid>
      </Grid>
      <Divider/>
      {React.cloneElement(story, {args: {
        ...args,
        children: <Grid container spacing={2}>
        {filtersToShow.includes('name') && (
          <Grid item xs={6}>
            <TextField
              label='Name'
              value={args.filters.name as string}
              onChange={event => handleFilterPropertyChange('name', event)}
              fullWidth
            />
          </Grid>
        )}
        {filtersToShow.includes('code') && (
          <Grid item xs={6}>
            <TextField
              label='Code'
              value={args.filters.code as string}
              onChange={event => handleFilterPropertyChange('code', event)}
              fullWidth
            />
          </Grid>
        )}
        </Grid>,
        onChangeFilterValue: handleFilterPropertyChange,
        downloadButtonVisible: args.downloadEnabled,
        handleVisibleFilterChange: handleVisibleFilterChange,
        handleVisibleFieldsChange: handleVisibleFieldsChange,
        visibleFields: demoVisibleFields ? args.visibleFields : undefined,
        visibleFilters: demoVisibleFilters ? args.visibleFilters: undefined,
        visibleUserPreferences: args.visibleUserPreferences,
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
