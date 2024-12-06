// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { Theme } from '@mui/material'
import { CustomComponents } from '../../types'

export default function Chip(theme: Theme): CustomComponents {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          margin: theme.spacing(0.5, 0.25)
        },
        deleteIcon: {
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                color: 'white'
              }
            },
            {
              props: { variant: 'filled', color: 'default' },
              style: {
                color: theme.palette.grey[700],
                ':hover': { color: theme.palette.grey[900] }
              }
            }
          ]
        }
      },
      variants: [
        {
          props: { variant: 'filled', color: 'default' },
          style: {
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[300]
          }
        }
      ]
    }
  }
}
