import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { View } from 'antd-mobx-components'
import SearchBar from './Search'
import List from './List'

function Index() {
  return (
    <View>
      <SearchBar></SearchBar>
      <List></List>
    </View>
  )
}

export default observer(Index)
