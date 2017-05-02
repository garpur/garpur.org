import React, { Component } from 'react'
import cx from 'classnames'
import './Hobbies.css'

class Hobbies extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={cx(['hero-area'])}>
        <div className="title">
          My name is <br /> Garpur Dagsson
        </div>
        <div className="content">
          I am looking for a job.
        </div>
      </div>
    )
  }
}

export default Hobbies
