import React, { Component } from 'react'
import './CV.css'
import _ from 'lodash'

import career from './career.json'

import Project from './Project'

class Home extends Component {
  render() {
    return (
      <div className="curriculum-vitae">
        <div className="header">
          <div className="img">
            <img
              alt="Garpur Dagsson"
              src="https://s3-eu-west-1.amazonaws.com/garpur.org/garpur-small.png"
            />
          </div>
          <div className="txt">
            <p>Garpur Dagsson (160667-4359)</p>
            <p>Address: Dalsel 32, 109 Reykjavík, Ísland</p>
            <p>
              Email:
              {' '}
              <a className="link" href="mailto:garpur@gmail.com">
                garpur@gmail.com
              </a>
            </p>
            <p>
              Phone:
              {' '}
              <a className="link" href="tel:+3546930109">+354 693-0109</a>
            </p>
            <p>
              Website:
              {' '}
              <a className="link" href="http://garpur.org">http://garpur.org</a>
            </p>
          </div>
        </div>
        <div className="career">
          <h2>Career</h2>
          {_.map(career, (val, key) => {
            return [
              <h3>{key}: {val.company}</h3>,
              <Project projects={val.projects} />,
            ]
          })}
        </div>
        <div className="education">
          <h2>Education</h2>
          <h3>1994 Háskóli Íslands</h3>
          <p>B.Sci. Computer Science</p>
        </div>
      </div>
    )
  }
}

export default Home
