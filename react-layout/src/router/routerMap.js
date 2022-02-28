import React from 'react'

const Order = React.lazy(() => import('../pages/order'))
const OrderDetail = React.lazy(() => import('../pages/order/detail'))

export default [
  {
    path: '/order-center/manage/order-list',
    component: Order,
  },
  {
    path: '/order-center/manage/order-list/detail',
    component: OrderDetail,
  },
]
