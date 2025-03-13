import { TablePaginationProps as MuiTablePaginationProps } from '@mui/material'
import React from 'react'

export interface PaginationProps
  extends Omit<MuiTablePaginationProps, 'onPageChange' | 'count' | 'rowsPerPage' | 'onRowsPerPageChange'> {
  /**
   * If the page is loading, this property is set to true
   */
  loading?: boolean
  /**
   * The total number of rows.
   *
   *  @default null
   */
  count?: number
  /**
   * The number of rows per page. This property is required.
   */
  pageSize: number
  /**
   * Customize the rows per page label.
   *
   * @default 'Rows per page:'
   */
  rowsPerPageText?: React.ReactNode
  /**
   * Customize the displayed rows label.
   * @default 'of'
   */
  rowsOfText?: string
  /**
   * The function called on refresh.
   */
  onRefresh?: () => void
  /**
   * Callback fired when the page is changed.
   *
   * @param {number} page The page selected.
   * @param {boolean} direction Direction for previous/next page (false for previous, true for next).
   */
  onPageChange: (page: number, direction: boolean) => void
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {number} value The selected rows per page value
   */
  onRowsPerPageChange: (value: number) => void
  /**
   * If 'true', the next page button will be disabled.
   * @default false
   */
  hasNextPage?: boolean
  /**
   * If 'true', the previous page button will be disabled.
   * @default false
   */
  hasPreviousPage?: boolean
}

export interface DisplayedRows {
  from: number
  to: number
  count: number
  page: number
}
