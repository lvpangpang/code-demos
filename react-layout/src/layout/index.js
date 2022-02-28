import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { http, getStorage } from 'js-common-library'

import App from './App'
import AppLayout from './AppLayout'
import Router from '../router'

const Login = React.lazy(() => import('../pages/login'))

function Index() {
  const [data, setData] = useState({})
  const [base, setBase] = useState({})
  const { location } = useHistory()

  // 直接访问登录页面
  if (location.pathname === '/login') {
    return <Route exact path="/login" component={Login} />
  }

  const getPersion = async () => {
    try {
      const data = await http.get(
        '/saas/v1/user/current_user_permission'
      )
      setData(data || {})
    } catch (err) {
      setData({
        id: 1,
      })
    }
  }

  const getBase = async () => {
    try {
      const data = await http.get('/saas/v1/basic/dataTypes')
      setBase(data || {})
    } catch (err) {
      setData({
        id: 1,
      })
    }
  }

  const init = () => {
    getPersion()
    getBase()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <App
      id={data.id}
      provider={{
        selectTypes: base,
        authTypes: data.permissions,
      }}
      // init={init}
      isLogin={() => !!getStorage('skio-token')}
    >
      <AppLayout menuConfig={data?.menus}>
        <Router></Router>
      </AppLayout>
    </App>
  )
}

export default Index
