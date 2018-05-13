import React, { Component } from 'react'
import './About.css'
import Hobby from './Hobby'

class About extends Component {
  render() {
    return (
      <div className="about-screen">
        <div className="section">
          <h2>About me</h2>
          <p>I was born 16.06.1967 in Reykjavík, Iceland.</p>
          <p>
            I lived in Reykjavík until January 1978 when I moved to Portugal with my family.
          </p>
          <p>
            In August 1979 I moved back to Iceland and went on to live with my Grandmother.
          </p>
          <p>I met my wife in July 1984 and we got married in June 1988.</p>
          <p>We have 3 children born 1990, 1993 and 2000.</p>
        </div>
        <div className="section">
          <h3>Hobbies</h3>
          <div className="hobbyList">
            <Hobby
              title="Reading"
              details="I mostly read Sci. Fi. and Fantasy."
            />
            <Hobby
              title="Cooking"
              details="I do most of the cooking at home because I like cooking."
            />
            <Hobby
              title="Playing GO"
              details="Go is a boardgame originating in China 3-4.000 years ago. I play online almost every night and am a member of the Icelandic National Team."
            />
            <Hobby
              title="Playing computer games"
              details="Less now than I used to because of GO. Play mostly FPS and strategy games."
            />
          </div>
        </div>
      </div>
    )
  }
}

export default About
