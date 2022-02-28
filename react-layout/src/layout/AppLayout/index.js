import { observer } from 'mobx-react-lite'
import { TopNav, SiderNav, Center } from './components'
import './index.less'

function AppLayout(props) {
  const { children, logo, menuConfig, extra } = props
  return (
    <div className="app-layout">
      <div className="app-sider">
        <div className="logo">logo</div>
        <div className="side-nav">
          <SiderNav></SiderNav>
        </div>
      </div>
      <div className="app-content">
        <div className="app-header">
          <div className="top-nav">
            <TopNav menuConfig={menuConfig} className="top-menu"></TopNav>
          </div>
          <div className="extra">用户信息</div>
        </div>
        <div className="app-center">
          <Center>{children}</Center>
        </div>
      </div>
    </div>
  )
}

export default observer(AppLayout)
