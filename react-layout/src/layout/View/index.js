import { uesContext } from 'react'
import { Breadcrumb } from 'antd'
import { AppLayoutCtx } from '../AppLayout/layoutContext'

const { Item } = Breadcrumb

function Index(props) {
  const { children } = props
  // const list = uesContext(AppLayoutCtx)
  // console.log(list)
  return (
    <div>
      <Breadcrumb>
        <Item>订单中心</Item>
        <Item>订单管理</Item>
        <Item>订单列表</Item>
      </Breadcrumb>
      <div>{children}</div>
    </div>
  )
}

export default Index
