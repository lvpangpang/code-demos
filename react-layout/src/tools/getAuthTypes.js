import { useAppInfo } from '../layout/App'

export function getAuthTypes(authName) {
  const authTypes = useAppInfo()?.userInfo?.permissions || []
  return !!authTypes?.filter((item) => item.permissionName === authName)[0]
}
