import React from 'react'
import { Button } from 'antd-mobile'
import styles from './index.less'
import { Link, useParams } from 'react-router-dom'

function Index(props) {
  console.log(props)
  console.log(useParams())
  return (
    <div className={styles.home_box}>
      <h1>首页</h1>
      <Button type="primary" onClick={() => {props.history.push('/list')}}>跳转列表</Button>
      <Link to="/list" onClick={() => {console.log(123)}}>吕肥肥</Link>
    </div>
  )
}

export default Index
