import { SearchBar, Select } from 'antd-mobx-components'
import { Button, Input, DatePicker } from 'antd'
import { observer } from 'mobx-react-lite'
import store from './store'

const { Item } = SearchBar
const { RangePicker } = DatePicker

function Search(props) {
  return (
    <SearchBar itemCol={{ span: 6 }} store={store}>
      <Item label="活动编号" name="templateId">
        <Input />
      </Item>
      <Item label="活动标题" name="title">
        <Input />
      </Item>
      {/* <Item label="品牌" name="brandNoList">
        <Select types='brand' mode="multiple" placeholder="全部" />
      </Item> */}

      <Item name="time" label="活动开始时间" autoPlaceholder={false}>
        <RangePicker style={{ width: 300 }} />
      </Item>
    </SearchBar>
  )
}

export default observer(Search)
