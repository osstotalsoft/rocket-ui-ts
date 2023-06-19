import { useEffect, useState } from 'react'
import { listData } from './_mocks'
import { Filters } from 'components'

export function useFilteredList(filters: Filters) {
  const [localListData, setLocalListData] = useState(listData)
  
  useEffect(()=>{
    let newListData = [...listData]
    if (filters.fullTextFilter)
      newListData = newListData.filter(x => x.code.toLowerCase().includes(filters.fullTextFilter.toLowerCase()) || x.name.toLowerCase().includes(filters.fullTextFilter.toLowerCase()))
    if (filters.code)
      newListData = newListData.filter(x => x.code.toLowerCase().includes((filters.code as string).toLowerCase()))
    if (filters.name)
      newListData = newListData.filter(x => x.name.toLowerCase().includes((filters.name as string).toLowerCase()))
    newListData.sort((a, b) => a[filters.orderByColumnName as keyof typeof a] > b[filters.orderByColumnName as keyof typeof a] ? !filters.orderByDescending ? 1 : -1 : !filters.orderByDescending ? -1 : 1)
    setLocalListData(newListData)
  },[filters])


  return {listData: localListData}
}