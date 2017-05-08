import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-screen">
        <h1>Garpur Dagsson</h1>
        <div className="content">
          <p>
            I am a veteran of the software industry with over 25 years of experience.
          </p>
          <p>
            I have done programming both in frontend and backend, using various programming languages and frameworks.
          </p>
        </div>
        <div className="looking">I am currently looking for a job.</div>
      </div>
    )
  }
}

export default Home
