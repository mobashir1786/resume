import React from 'react'

const Internship = (props) => {
    return (
        <div className='project'>
            <div className="educationheading">{props.name}</div>
            <div className="educationheading">{props.date}</div>
            <ul>
                <li className='sducationInstitute'>{props.desc}</li>
                <li><a className='eucationDate' href={props.url}>{props.url}</a></li>
            </ul>
        </div>
    )
}

export default Internship
