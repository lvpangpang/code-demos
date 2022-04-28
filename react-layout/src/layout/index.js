import React, { useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { http, getStorage } from 'js-common-library'
import { App, AppLayout } from 'antd-mobx-components'

import Router from '../router'
import User from './User'

const Login = React.lazy(() => import('../pages/login'))

function Index() {
  const [data, setData] = useState({})
  const [base, setBase] = useState({})
  const { pathname } = useLocation()

  // 直接访问登录页面
  if (pathname === '/login') {
    return <Route exact path="/login" component={Login} />
  }

  // 获取用户信息， 菜单
  const getUserInfo = async () => {
    const data = await http.get('/saas/v1/user/current_user_permission')
    setData(data || {})
  }

  // 获取下拉框数据
  const getSelectTypes = async () => {
    const data = await http.get('/saas/v1/basic/dataTypes')
    setBase(data || {})
  }

  const init = () => {
    getUserInfo()
    getSelectTypes()
  }

  return (
    <App
      id={data.id}
      provider={{
        selectTypes: base,
        userInfo: data,
      }}
      init={init}
      isLogin={() => !!getStorage('skio-token')}
    >
      <AppLayout menuConfig={data?.menus} logo={'管理系统'} extra={<User></User>}>
        <Router></Router>
      </AppLayout>
    </App>
  )
}

export default Index
