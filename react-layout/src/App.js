import { BrowserRouter } from 'react-router-dom'
import { http } from 'js-common-library'
import Layout from './layout'
import { Suspense, useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function Fallback() {
  useEffect(() => {
    NProgress.start()
    return NProgress.done
  }, [])
  return null
}

http.setConfig({
  headers: {
    contextId: 'dss',
    'skio-token':
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoiZHNzIiwiZXhwIjoxNjQ1NjI1ODcxLCJ1c2VySWQiOjcxMn0.1vjq56b5iue8wrkNEuocqzy01wWIgFgTg5raM5UDGY0',
  },
})

function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Layout></Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Index
