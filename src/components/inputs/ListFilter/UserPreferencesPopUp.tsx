import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  DialogActions,
  Checkbox,
  TextField,
  Tooltip,
  IconButton,
  Button
} from '@mui/material'
import CustomButton from 'components/buttons/Button'
import { Delete } from '@mui/icons-material'
import { UserPreference, UserPreferencesPopUpProps } from './types'

const UserPreferencesPopUp: React.FC<UserPreferencesPopUpProps> = ({
  showModal,
  onCloseModal,
  userPreferences,
  selectedUserPreference,
  onAddUserPreference,
  onListImplicitChanged,
  onListDeleteChanged,
  onUserPreferencesPropertyChanged,
  localizedStrings
}) => {
  const [isDirty, setIsDirty] = useState(false)

  const onUserPreferencesPropertyChangedLocal = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true)
    onUserPreferencesPropertyChanged(e, 'filterName')
  }, [onUserPreferencesPropertyChanged])

  const onAddUserPreferenceLocal = useCallback(() => {
    onAddUserPreference()
    setIsDirty(false)
  }, [onAddUserPreference])

  const onListDeleteChangedLocal = useCallback((item: UserPreference) => {
    if (confirm(localizedStrings.DeleteUserPreference))
      onListDeleteChanged(item)
  },[localizedStrings.DeleteUserPreference, onListDeleteChanged])

  const onCloseModalLocal = useCallback(() => {
    setIsDirty(false)
    onCloseModal()
  },[onCloseModal])

  return (
    <Dialog open={showModal} onClose={onCloseModalLocal} maxWidth='xl'>
      <DialogTitle>{localizedStrings.UserPreferences}</DialogTitle>
      <DialogContent sx={{paddingRight: 8}}
      >
        <Grid container alignItems='center'>
          <Grid item xs={12} sm={9}>
            <TextField
              fullWidth
              sx={{marginTop: '5px'}}
              value={selectedUserPreference.isDefault ? '' : selectedUserPreference.filterName || ''}
              label={localizedStrings.FilterName}
              onChange={onUserPreferencesPropertyChangedLocal}
              inputProps={{ maxLength: 25 }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomButton
              right
              size="large"
              color="primary"
              onClick={onAddUserPreferenceLocal}
              disabled={!isDirty || (selectedUserPreference.filterName === '')}
            >
              {localizedStrings.Add}
            </CustomButton>
          </Grid>
          {userPreferences.filter(p => p.isDefault === false).length > 0 && (
            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{localizedStrings.FilterName}</TableCell>
                    <TableCell>{localizedStrings.Implicit}</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userPreferences
                    .filter(opt => !opt.isDefault)
                    .map(item => {
                      return (
                        <TableRow key={item.filterName}>
                          <TableCell>
                            {item.filterName}
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              color='primary'
                              checked={item.implicit || false}
                              onChange={() => onListImplicitChanged(item)}
                            />
                          </TableCell>
                          <TableCell>
                            
                            <Tooltip title={localizedStrings.Delete}>
                              <span>
                                <IconButton onClick={() => onListDeleteChangedLocal(item)} color='primary'>
                                  <Delete />
                                </IconButton>
                              </span>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseModalLocal}
          size='large'
          color='primary'
          variant='outlined'
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  selectedUserPreference: PropTypes.object.isRequired,
  onAddUserPreference: PropTypes.func.isRequired,
  onListImplicitChanged: PropTypes.func.isRequired,
  onListDeleteChanged: PropTypes.func.isRequired,
  onUserPreferencesPropertyChanged: PropTypes.func.isRequired,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  localizedStrings: PropTypes.object.isRequired,
}

export default UserPreferencesPopUp
