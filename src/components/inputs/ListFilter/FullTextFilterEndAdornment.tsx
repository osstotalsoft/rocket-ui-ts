import React from 'react'
import PropTypes from 'prop-types'
import InputAdornment from '@mui/material/InputAdornment'
import { FullTextFilterEndAdornmentProps } from './types'
import { Close, ExpandLess, ExpandMore, FilterList } from '@mui/icons-material'
import { IconButton } from 'components'

const FullTextFilterEndAdornment = ({ localizedStrings, resetTextFilter, expandFilters, expanded, openVisibleFiltersMenu, hasChildren, hasVisibleFilters } : FullTextFilterEndAdornmentProps) => {
  return (
    <InputAdornment position="end">
    <IconButton size='small' color='transparent' aria-label='Reset Filters' aria-description={localizedStrings.ResetFilters} tooltip={localizedStrings.ResetFilters} onClick={resetTextFilter}>
      <Close />
    </IconButton>
    {hasChildren && (
      <IconButton size='small' color='transparent' aria-label='Show Filters' aria-description={localizedStrings.ShowFilters} tooltip={localizedStrings.ShowFilters} onClick={expandFilters}>{expanded ? <ExpandLess /> : <ExpandMore />}</IconButton>
    )}
    {hasChildren && expanded && hasVisibleFilters && (
      <IconButton size='small' color='transparent' aria-label='Visible Filters' aria-description={localizedStrings.ChooseFilters} tooltip={localizedStrings.ChooseFilters} onClick={openVisibleFiltersMenu}>
        <FilterList />
      </IconButton>
    )}
  </InputAdornment>
  )
}

FullTextFilterEndAdornment.propTypes = {
  localizedStrings: PropTypes.object.isRequired,
  resetTextFilter: PropTypes.func.isRequired,
  expandFilters: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  openVisibleFiltersMenu: PropTypes.func.isRequired,
  hasChildren: PropTypes.bool.isRequired,
  hasVisibleFilters: PropTypes.bool.isRequired
}

export default FullTextFilterEndAdornment
