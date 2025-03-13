import { Pagination } from 'components'
import React, { useCallback, useState } from 'react'

const WithNoCountPreview = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)
  const hasNextPage = page >= 0
  const hasPreviousPage = page > 0

  const handleChangePage = useCallback((value: number) => {
    setPage(value)
  }, [])

  const handleChangeRowsPerPage = useCallback((value: number) => {
    setPageSize(value)
    setPage(0)
  }, [])

  return (
    <Pagination
      page={page}
      onPageChange={handleChangePage}
      pageSize={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      hasNextPage={hasNextPage}
      hasPreviousPage={hasPreviousPage}
    />
  )
}

export default WithNoCountPreview
