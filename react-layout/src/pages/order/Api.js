import { http } from 'js-common-library'

export default {
  // 活动列表
  async getList(params) {
    const  data  = await http.get(
      '/activity-backstage/v1/marketing/platformActivityPage',
      params
    )
    return data
  },
  // 活动详情
  async getDetail(params) {
    const { data } = await http.get(
      '/activity-backstage/v1/marketing/marketingActivityDetail',
      params
    )
    return data
  },
  // 增加活动
  createActive(data) {
    return http.post('/activity-backstage/v1/marketing/createActivityTemplate', data)
  },
  // 编辑活动
  editActive(data) {
    return http.put('/activity-backstage/v1/marketing/updateActivityTemplate', data)
  },
  // 活动下架/作废
  updateStatus(data) {
    return http.post('/activity-backstage/v1/marketing/terminateActivityTemplate', data)
  },
  // 奖励信息
  async getRewardStatisticInfo(params) {
    const data = await http.get('/activity-backstage/v1/marketing/rewardStatisticInfo', params)
    return data
  },
  // 奖励信息-瓜分奖
  async getPartitionRewardList(params) {
    const data = await http.get('/activity-backstage/v1/marketing/partitionRewardList', params)
    return data
  },
  // 奖励明细
  async getRewardStatisticDetail(params) {
    const data = http.get('/activity-backstage/v1/marketing/rewardStatisticDetail', params)
    return data
  },
  // 奖励明细导出
  exportExcel(data) {
    return http.get('/activity-backstage/v1/marketing/exportLarge', data)
  },
}
