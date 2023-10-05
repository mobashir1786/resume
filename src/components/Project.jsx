import React from 'react'

const Project = (props) => {
    return (
        <div className='project'>
            <div className="educationheading">{props.name}</div>
            <ul>
                <li className='sducationInstitute'>{props.desc1}</li>
                <li className='sducationInstitute'>{props.desc2}</li>
                <li><a className='eucationDate' href={props.url}>{props.url}</a></li>
            </ul>
        </div>
    )
}

export default Project
