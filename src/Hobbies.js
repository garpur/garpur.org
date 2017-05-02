import React, { Component } from 'react'
import cx from 'classnames'
import './Hobbies.css'

class Hobbies extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="hobbies-screen">
        <h2>I have some hobbies</h2>
        <ul className="hobbyList">
          <li>Reading</li>
          <li>Cooking</li>
          <li>Playing computer games</li>
          <li>Playing GO</li>
        </ul>
      </div>
    )
  }
}

export default Hobbies
