import React from 'react'
import { Button } from 'antd-mobile'
import styles from './index.less'

function Index(props) {
  return (
    <div className={styles.about_box}>
      <h1>详情</h1>
      <Button
        type="primary"
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到列表
      </Button>
    </div>
  )
}

export default Index
