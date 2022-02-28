import { useContext } from 'react'
import { AppCtx } from '../layout/App/context'

export function getAuthTypes(authName) {
  const authTypes = (useContext(AppCtx) || {}).authTypes || []
  return !!authTypes?.filter((item) => item.permissionName === authName)[0]
}
