import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div className={cx(['menu-bar'])}>
        <Link className="button" to="/">Home</Link>
        <Link className="button" to="/hobbies">Hobbies</Link>
        <Link className="button" to="/stuff">Stuff</Link>
        <Link className="button" to="/cv">CV</Link>
      </div>
    )
  }
}

export default Menu
