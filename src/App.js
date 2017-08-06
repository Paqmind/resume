import React, { Component } from 'react';
import profile from './components/profile.js'
import contacts from './components/contacts.js'
import SkillsList from './components/skillsList.js'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


class Profile extends Component {
  render() {
    return (
        <div>
          <div className="profileImg"><img className="img-rounded center-block" src={profile.photo} width="200"/></div>
          <h1 className="text-center">{profile.name}</h1>
          <h2 className="text-center">{profile.label}</h2>
          <div className="divider"></div>
          <ul className="list-unstyled contact-links text-center">
            <h3><li><i className="glyphicon glyphicon-map-marker"></i> {profile.location}</li></h3>
            <h4><li><i className="glyphicon glyphicon-envelope"></i> <a href="timon3566@gmail.com">{contacts.mail}</a></li></h4>
          </ul>
          <div className="divider"></div>
          <div className="links">
            <ul className="profileLinks list-unstyled">
              <li><img src={contacts.githubImg} width={15 } height={15}/> <a href="https://github.com/datexgo">{contacts.github}</a></li>
              <li><img src={contacts.twitterImg} width={15} height={15}/> <a href="https://twitter.com/woozy_mu">{contacts.twitter}</a></li>
              <li><img src={contacts.skypeImg} width={15} height={15}/> <a href="skype">{contacts.skype}</a></li>
              <li><img src={contacts.linkedinImg} width={15} height={15}/> <a href="https://www.linkedin.com/in/artem-kozyrev-0a1350148/">{contacts.linkedin}</a></li>
              <li><img src={contacts.telegramImg} width={15} height={15}/> <a href="@Default34">{contacts.telegram}</a></li>
            </ul>
          </div>
        </div>
    )
  }
}

class About extends Component {
  render() {
    return (
        <section className="about">
          <h2 className="text-uppercase">About</h2>
          <div className="about-text">{profile.about}</div>
          <div className="goal-text">{profile.goal}</div>
        </section>
    )
  }
}

class Skills extends Component {
  render() {
    return (
        <section className="skills">
          <h2 className="text-uppercase">Skills</h2>
          <SkillsList/>
        </section>
    )
  }
}

class Education extends Component {
  render() {
    return (
        <section className="education">
          <h2 className="text-uppercase">Education</h2>
          <h3>{profile.institution}</h3>
          <h4>{profile.area}</h4>
        </section>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <aside className="col-md-4">
              <div className="inner">
                <Profile/>
              </div>
            </aside>
            <main className="col-md-8">
              <div className="inner">
                <About/>
                <div className="divider"></div>
                <Skills/>
                <div className="divider"></div>
                <Education/>
              </div>
            </main>
          </div>
        </div>
    )
  }
}

export default App;