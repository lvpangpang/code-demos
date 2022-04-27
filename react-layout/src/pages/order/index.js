import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { View } from 'antd-mobx-components'
import { getSelectTypes } from '@/tools'

function Index() {
  console.log(getSelectTypes('brand'))
  return (
    <View>
      <p>首页</p>
      <Button type="primary">
        <Link to="/order-center/manage/order-list/detail">详情页</Link>
      </Button>
    </View>
  )
}

export default observer(Index)
