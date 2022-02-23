import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))

export default function Index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/order-center/manage/order-list" component={Home} />
      <Route component={() => {
        return '页面不存在'
      }} />
    </Switch>
  )
}
