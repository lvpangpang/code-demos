import React from 'react'
import FormCreate from './FormCreate'

function App(props) {
  const { getFieldDecorator, getFieldValue, getFieldsValue, setFieldsValue, validateFields } = props

  const sb = () => {
    validateFields((err, values) => {
      console.log(values)
    })
  }
  return (
    <div>
      <h3>custom表单组件</h3>
      <div>
        {getFieldDecorator('name', {
          initialValue: '吕肥肥',
          rules: [{ required: true, message: '请输入用户名' }],
        })(<input type="text" placeholder="请输入用户名" />)}
      </div>
      <div>{getFieldDecorator('pwd')(<input type="password" placeholder="请输入密码" />)}</div>
      <button onClick={sb}>提交</button>
    </div>
  )
}

export default FormCreate(App)
