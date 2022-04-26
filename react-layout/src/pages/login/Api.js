import { http } from 'js-common-library'

export default {
  sendCode: (data) => http.post('/pms/v1/verify-code', data),
  login: (data) => http.post('/pms/v1/login', data),
}
