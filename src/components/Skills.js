import React from 'react'

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map((item, index) => {
        return (<li key={index}>{item}</li>)
    })

    return (
        <section className="skills">
            <h2 className="text-uppercase">Skills</h2>
            <ul className="skills-list list-inline">{getSkills}</ul>
        </section>
    )
}

export default Skills