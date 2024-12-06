// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { ChipProps as MuiChipPops } from '@mui/material'
import { TextFieldProps } from '../TextField'

export interface TagsInputProps extends Omit<MuiChipPops, 'value' | 'onChange'> {
  onChange: (selectedItems: string[]) => void
  value?: string[]
  placeholder?: string
  textFieldProps?: TextFieldProps
}

export type TagProps = MuiChipPops & {
  value: string[]
}
