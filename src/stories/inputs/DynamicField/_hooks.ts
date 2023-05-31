import { useCallback, useEffect, useMemo, useState } from 'react'
import { controlData, ControlData } from './_mocks'
import { ControlType } from 'components'
import { useMediaQuery } from '@mui/material'

export function useDynamicProps(controlType: ControlType) {
  const [controlValues, setControlValues] = useState<Record<string, any>>({})

  const currentControlData = useMemo(() => controlData.find(cdata => cdata.type === controlType) || { props: [] } as ControlData, [controlType])

  const currentControlProps = useMemo(() => currentControlData.props, [currentControlData])

  useEffect(() => {
    setControlValues(
      currentControlProps.reduce<Record<string, any>>((acc, curr) => {
        acc[curr.name] = curr.value
        return acc
      }, {})
    )
  }, [currentControlProps])

  const handlePropsChange = useCallback((name: string, value: any) => {
    setControlValues(prev => ({ ...prev, [name]: value }))
  }, [])

  const props = useMemo(() => {
    let result: Record<string, any> = {}
    currentControlProps.forEach(cprop => {
      if (cprop.resolver) {
        if (controlValues[cprop.name]) result = { ...result, ...cprop.resolver }
      } else result = { ...result, [cprop.name]: controlValues[cprop.name] }
    })
    return result
  }, [controlValues, currentControlProps])

  return { controlValues, props, currentControlData, handlePropsChange }
}

export function useContainerSizing() {
  const over700 = useMediaQuery('(min-width:700px)')
  const over1000 = useMediaQuery('(min-width:1000px)')

  const width = useMemo(() => (over1000 ? '900px' : over700 ? '600px' : 'auto'), [over700, over1000])

  return width
}
