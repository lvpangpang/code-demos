import './index.css'
import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
}

const Index = withRouter(({ location, history, children }) => (
  <TransitionGroup
    className={'router-wrapper'}
    childFactory={(child) =>
      React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
    }
  >
    {console.log(history.action)}
    <CSSTransition appear timeout={500} key={location.pathname + location.search}>
      <Switch location={location}>{children}</Switch>
    </CSSTransition>
  </TransitionGroup>
))

export default Index
