import React from 'react';
import '../Footer/Footer.css'
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <div className='footer_container'>
            <div className="footer_left">
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="footer image" className='footer_image' />
            </div>
            <div className="footer_right">
                <div className="col">
                    <h1>Resources</h1>
                    <Link to="/" className='footer_para'>Home</Link>
                    <Link to="/about" className='footer_para'>About</Link>

                </div>
                <div className="col">
                    <h1>Follow Us</h1>
                    <Link to='/github' className='footer_para'>Github</Link>
                    <Link to='/discord' className='footer_para'>Discord</Link>
                </div>
                <div className="col">
                    <h1>Legal</h1>
                    <p className='footer_para'>Privacy Policy</p>
                    <p className='footer_para'>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}