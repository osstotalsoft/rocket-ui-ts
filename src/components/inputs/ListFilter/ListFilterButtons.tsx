import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'components'
import { ListFilterButtonsProps } from './types'
import { CloudDownload, FilterList, PostAdd } from '@mui/icons-material'
import { Grid, useMediaQuery, useTheme } from '@mui/material'

const ListFilterButtons = ({
   localizedStrings,
   visibleUserPreferences,
   downloadButtonVisible,
   downloadEnabled,
   hasVisibleFields,
   mdLengthButtons,
   onShowUserPreferencesModal,
   openExportMenu,
   openVisibleFieldsMenu
} : ListFilterButtonsProps) => {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Grid container item xs={6} sm={12} md={mdLengthButtons} spacing={1} wrap='nowrap' justifyContent={smallScreen ? 'flex-start' : 'flex-end'}>
    {visibleUserPreferences && (
      <Grid item>
        <IconButton color="primary" aria-label='User Preferences' aria-description={localizedStrings.EditUserPreferences} tooltip={localizedStrings.EditUserPreferences} onClick={onShowUserPreferencesModal}>
          <PostAdd />
        </IconButton>
      </Grid>
    )}
    {downloadButtonVisible && (
      <Grid item>
        <IconButton color='primary' aria-label={localizedStrings.Download} aria-disabled={!downloadEnabled} tooltip={localizedStrings.Download} onClick={openExportMenu} disabled={!downloadEnabled}>
          <CloudDownload />
        </IconButton>
      </Grid>
    )}
    {hasVisibleFields && (
      <Grid item>
        <IconButton color='primary' aria-label='Visible Fields' aria-description={localizedStrings.ChooseFields} tooltip={localizedStrings.ChooseFields} onClick={openVisibleFieldsMenu}>
          <FilterList />
        </IconButton>
      </Grid>
    )}
    </Grid>
  )
}

ListFilterButtons.propTypes = {
  localizedStrings: PropTypes.object.isRequired,
  visibleUserPreferences: PropTypes.bool,
  downloadButtonVisible: PropTypes.bool,
  downloadEnabled: PropTypes.bool,
  hasVisibleFields: PropTypes.bool,
  mdLengthButtons: PropTypes.number,
  onShowUserPreferencesModal: PropTypes.func,
  openExportMenu: PropTypes.func,
  openVisibleFieldsMenu: PropTypes.func
}

export default ListFilterButtons
