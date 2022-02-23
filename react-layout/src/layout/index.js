import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { http } from 'js-common-library'

import App from './App'
import AppLayout from './AppLayout'
import Router from '../router'

const Login = React.lazy(() => import('../pages/login'))

function Index() {
  const [data, setData] = useState({})
  const { location } = useHistory()

  if (location.pathname === '/login') {
    return <Route exact path="/login" component={Login} />
  }

  const init = () => {}

  useEffect(async () => {
    const data = await http.get(
      'https://qa01web-gateway.lingxichuxing.com/saas/v1/user/current_user_permission'
    )
    setData(data.data || {})
  }, [])

  return (
    <App
      id={data.id}
      init={init}
      isLogin={() => {
        return false
      }}
    >
      <AppLayout menuConfig={data?.menus}>
        <Router></Router>
      </AppLayout>
    </App>
  )
}

export default Index
