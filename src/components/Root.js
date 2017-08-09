import React, { Component } from 'react'
import { PropTypes } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Skills from './Skills'
import About from './About'
import Profile from './Profile'
import Experience from './Experience'
import Education from './Education'
import '../styles/Layout.css'

const Root = props => {
    const profileData = props.jsonObj.basics
    const aboutData = props.jsonObj.basics.summary
    const skillsData = props.jsonObj.skills
    const experienceData = props.jsonObj.experience[0].myexp
    const educationData = props.jsonObj.education
    return <div className="container">
          <div className="row">
            <aside className="col-md-4">
              <div className="inner">
                 <Profile profileData={profileData}/>
              </div>
            </aside>
            <main className="col-md-8">
              <div className="inner">
                 <About aboutData={aboutData}/>
                 <div className="divider"></div>
                 <Skills skillsData={skillsData}/>
                 <div className="divider"></div>
                 <Experience experienceData={experienceData}/>
                 <div className="divider"></div>
                 <Education educationData={educationData}/>
              </div>
            </main>
          </div>
        </div>
}

Root.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default Root