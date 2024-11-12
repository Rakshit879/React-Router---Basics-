import React from 'react';
import '../ContactUs/ContactUs.css';
//impove this file for the name email and contact
export default function CountactUs(){
    
    return(
        <div className="contact_container">
            <div className="contact_leftcontainer">
                <div className="info_container">
                    <h1 className='contact_heading'>Get in touch:</h1>
                    <p className='text-gray-500'>Fill in the form to start a conversation</p>
                    <p className='text-gray-500'>Location: Acme Inc, street,state,postal code</p>
                    <p className='text-gray-500'>Phone No: +44 1234567890</p>
                    <p className='text-gray-500'>Email: info@gmail.com</p>
                </div>
            </div>
            <div className="contact_rightcontainer">
                <input type="text" className='input_box' placeholder='Full Name'/>
                <input type="text" className='input_box' placeholder='Email'/>
                <input type="number" onBlur={(e)=>{
                    if(e.target.value.length!=10){
                        console.log("Enter a valid number")  //need to work on this
                    }
                }} className='input_box' placeholder='Telephone Number'/>
                <button className='contact_button'>Submit</button>
            </div>
        </div>
    )
}