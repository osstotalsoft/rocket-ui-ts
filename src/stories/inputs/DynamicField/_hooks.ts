import { useCallback, useEffect, useMemo, useState } from 'react'
import { controlData } from './_mocks'
import { ControlType } from 'components'

export function useDynamicProps(controlType: ControlType) {
  const [controlValues, setControlValues] = useState<Record<string, any>>({})

  const currentControlData = useMemo(() => controlData.find(cdata => cdata.type === controlType), [controlType])

  const currentControlProps = useMemo(() => currentControlData?.props || [], [currentControlData])

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
      if (cprop.resolver && controlValues[cprop.name]) {
        result = { ...result, ...cprop.resolver }
      } else result = { ...result, [cprop.name]: controlValues[cprop.name] }
    })
    return result
  }, [controlValues, currentControlProps])

  return { controlValues, props, currentControlData, handlePropsChange }
}
