import React from 'react'

const Experience = props => {
    return (
        <section className="experience">
            <h2 className="text-uppercase">Experience</h2>
            <div className="expirience-text">{props.experienceData}</div>
        </section>
    )
}

export default Experience