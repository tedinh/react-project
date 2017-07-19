import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


export default class Nav extends Component {
  render(){
    return(
      <div className="Nav">
      <div className="Nav-header">
      <ul className="Nav-navlist">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
      </div>
      </div>
    )
  }
}
