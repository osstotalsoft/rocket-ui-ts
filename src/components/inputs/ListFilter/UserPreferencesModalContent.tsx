import React from 'react'
import PropTypes from 'prop-types'
import { UserPreferencesModalContentProps } from './types'
import { TextField, Button } from '../../../components'
import UserPreferencesTable from './UserPreferencesTable'
import { Grid } from '@mui/material'

const UserPreferencesModalContent = ({
  userPreferences,
  selectedUserPreference,
  onAddUserPreference,
  onListImplicitChanged,
  onListDeleteChanged,
  onUserPreferencesPropertyChanged,
  localizedStrings,
  isDirty
}: UserPreferencesModalContentProps) => {
  return (
    <Grid container alignItems="center" sx={{ paddingRight: 8 }}>
      <Grid item xs={12} sm={9}>
        <TextField
          fullWidth
          sx={{ marginTop: '5px' }}
          value={selectedUserPreference.isDefault ? '' : selectedUserPreference.filterName || ''}
          label={localizedStrings.FilterName}
          onChange={onUserPreferencesPropertyChanged}
          inputProps={{ maxLength: 25 }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button
          right
          size="large"
          color="primary"
          onClick={onAddUserPreference}
          aria-label={localizedStrings.Add}
          disabled={!isDirty || selectedUserPreference.filterName === ''}
        >
          {localizedStrings.Add}
        </Button>
      </Grid>
      {userPreferences.filter(p => p.isDefault === false).length > 0 && (
        <Grid item xs={12}>
          <UserPreferencesTable
            localizedStrings={localizedStrings}
            userPreferences={userPreferences}
            onListImplicitChanged={onListImplicitChanged}
            onListDeleteChanged={onListDeleteChanged}
          />
        </Grid>
      )}
    </Grid>
  )
}

UserPreferencesModalContent.propTypes = {
  userPreferences: PropTypes.array,
  selectedUserPreference: PropTypes.object.isRequired,
  onAddUserPreference: PropTypes.func.isRequired,
  onListImplicitChanged: PropTypes.func.isRequired,
  onListDeleteChanged: PropTypes.func.isRequired,
  onUserPreferencesPropertyChanged: PropTypes.func.isRequired,
  localizedStrings: PropTypes.object.isRequired
}

export default UserPreferencesModalContent
