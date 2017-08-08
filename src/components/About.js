import  React from 'react'

const About = props => {
    return (
        <section className="about">
            <h2 className="text-uppercase">About</h2>
            <div className="about-text">{props.aboutData}</div>
        </section>
    )
}

export default About