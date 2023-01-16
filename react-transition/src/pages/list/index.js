import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.less'

function Index(props) {
  const { history } = props
  return (
    <div className={styles.about_box}>
      <h1>列表</h1>
      <span onClick={() => {
        history.goBack()

      }}>回首页</span>
      <br/>
      <Link to="/detail">去详情</Link>
    </div>
  )
}

export default Index
