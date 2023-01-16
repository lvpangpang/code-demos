import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RouterSlide from '../RouterSlide'

import Index from '../pages/index'
import Detail from '../pages/detail'
import List from '../pages/list'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <RouterSlide>
          <Route exact path="/" component={Index} />
          <Route exact path="/list" component={List} />
          <Route exact path="/detail" component={Detail} />
        </RouterSlide>
      </Suspense>
    </BrowserRouter>
  )
}
