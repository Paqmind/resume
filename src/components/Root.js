import React, { Component } from 'react';
import { PropTypes } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Skills from './Skills.js'
import About from './About.js'
import Profile from './Profile.js'
import Expirience from './Expirience.js'
import Education from './Education.js'

import '../styles/Layout.css';
const App = props => {
  const profileData = props.jsonObj.basics
  const aboutData = props.jsonObj.basics.summary
  const skillsData = props.jsonObj.skills
  const expirienceData = props.jsonObj.expirience[0].myexp
  const educationDate = props.jsonObj.education
 return (
     <div className="container">
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
                <Expirience expirienceData={expirienceData}/>
                <div className="divider"></div>
                <Education educationData={educationDate}/>
              </div>
            </main>
        </div>
     </div>
    )
}

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;