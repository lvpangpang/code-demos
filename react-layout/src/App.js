import { BrowserRouter } from 'react-router-dom'
import { http } from 'js-common-library'
import { message } from 'antd'
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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoiZHNzIiwiZXhwIjoxNjQ1NzM0MDMxLCJ1c2VySWQiOjcxMn0.7zLmSITJAFRbPv4GH5arHgzUFbRM3UAneFaI6B_gTY4',
  },
  transformResult(res) {
    const { code, data, msg } = res || {}
    if (code === 200) {
      return data
    }
    message.error(msg)
    // 登录过期处理
    if (code === 5001) {
      window.location.href = '/login'
    }
    return Promise.reject(res) // 暴露错误给业务代码的错误信息
  },
  error(e) {
    message.error(e.message || '请求异常')
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
