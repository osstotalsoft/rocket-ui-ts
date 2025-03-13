// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PaginationComponent from '../../../components/navigation/Pagination'
import WithFirstAndLastPreview from './WithFirstAndLastPreview'
import DefaultPreview from './DefaultPreview'
import WithNoCountPreview from './WithNoCountPreview'

const meta: Meta<typeof PaginationComponent> = {
  title: 'Components/Navigation/Pagination',
  component: PaginationComponent
} satisfies Meta<typeof PaginationComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * This is the default Pagination component. It enables the user to select a specific page from a range of pages,
 * refreshes the entries using the refresh button and allows choosing a number of displayed elements per page.
 */
export const Default: Story = {
  args: {
    count: 100
  },
  parameters: {
    docs: {
      source: {
        code: `
        const [page, setPage] = useState(0)
        const [pageSize, setPageSize] = useState(17)

        const handleChangePage = useCallback((value) => {
          setPage(value)
        }, [])

        const handleChangeRowsPerPage = useCallback((value) => {
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
          />
        )
        `,
        format: true
      }
    }
  },
  render: args => <DefaultPreview {...args} />
}

/**
 * This is the Pagination component without the count property. It enables the user to select a specific page from a range of pages,
 * refreshes the entries using the refresh button and allows choosing a number of displayed elements per page.
 */
export const WithNoCount: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const [page, setPage] = useState(0)
        const [pageSize, setPageSize] = useState(10)
        const hasNextPage = page >= 0
        const hasPreviousPage = page > 0

        const handleChangePage = useCallback((value) => {
          setPage(value)
        }, [])

        const handleChangeRowsPerPage = useCallback((value) => {
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
        `,
        format: true
      }
    }
  },
  render: args => <WithNoCountPreview {...args} />
}

/**
 * You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.
 */
export const WithFirstAndLastOptions: Story = {
  args: {
    count: 100,
    showFirstButton: true,
    showLastButton: true,
    onPageChange: undefined,
    onRowsPerPageChange: undefined
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        const [page, setPage] = useState(0)
        const [pageSize, setPageSize] = useState(17)

        const handleChangePage = useCallback((value) => {
          setPage(value)
        }, [])

        const handleChangeRowsPerPage = useCallback((value) => {
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
        `,
        format: true
      }
    }
  },
  render: () => <WithFirstAndLastPreview />
}
