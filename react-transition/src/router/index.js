import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RouterSlide from '../RouterSlide'

import Home from '../pages/home'
import Detail from '../pages/detail'
import List from '../pages/list'

export default function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
      <RouterSlide>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/list/:id" component={List} />
      </RouterSlide>
      </Suspense>
    </BrowserRouter>
  )
}
