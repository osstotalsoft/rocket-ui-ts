import React from 'react'
import { ListFilter, TextField } from 'components'
import { localizedStrings, sortableColumns } from './_mocks'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useFilteredList } from './_hooks'

const WithChildFiltersPreview = () => {
  const {filters, listData, handleFilterPropertyChange} = useFilteredList()

  return (
    <>
      <ListFilter
        filters={filters}
        sortableColumns={sortableColumns}
        localizedStrings={localizedStrings}
        onChangeFilterValue={handleFilterPropertyChange}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              value={filters.name as string}
              onChange={event => handleFilterPropertyChange('name', event)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Code"
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

export default WithChildFiltersPreview
