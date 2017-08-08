import React from 'react'

const Education = props => {
    const getEducation = props.educationData.map((item, index) => {
        return (
            <div key={index}>
                <h3>{item.studyDate}, {item.institution}</h3>
                <h4>{item.studyType} "{item.area}"</h4>
            </div>
        )
    })

        return (
            <section className="education">
                <h2 className="text-uppercase">Education</h2>
                {getEducation}
            </section>
        )
}

export default Education

