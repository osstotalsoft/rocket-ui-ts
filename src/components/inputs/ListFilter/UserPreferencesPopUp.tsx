import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from 'components'
import { Dialog, DialogTitle, DialogContent, Grid, DialogActions } from '@mui/material'
import { UserPreferencesPopUpProps } from './types'
import UserPreferencesTable from './UserPreferencesTable'

const UserPreferencesPopUp = ({
  showModal,
  onCloseModal,
  userPreferences,
  selectedUserPreference,
  onAddUserPreference,
  onListImplicitChanged,
  onListDeleteChanged,
  onUserPreferencesPropertyChanged,
  localizedStrings,
  isDirty
}: UserPreferencesPopUpProps) => {
  return (
    <Dialog open={showModal} onClose={onCloseModal} maxWidth="xl">
      <DialogTitle>{localizedStrings.UserPreferences}</DialogTitle>
      <DialogContent sx={{ paddingRight: 8 }}>
        <Grid container alignItems="center">
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
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseModal}
          size="large"
          color="primary"
          variant="outlined"
          sx={{ marginBottom: '0.5em', marginRight: '0.5em' }}
        >
          {localizedStrings.Close}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

UserPreferencesPopUp.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  userPreferences: PropTypes.array,
  selectedUserPreference: PropTypes.object.isRequired,
  onAddUserPreference: PropTypes.func.isRequired,
  onListImplicitChanged: PropTypes.func.isRequired,
  onListDeleteChanged: PropTypes.func.isRequired,
  onUserPreferencesPropertyChanged: PropTypes.func.isRequired,
  localizedStrings: PropTypes.object.isRequired
}

export default UserPreferencesPopUp
