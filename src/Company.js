import React, { Component } from 'react'
import _ from 'lodash'
import './Company.css'

import Project from './Project'

const Company = ({ company }) => (
  <div className="company">
    {_.map(company.projects, (val, key) => {
      return (
        <div>
          <Project project={val} />
        </div>
      )
    })}
  </div>
)

export default Company
