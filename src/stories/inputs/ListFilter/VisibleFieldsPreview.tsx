import React, { useState } from 'react'
import { ListFilter, TextField } from 'components'
import { sortableColumns, visibleFields, localizedStrings } from './_mocks'
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@mui/material'
import { useFilteredList } from './_hooks'

const VisibleFieldsPreview = () => {
  const {filters, listData, handleFilterPropertyChange} = useFilteredList()
  const [localVisibleFields, setLocalVisibleFields] = useState(visibleFields)

  const handleVisibleFieldsChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const filter = localVisibleFields.find(x => x.fieldName === name)
    const index = localVisibleFields.indexOf(filter)
    const newVisibleFields = Object.assign([...localVisibleFields], { [index]: { ...filter, isVisible: value } })
    setLocalVisibleFields(newVisibleFields)
  }

  const fieldsToShow = localVisibleFields.filter(x => x.isVisible).map(x => x.fieldName)

  return (
    <>
      <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
        handleVisibleFieldsChange={handleVisibleFieldsChange}
        visibleFields={localVisibleFields}
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

export default VisibleFieldsPreview
