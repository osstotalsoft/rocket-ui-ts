import React, { useCallback, useState } from 'react'
import Pagination from '../../../components/navigation/Pagination'
import { Grid } from '@mui/material'

const TablePagination = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(25)

  const handleChangePage = useCallback((value: number) => {
    setPage(value)
  }, [])

  const handleChangeRowsPerPage = useCallback((value: number) => {
    setPageSize(value)
    setPage(0)
  }, [])

  return (
    <Pagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      pageSize={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[25, 50, 75, 100]}
    />
  )
}

export default TablePagination
