import React, { useState } from 'react'
import { ListFilter, TextField } from 'components'
import { sortableColumns, visibleFilters, localizedStrings } from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@mui/material'
import { useFilteredList } from './_hooks'

const VisibleFiltersPreview = () => {
  const {filters, listData, handleFilterPropertyChange} = useFilteredList()
  const [localVisibleFilters, setLocalVisibleFilters] = useState(visibleFilters)

  const handleVisibleFilterChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = localVisibleFilters.find(x => x.fieldName === name)
    const index = localVisibleFilters.indexOf(filter)
    const newVisibleFilters = Object.assign([...localVisibleFilters], { [index]: { ...filter, isVisible: value } })
    setLocalVisibleFilters(newVisibleFilters)
  }

  const filtersToShow = localVisibleFilters.filter(x => x.isVisible).map(x => x.fieldName)

  return (
    <>
      <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
        handleVisibleFilterChange={handleVisibleFilterChange}
        visibleFilters={localVisibleFilters}
      >
        <Grid container spacing={2}>
          {filtersToShow.includes('name') && (
            <Grid item xs={6}>
              <TextField
                label="Name"
                value={filters.name as string}
                onChange={event => handleFilterPropertyChange('name', event)}
                fullWidth
              />
            </Grid>
          )}
          {filtersToShow.includes('code') && (
            <Grid item xs={6}>
              <TextField
                label="Code"
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

export default VisibleFiltersPreview
