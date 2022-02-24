import { useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { observer } from 'mobx-react-lite'
import store from './store'
import AppLayoutProvider from './layoutContext'

const { SubMenu } = Menu
const { Item } = Menu

function findParent(menuConfig, pathname, list) {
  if (list === undefined) {
    list = []
  }
  for (let i = 0; i < menuConfig.length; i++) {
    const item = menuConfig[i]
    let temp = list.concat(item)
    if (item.children) {
      const match = findParent(item.children, pathname, temp)
      if (match) {
        return match
      }
    }
    if (item.path === pathname) {
      return temp
    }
  }
}

export const TopNav = observer((props) => {
  const { menuConfig = [] } = props
  const { topId, setTopId, setSideNavMenu, setMenuConfig } = store
  const { pathname } = useLocation()

  const topClick = (e) => {
    const id = e.key
    if (id !== topId) {
      setTopId(id)
      setSideNavMenu(
        menuConfig.filter((item) => {
          return item.id == id
        })[0]?.children || []
      )
    }
  }

  useEffect(() => {
    if (menuConfig.length > 0) {
      const item = findParent(menuConfig, pathname)
      if (item) {
        item[0].key = item[0].id
        topClick(item[0])
      }
      setMenuConfig(menuConfig)
    }
  }, [menuConfig])

  return (
    <Menu mode="horizontal" theme="dark" selectedKeys={[topId + '']} onClick={topClick}>
      {menuConfig.map((item) => {
        return (
          <Item key={item.id} style={{ height: 64, lineHeight: '64px' }}>
            {item.title}
          </Item>
        )
      })}
    </Menu>
  )
})

function loopSider(sideNavMenu) {
  const { siderClick } = store
  const history = useHistory()

  return sideNavMenu.map((item) => {
    if (item.children) {
      return (
        <SubMenu openKeys={item.id} title={item.title} key={item.id}>
          {loopSider(item.children)}
        </SubMenu>
      )
    }
    return (
      <Item
        key={item.id}
        onClick={() => {
          siderClick(history, item)
        }}
      >
        {item.title}
      </Item>
    )
  })
}

export const SiderNav = observer(() => {
  const { siderId, sideNavMenu, siderClick, openIdList, setOpenIdList } = store
  const { pathname } = useLocation()
  const isInit = useRef(0)
  const history = useHistory()

  useEffect(() => {
    if (sideNavMenu.length > 0 && isInit.current === 0) {
      isInit.current = 1
      const list = findParent(sideNavMenu, pathname)
      if (list?.length === 2) {
        const level2List = list[0]
        const level3List = list[1]
        setOpenIdList([level2List['id'] + ''])
        siderClick(history, level3List)
      }
    }
  }, [sideNavMenu])
  return (
    <Menu
      mode="inline"
      onOpenChange={setOpenIdList}
      openKeys={openIdList}
      selectedKeys={[siderId + '']}
    >
      {loopSider(sideNavMenu)}
    </Menu>
  )
})

export const Center = (props) => {
  const { children } = props
  const { menuConfig } = store
  const { pathname } = useLocation()

  const list = findParent(menuConfig, pathname)
  const res = []
  if (list) {
    list.forEach((item) => {
      res.push(item.title)
    })
  }
  return (
    <AppLayoutProvider value={{ descList: res }}>
      <div className="content-center">{children}</div>
    </AppLayoutProvider>
  )
}
