import React from 'react'
import PropTypes from 'prop-types'
import { VisibleField, VisibleFieldsMenuProps } from './types'
import { Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material'
import { map, sort } from 'ramda'

const VisibleFieldsMenu = ({
  visibleFields,
  anchorElFieldsFilter,
  closeVisibleFieldsMenu,
  handleVisibleFieldsChange
}: VisibleFieldsMenuProps) => {
  return (
    <Menu anchorEl={anchorElFieldsFilter} open={Boolean(anchorElFieldsFilter)} onClose={closeVisibleFieldsMenu}>
      {map(
        (item: VisibleField) => {
          return (
            <MenuItem key={item.fieldName}>
              <FormControlLabel
                control={<Checkbox checked={item.isVisible} onChange={handleVisibleFieldsChange(item.fieldName)} />}
                label={item.label}
              />
            </MenuItem>
          )
        },
        sort((a, b) => (a.label > b.label ? 1 : -1), visibleFields)
      )}
    </Menu>
  )
}

VisibleFieldsMenu.propTypes = {
  visibleFields: PropTypes.array.isRequired,
  anchorElFieldsFilter: PropTypes.object,
  closeVisibleFieldsMenu: PropTypes.func.isRequired,
  handleVisibleFieldsChange: PropTypes.func.isRequired
}

export default VisibleFieldsMenu
