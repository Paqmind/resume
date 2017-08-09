import React from 'react'

const Experience = props => {
    const experience = props.experienceData
    return (
        <section className="experience">
            <h2 className="text-uppercase">Experience</h2>
            <div className="expirience-text" dangerouslySetInnerHTML={{__html:experience}}></div>
        </section>
    )
}

export default Experience