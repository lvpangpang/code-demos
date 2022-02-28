import { useContext } from 'react'
import { AppCtx } from '../layout/App/context'

export function getSelectTypes(typeName) {
  const selectTypes = (useContext(AppCtx) || {}).selectTypes
  return selectTypes[typeName] || []
}
