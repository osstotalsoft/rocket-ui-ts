import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { UserPreferencesListProps, UserPreference } from './types'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { filter, map } from 'ramda'
import { IconButton } from 'components'

const UserPreferencesTable = ({
  localizedStrings,
  userPreferences,
  onListImplicitChanged,
  onListDeleteChanged
}: UserPreferencesListProps) => {
  const onListImplicitChangedLocal = useCallback((item: UserPreference) => () => onListImplicitChanged(item), [onListImplicitChanged])
  const onListDeleteChangedLocal = useCallback((item: UserPreference) => () => onListDeleteChanged(item), [onListDeleteChanged])
  
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{localizedStrings.FilterName}</TableCell>
          <TableCell>{localizedStrings.Implicit}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(
          (item: UserPreference) => {
            return (
              <TableRow key={item.filterName}>
                <TableCell>{item.filterName}</TableCell>
                <TableCell>
                  <Checkbox color="primary" checked={item.implicit || false} onChange={onListImplicitChangedLocal(item)} />
                </TableCell>
                <TableCell>
                  <IconButton
                    type='delete'
                    tooltip={localizedStrings.Delete}
                    onClick={onListDeleteChangedLocal(item)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            )
          },
          filter(opt => !opt.isDefault, userPreferences)
        )}
      </TableBody>
    </Table>
  )
}

UserPreferencesTable.propTypes = {
  localizedStrings: PropTypes.object.isRequired,
  userPreferences: PropTypes.array,
  onListImplicitChanged: PropTypes.func.isRequired,
  onListDeleteChanged: PropTypes.func.isRequired
}

export default UserPreferencesTable
