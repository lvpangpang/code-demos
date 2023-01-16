import React from 'react'
import styles from './index.less'

function Index(props) {
  const { history } = props
  return (
    <div className={styles.detail_box}>
      <h1>详情</h1>
      <span onClick={() => {
        history.go(-2)
      }}>回首页</span>
      <br/>
      <span onClick={() => {
        history.goBack()

      }}>回列表</span>
    </div>
  )
}

export default Index
