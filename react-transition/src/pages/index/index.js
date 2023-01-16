import React from 'react'
import styles from './index.less'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className={styles.home_box}>
      <h1>首页</h1>
      <Link to="/list">列表</Link>
    </div>
  )
}

export default Index
