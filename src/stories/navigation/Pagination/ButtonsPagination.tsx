import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import Pagination from '../../../components/navigation/Pagination'

const ButtonsPagination = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(17)

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
      showFirstButton={true}
      showLastButton={true}
    />
  )
}

export default ButtonsPagination
