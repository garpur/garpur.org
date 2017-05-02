import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Menu from './Menu'
import CV from './CV'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={CV} />
        </Switch>
      </div>
    )
  }
}

export default App
