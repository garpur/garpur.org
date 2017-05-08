import React, { Component } from 'react'
import cx from 'classnames'
import './Hobby.css'

class Hobby extends Component {
  state = {
    expanded: false,
  }

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { title, details } = this.props
    const { expanded } = this.state
    return (
      <div className="hobby-panel">
        <div
          className={cx('title', { '-expanded': expanded })}
          onClick={this.toggle}
        >
          {title}
        </div>
        <div className={cx('details', { '-expanded': expanded })}>
          {details}
        </div>
      </div>
    )
  }
}

export default Hobby
