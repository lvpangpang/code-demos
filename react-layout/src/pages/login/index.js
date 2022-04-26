import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Statistic, Icon, Row, Col, Form} from 'antd'
import { setStorage } from 'js-common-library'
import { Button } from 'antd-mobx-components'

import styles from './style.less'
import { rules } from '@/tools'
import Api from './Api'

const { Item } = Form
const { Countdown } = Statistic

function Index() {
  const history = useHistory()
  const [$form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [deadline, setDeadline] = useState(null)
  const [countdownVisible, setCountdownVisible] = useState(false)

  // 验证手机号
  const verifyPhone = () => {
    $form.validateFields(['phone']).then((values) => {
      sendCode(values.phone)
    })
  }

  // 发送验证码
  const sendCode = async (phone) => {
    await Api.sendCode({ phone, phoneMustExist: true })
    showCountdown()
  }

  // 倒计时
  const showCountdown = () => {
    setCountdownVisible(true)
    setDeadline(Date.now() + 60 * 1000)
  }

  // 登录
  const login = async () => {
    try {
      setLoading(true)
      const data = await $form.validateFields()
      const { token } = await Api.login(data)
      setStorage('skio-token', token)
      history.push('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.index}>
      <Form form={$form} className={styles.login_wrap}>
        <div className={styles.title}>平台管理系统</div>
        <div className={styles.sub_title}>一个专注于对网约车管理的后台系统</div>
        <div className={styles.tip}>验证码登录</div>
        <div className={styles.form}>
          <Item name="phone" rules={[{ ...rules.phone, required: true }]}>
            <Input size="large" prefix={<Icon type="mobile" />} placeholder="账号" />
          </Item>
          <Row gutter={10}>
            <Col span={16}>
              <Item
                name="verifyCode"
                rules={[{ required: true, pattern: /^\d{6}$/, message: '请正确输入验证码!' }]}
              >
                <Input size="large" prefix={<Icon type="mail" />} placeholder="验证码" />
              </Item>
            </Col>
            <Col span={8}>
              <Item noStyle>
                <Button
                  type="default"
                  size="large"
                  className={styles.code_but}
                  disabled={countdownVisible}
                  onClick={verifyPhone}
                >
                  {countdownVisible ? (
                    <Countdown
                      format="ss 后重发"
                      value={deadline}
                      onFinish={() => {
                        setCountdownVisible(false)
                      }}
                      valueStyle={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 16 }}
                    />
                  ) : (
                    '获取验证码'
                  )}
                </Button>
              </Item>
            </Col>
          </Row>
          <Item>
            <Button type="primary" size="large" htmlType="submit" block onClick={login}>
              登录
            </Button>
          </Item>
        </div>
      </Form>
      <footer className={styles.footer}>
        ©2022 Created by lingxichuxing, All Rights Reserved.
      </footer>
    </div>
  )
}
export default Index
