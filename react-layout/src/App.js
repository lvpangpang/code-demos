import { BrowserRouter } from 'react-router-dom'
import { http, getStorage } from 'js-common-library'
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

// __ENV__可以获取启动项目时在命令行输入的参数集合
const baseURL = `https://${!__ENV__.env ? '' : __ENV__.env}web-gateway.lingxichuxing.com`

http.setConfig({
  baseURL,
  headers: {
    contextId: 'pms',
    'skio-token': getStorage('skio-token'),
  },
  transformResult(res) {
    const { code, data, msg } = res || {}
    if (code === 200) {
      return data
    }
    message.error(msg)
    // 登录过期处理
    if (code === 5001) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 1000)
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
