import React from 'react'
import { observer } from 'mobx-react-lite'
import View from '@/layout/View'

function Index() {
  return <View current={['详情']}>订单详情</View>
}

export default observer(Index)
