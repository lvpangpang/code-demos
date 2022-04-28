import { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { http, getStorage } from 'js-common-library'
import { message, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { configure } from 'mobx'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from './layout'

configure({
  enforceActions: 'never',
})
moment.locale('en')

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

function Fallback() {
  useEffect(() => {
    NProgress.start()
    return NProgress.done
  }, [])
  return null
}

function Index() {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Suspense fallback={<Fallback />}>
          <Layout></Layout>
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default Index
