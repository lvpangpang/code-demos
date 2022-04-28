import { makeAutoObservable } from 'mobx'
import { TableStore } from 'antd-mobx-components'
import moment from 'moment'
import Api from './Api'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  $table = new TableStore({
    fetchList: async (params) => {
      const data = await Api.getList({
        params: this.getParams(params),
      })
      return data
    },
  })

  getParams = (params) => {
    const { time, ...rest } = params
    if (time && time.length) {
      const [start, end] = time
      rest.startDateLeft = moment(start.format('YYYY-MM-DD')).valueOf()
      rest.startDateRight = moment(end.format('YYYY-MM-DD')).valueOf()
    }
    return rest
  }
}

export default new Store()
