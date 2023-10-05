import React from 'react'

const Education = (props) => {
    return (
        <div className='education'>
            <div className="educationheading">{props.name}</div>
            <div className="sducationInstitute">{props.institute}</div>
            <div className="eucationDate">{props.date}</div>
        </div>
    )
}

export default Education
