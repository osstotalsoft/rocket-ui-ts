import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import TablePagination from '@mui/material/TablePagination'
import { PaginationContainer, RefreshButtonContainer } from './PaginationStyles'
import RefreshIcon from '@mui/icons-material/Refresh'
import { pipe, uniq, sortBy, identity } from 'ramda'
import { PaginationProps, DisplayedRows } from './types'
import IconButton from '../../buttons/IconButton'

const displayedRows =
  (rowsOfText: string) =>
  ({ from, to, count }: DisplayedRows) => {
    return `${from}-${to} ${rowsOfText} ${count}`
  }

const Pagination: React.FC<PaginationProps> = ({
  loading,
  count = 1,
  page,
  pageSize,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageText = 'Rows per page:',
  onRefresh,
  rowsOfText = 'of',
  rowsPerPageOptions = [10, 25, 50, 100],
  ...rest
}) => {
  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      const direction = newPage - page
      onPageChange(newPage, direction > 0)
    },
    [onPageChange, page]
  )

  const handleRowsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onRowsPerPageChange(+event.target.value)
    },
    [onRowsPerPageChange]
  )

  const handleRefresh = useCallback(() => onRefresh && onRefresh(), [onRefresh])

  const sortedRowsPerPageOptions = useMemo(
    () => pipe(uniq, sortBy(identity))([pageSize, ...rowsPerPageOptions]),
    [pageSize, rowsPerPageOptions]
  )

  return (
    <>
      {!loading && (
        <PaginationContainer>
          <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleRowsPerPageChange}
            labelRowsPerPage={rowsPerPageText}
            labelDisplayedRows={displayedRows(rowsOfText)}
            rowsPerPageOptions={sortedRowsPerPageOptions}
            {...rest}
          />
        </PaginationContainer>
      )}
      {onRefresh && (
        <RefreshButtonContainer>
          <IconButton onClick={handleRefresh} color="default" variant="text">
            <RefreshIcon />
          </IconButton>
        </RefreshButtonContainer>
      )}
    </>
  )
}

Pagination.propTypes = {
  /**
   * If the page is loading, this property is set to true
   */
  loading: PropTypes.bool,
  /**
   * @default 1
   * The total number of pages. This property is required.
   */
  count: PropTypes.number.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,
  /**
   * The number of rows per page. This property is required.
   */
  pageSize: PropTypes.number.isRequired,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   * @param {boolean} direction Direction for previous/next page (false for previous, true for next).
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: PropTypes.func.isRequired,
  /**
   * The function called on refresh.
   */
  onRefresh: PropTypes.func,
  /**
   * @default 'Rows per page:'
   * Customize the rows per page label.
   */
  rowsPerPageText: PropTypes.node,
  /**
   * @default 'of'
   * Customize the displayed rows label.
   */
  rowsOfText: PropTypes.string,
  /**
   * @default '[10, 25, 50, 100]'
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   */
  rowsPerPageOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ])
  )
}

export default Pagination
