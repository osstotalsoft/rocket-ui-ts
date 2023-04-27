import { Pagination } from 'components'
import React, { useCallback, useState } from 'react'

const WithFirstAndLastPreview = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)

  const handleChangePage = useCallback((value: number) => {
    setPage(value)
  }, [])

  const handleChangeRowsPerPage = useCallback((value: number) => {
    setPageSize(value)
    setPage(0)
  }, [])

  return (
    <Pagination
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

export default WithFirstAndLastPreview
