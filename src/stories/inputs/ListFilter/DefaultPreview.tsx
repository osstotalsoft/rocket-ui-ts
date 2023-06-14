import React, { useCallback, useState } from 'react'
import { ListFilter} from 'components'
import { minimumFilters, localizedStrings, sortableColumns } from './_mocks'

const DefaultPreview = () => {
  const [localFilters, setLocalFilters] = useState(minimumFilters)

  const handleFilterPropertyChange = useCallback(
    (prop: string, value: unknown) => {
      setLocalFilters(prevFilters => ({ ...prevFilters, [prop]: value }))
    },
    [setLocalFilters]
  )

  return (
    <ListFilter filters={localFilters} onChangeFilterValue={handleFilterPropertyChange} sortableColumns={sortableColumns} localizedStrings={localizedStrings} />
  )
}

export default DefaultPreview
