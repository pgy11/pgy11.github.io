import "./Header.css"
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className="header">
            <div className="header__column">
                <Link to='/'>
                    <p className='header__column__font'>Portfolio</p>                    
                </Link>
            </div>

            <div className="header__column">
                <Link to="/careers">
                    <p className='header__column__font'>Careers</p>
                </Link>
            </div>
            <div className="header__column">
                <Link to="activities">
                    <p className='header__column__font'>Activities</p>
                </Link>
            </div>

        </div>
    )
}

export default Header
