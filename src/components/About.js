import React from 'react'
import profile from './Profile.js'

const About = props => {
    return (
        <section className="about">
            <h2 className="text-uppercase">About</h2>
            <div className="about-text">{props.aboutData}</div>
        </section>
    )
}

export default About