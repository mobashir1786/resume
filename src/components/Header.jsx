import React from 'react';
import profile from "../assets/mobashir.jpeg"

const Header = () => {
    return (
        <div className='header'>
            <div className="headerLeft">
                <div className="headername">MD MOBASHIR</div>
                <div className="headertitle">Full Stack Web Developer(MERN)</div>
                <div className="headerskill">Full Stack Developer || MERN stack Developer || React || Node || React Native</div>
            </div>
            <div className="headerRight">
                <div className="headerimage">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header
