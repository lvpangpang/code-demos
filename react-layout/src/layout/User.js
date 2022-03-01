import { useAppInfo } from './App'
import { useState } from 'react'
import { Popover, Typography, Button } from 'antd'
import './user.less'

const { Paragraph } = Typography

function Index() {
  const [visible, setVisible] = useState(false)
  const { username, roleNameDisplays, phone, userTypeShow, operationEntities } = useAppInfo().userInfo
  return (
    <Popover
      visible={visible}
      placement="bottomLeft"
      trigger="click"
      onVisibleChange={(v) => setVisible(v)}
      content={
        <div className="info">
          <header className="type">{userTypeShow && <span>{userTypeShow}</span>}</header>
          <div>
            <span>运营主体：</span>
            <span>
              <Paragraph ellipsis={{ rows: 8, expandable: true }}>
                {operationEntities?.map(({ operationEntityName }) => operationEntityName).join('、')}
              </Paragraph>
            </span>
          </div>
          <div>
            <span>手机：</span>
            <span>{phone}</span>
          </div>
          <div>
            <span>角色：</span>
            <span>{roleNameDisplays?.join('、')}</span>
          </div>
          <Button type="primary" block>
            退出
          </Button>
        </div>
      }
    >
      <span className="user">{username}</span>
    </Popover>
  )
}
export default Index
