import { useEffect, useState } from 'react'
import { listData } from './_mocks'
import { Filters } from 'components'
import { filter, includes, sort, toLower } from 'ramda'

export function useFilteredList(filters: Filters) {
  const [localListData, setLocalListData] = useState(listData)
  
  useEffect(()=>{
    let newListData = listData
    const fullTextFilter = toLower(filters?.fullTextFilter)
    newListData =  filter(({code, name}) => includes(fullTextFilter, toLower(code)) || includes(fullTextFilter, toLower(name)), newListData)
    const codeFilter = toLower(filters?.code as string)
    newListData =  filter(({code}) => includes(codeFilter, toLower(code)), newListData)
    const nameFilter = toLower(filters?.name as string)
    newListData = filter(({name}) => includes(nameFilter, toLower(name)), newListData)
    newListData = sort((a, b) => a[filters.orderByColumnName as keyof typeof a] > b[filters.orderByColumnName as keyof typeof b] ? !filters.orderByDescending ? 1 : -1 : !filters.orderByDescending ? -1 : 1, newListData)
    setLocalListData(newListData)
  },[filters])

  return {listData: localListData}
}