import React, { Component } from 'react';

let skillsList = ['Html5', 'Css3', 'Js', 'React', 'Bootstrap', 'Git']

class SkillsList extends Component {
    render() {
        let getSkills = skillsList.map((item, index) => {
            return (<li key={index}>{item}</li>)
        })
        return (
            <ul className="skills-list list-inline">{getSkills}</ul>
        )
    }
}

export default SkillsList