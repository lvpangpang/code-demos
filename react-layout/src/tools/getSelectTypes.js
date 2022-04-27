import { useAppInfo } from 'antd-mobx-components'

export function getSelectTypes(typeName) {
  const selectTypes = useAppInfo()?.selectTypes || {}
  return selectTypes[typeName] || []
}
