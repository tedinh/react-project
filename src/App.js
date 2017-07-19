import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'

export default class App extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
      <Nav />
        <header>Daniel stole my website</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/cart' component={Cart} />


        </Switch>
      </div>
    )
  }
}
