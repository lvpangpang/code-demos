import React from 'react'
import { Button } from 'antd-mobile'
import { observer } from 'mobx-react-lite'
import styles from './index.less'
import { useParams } from 'react-router-dom'

function Index(props) {
  console.log(props)
  console.log(useParams())
  return (
    <div className={styles.about_box}>
      <h1>列表</h1>

      <Button
        type="primary"
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到首页
      </Button>
      <br />
      <Button
        type="primary"
        onClick={() => {
          props.history.push('/detail')
        }}
      >
        跳转详情
      </Button>
    </div>
  )
}

export default observer(Index)
