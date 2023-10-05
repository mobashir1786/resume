import React from 'react'

const Language = (props) => {
    return (
        <div className='language'>
            <div className="sducationInstitute">{props.name}</div>
            <div className='eucationDate'>{props.desc}</div>
        </div>
    )
}

export default Language
