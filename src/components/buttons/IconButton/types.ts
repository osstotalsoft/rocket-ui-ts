// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { ButtonProps } from '../Button/types'
import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SaveIcon from '@mui/icons-material/Save'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export type FontSize = 'inherit' | 'small' | 'medium' | 'large'

export type ButtonType = 'add' | 'cancel' | 'delete' | 'download' | 'downward' | 'edit' | 'view' | 'save' | 'upward'

export const iconType = {
  add: AddIcon,
  cancel: CancelIcon,
  delete: DeleteIcon,
  download: CloudDownloadIcon,
  downward: ArrowDownwardIcon,
  edit: EditIcon,
  view: VisibilityIcon,
  save: SaveIcon,
  upward: ArrowUpwardIcon
}

export type IconTypeKey = keyof typeof iconType

export interface IconButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonType
  fontSize?: FontSize
  loading?: boolean
}
