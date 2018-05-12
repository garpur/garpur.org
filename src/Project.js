import React from 'react'
import _ from 'lodash'
import './Project.css'

const Project = ({ projects }) => {
  return (
    <div>
      <h4>Projects</h4>
      {_.map(projects, val => (
        <div className="project">
          <p className="title">{val.title}</p>
          <p className="description">
            {val.description} <a className="link" href={val.link}>{val.link}</a>
          </p>
          <p className="tech">TECH: {val.tech}</p>
        </div>
      ))}
    </div>
  )
}

export default Project
