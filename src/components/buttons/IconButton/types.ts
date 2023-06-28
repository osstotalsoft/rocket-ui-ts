// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { ButtonProps } from '../Button/types'
import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SaveIcon from '@mui/icons-material/Save'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'
import PostAddIcon from '@mui/icons-material/PostAdd'

export type FontSize = 'inherit' | 'small' | 'medium' | 'large'

export type ButtonType = 'add' | 'cancel' | 'close' | 'delete' | 'download' | 'downward' | 'edit' | 'view' | 'save' | 'upward' | 'expandLess' | 'expandMore' | 'filterList' | 'postAdd'

export const iconType = {
  add: AddIcon,
  cancel: CancelIcon,
  close: CloseIcon,
  delete: DeleteIcon,
  download: CloudDownloadIcon,
  downward: ArrowDownwardIcon,
  edit: EditIcon,
  view: VisibilityIcon,
  save: SaveIcon,
  upward: ArrowUpwardIcon,
  expandLess: ExpandLessIcon,
  expandMore: ExpandMoreIcon,
  filterList: FilterListIcon,
  postAdd: PostAddIcon
}

export type IconTypeKey = keyof typeof iconType

export interface IconButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonType
  fontSize?: FontSize
  loading?: boolean
}
