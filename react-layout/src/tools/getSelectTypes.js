import { useAppInfo } from '../layout/App'

export function getSelectTypes(typeName) {
  const selectTypes = useAppInfo()?.selectTypes || {}
  return selectTypes[typeName] || []
}
