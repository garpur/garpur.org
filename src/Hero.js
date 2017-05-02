import React, { Component } from 'react'
import cx from 'classnames'
import './Hero.css'

class Hero extends Component {
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

export default Hero
