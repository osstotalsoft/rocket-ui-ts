import { useCallback, useEffect, useState } from 'react'
import { filtersWithChildren, listData } from './_mocks'
import { Filters } from 'components'

export function useFilteredList() {
  const [localFilters, setLocalFilters] = useState<Filters>(filtersWithChildren)
  const [localListData, setLocalListData] = useState(listData)
  
  useEffect(()=>{
    let newListData = [...listData]
    if (localFilters.fullTextFilter)
      newListData = newListData.filter(x => x.code.toLowerCase().includes(localFilters.fullTextFilter.toLowerCase()) || x.name.toLowerCase().includes(localFilters.fullTextFilter.toLowerCase()))
    if (localFilters.code)
      newListData = newListData.filter(x => x.code.toLowerCase().includes((localFilters.code as string).toLowerCase()))
    if (localFilters.name)
      newListData = newListData.filter(x => x.name.toLowerCase().includes((localFilters.name as string).toLowerCase()))
    newListData.sort((a, b) => a[localFilters.orderByColumnName as keyof typeof a] > b[localFilters.orderByColumnName as keyof typeof a] ? !localFilters.orderByDescending ? 1 : -1 : !localFilters.orderByDescending ? -1 : 1)
    setLocalListData(newListData)
  },[localFilters])

  const handleFilterPropertyChange = useCallback(
    (prop: string, value: unknown) => {
      setLocalFilters(prevFilters => ({ ...prevFilters, [prop]: value }))
    },
    [setLocalFilters]
  )

  return {filters: localFilters, listData: localListData, handleFilterPropertyChange, setFilters: setLocalFilters}
}