import React from 'react'

const Contact = () => {
    const contactdata = ["mdmobashir786@gmail.com", "9155395918", "Bhagalpur, Bihar,812002", "linkedin.com/in/mobashir1786", "github.com/mobashir1786"]
    return (
        <div className='contact'>
            {
                contactdata.map((n) => (<div className='contactdata'>{n}</div>))
            }
        </div>
    )
}

export default Contact
