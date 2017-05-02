import React, { Component } from 'react'
import './Hobbies.css'

class Hobbies extends Component {
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
