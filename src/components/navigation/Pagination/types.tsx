export interface DisplayedRows {
  from: number
  to: number
  count: number
}

export interface PaginationProps {
  loading?: boolean
  count: number
  page: number
  pageSize: number
  onPageChange: (newPage: number, direction: boolean) => void
  onRowsPerPageChange: (value: number) => void
  rowsPerPageText?: React.ReactNode
  onRefresh?: () => void
  rowsOfText?: string
  rowsPerPageOptions?: any
  [x: string]: any
}
