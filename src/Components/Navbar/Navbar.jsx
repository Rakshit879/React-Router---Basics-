import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css'

export default function Navbar(){
    return(
        <div className="navbar flex_qualities">
            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" id='logo_image'/>
            <div className="navigation_container flex_qualities">
                <Link to="/" className='link_in_navbar'>Home</Link>
                <Link to="/about" className='link_in_navbar'>About</Link>
                <Link to="/contact" className='link_in_navbar'>Contact</Link>
                <Link to="/github" className='link_in_navbar'>Github</Link>
            </div>
            <div className="login_container flex_qualities">
                <button className='login_button button'>Log in</button>
                <button className='get_started_button button'>Get Started</button>
            </div>
        </div>
    )
}