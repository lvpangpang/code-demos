import { Table } from 'antd-mobx-components'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import store from './store'
import { observer } from 'mobx-react-lite'

function List() {
  return (
    <Table
      store={store}
      scroll={{ x: true }}
      columns={[
        {
          title: '活动编号',
          dataIndex: 'templateId',
        },
        {
          title: '活动标题',
          dataIndex: 'title',
        },
        {
          title: '品牌',
          dataIndex: 'brandName',
        },
        {
          title: '城市',
          dataIndex: 'cityCodeNames',
        },
        {
          title: '共补类型',
          dataIndex: 'publicBenefitsDesc',
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
        },
        {
          title: '参与截止时间',
          dataIndex: 'deadLine',
        },
        {
          title: '活动开始时间',
          dataIndex: 'startDate',
        },
        {
          title: '活动结束时间',
          dataIndex: 'endDate',
        },
        {
          title: '活动状态',
          dataIndex: 'activityStatusContent',
        },
        {
          title: '操作',
          width: 200,
          fixed: 'right',
          render(record) {
            return (
              <div>
                <Link to={`/order-center/manage/order-list/detail`}>
                  详情
                </Link>
              </div>
            )
          },
        },
      ]}
    />
  )
}

export default observer(List)
