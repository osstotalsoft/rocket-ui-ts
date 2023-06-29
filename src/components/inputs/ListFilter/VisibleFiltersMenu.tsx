import React from 'react'
import PropTypes from 'prop-types'
import { VisibleFiltersMenuProps, VisibleFilter } from './types'
import { Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material'
import { map, sort } from 'ramda'

const VisibleFiltersMenu = ({
  visibleFilters,
  anchorElCustomize,
  closeVisibleFiltersMenu,
  handleVisibleFilterChange
}: VisibleFiltersMenuProps) => {
  return (
    <Menu anchorEl={anchorElCustomize} open={Boolean(anchorElCustomize)} onClose={closeVisibleFiltersMenu}>
      {map(
        (item: VisibleFilter) => {
          return (
            <MenuItem key={item.fieldName}>
              <FormControlLabel
                control={<Checkbox checked={item.isVisible} onChange={handleVisibleFilterChange(item.fieldName)} />}
                label={item.label}
              />
            </MenuItem>
          )
        },
        sort((a, b) => (a.label > b.label ? 1 : -1), visibleFilters)
      )}
    </Menu>
  )
}

VisibleFiltersMenu.propTypes = {
  visibleFilters: PropTypes.array.isRequired,
  anchorElCustomize: PropTypes.object,
  closeVisibleFiltersMenu: PropTypes.func.isRequired,
  handleVisibleFilterChange: PropTypes.func.isRequired
}

export default VisibleFiltersMenu
