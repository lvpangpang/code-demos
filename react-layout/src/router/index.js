import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RouterMap from './routerMap'

export default function Index() {
  return (
    <Switch>
      {RouterMap.map((item) => (
        <Route key={item.path} exact path={item.path} component={item.component}></Route>
      ))}
    </Switch>
  )
}
