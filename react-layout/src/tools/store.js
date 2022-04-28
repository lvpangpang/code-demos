import { getStorage, removeStorage, http } from "js-common-library"

export async function loginOut() {
  if (getStorage('skio-token')) {
    await http.post('/pms/v1/logout').finally(() => {
      removeStorage('skio-token')
      window.location.reload()
    })
  }
  window.location.reload()
}