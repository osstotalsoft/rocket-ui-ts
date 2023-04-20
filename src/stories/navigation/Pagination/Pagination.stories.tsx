// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PaginationComponent from '../../../components/navigation/Pagination'
import TablePaginationComponent from './TablePagination'
import ButtonsPaginationComponent from './ButtonsPagination'

const meta: Meta<typeof PaginationComponent> = {
  title: 'Components/Navigation/Pagination',
  component: PaginationComponent,
  tags: ['autodocs']
} satisfies Meta<typeof PaginationComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The Pagination component enables the user to select a specific page from a range of pages.
 */
export const Pagination: Story = {
  args: {
    count: 100,
    pageSize: 10,
    page: 0,
    rowsPerPageOptions: [10, 20],
    onPageChange: (_newPage: number, _direction: boolean) => {},
    onRowsPerPageChange: (_value: number) => {}
  }
}

/**
 * The Pagination component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog.
 * 
 * For the pagination of a large set of tabular data, you should use the TablePagination component.
 *
 */
export const TablePagination: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
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
        `,
        format: true
      }
    }
  },
  render: () => <TablePaginationComponent />
}


/**

 *
 * You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.
 */
export const ButtonsPagination: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
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
        `,
        format: true
      }
    }
  },
  render: () => <ButtonsPaginationComponent />
}
