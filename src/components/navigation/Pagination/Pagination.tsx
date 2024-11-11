import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import TablePagination from '@mui/material/TablePagination'
import Grid from '@mui/material/Grid2'
import { RefreshButtonContainer } from './PaginationStyles'
import RefreshIcon from '@mui/icons-material/Refresh'
import { PaginationProps, DisplayedRows } from './types'
import IconButton from '../../buttons/IconButton'
import { T, always, cond, equals } from 'ramda'

const displayedRows =
  (rowsOfText: string) =>
  ({ from, to, count }: DisplayedRows) => {
    return `${from}-${to} ${rowsOfText} ${count}`
  }

const contentAlignment = cond([
  [equals('left'), always('flex-start')],
  [equals('right'), always('flex-end')],
  [equals('center'), always('center')],
  [T, always('flex-end')]
])

/**
 * The Pagination component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog.
 *
 * At its core, the Pagination component uses [Material-UI TablePagination](https://mui.com/material-ui/react-pagination/#table-pagination).
 */
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
  align,
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
      const value = Number(event?.target?.value)
      onRowsPerPageChange(value)
    },
    [onRowsPerPageChange]
  )

  const handleRefresh = useCallback(() => onRefresh && onRefresh(), [onRefresh])

  return (
    <Grid container alignItems="center" justifyContent={contentAlignment(align)}>
      {!loading && (
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={pageSize}
          onRowsPerPageChange={handleRowsPerPageChange}
          labelRowsPerPage={rowsPerPageText}
          labelDisplayedRows={displayedRows(rowsOfText)}
          rowsPerPageOptions={rowsPerPageOptions}
          {...rest}
        />
      )}
      {onRefresh && (
        <RefreshButtonContainer>
          <IconButton onClick={handleRefresh} color="default" variant="text" disabled={loading}>
            <RefreshIcon />
          </IconButton>
        </RefreshButtonContainer>
      )}
    </Grid>
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
   * @param {number} page The page selected.
   * @param {boolean} direction Direction for previous/next page (false for previous, true for next).
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {number} value The selected rows per page value
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
      PropTypes.exact({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ]).isRequired
  ),
  /**
   * Align container.
   * @default 'right'
   */
  align: PropTypes.oneOf(['left', 'right', 'center'])
}

export default Pagination
