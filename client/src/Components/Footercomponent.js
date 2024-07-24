import React from 'react'
import './Footercomponent.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { SiMinutemailer } from "react-icons/si";
import { useState } from 'react';
import Sendmail from '../Utils/Sendmail';

function Footercomponent() {
  return (
    <div className='overall-footer-component'>
       <div className='contact-us-section'>
        <div className='top-contact-us-section'>
      <h3 style={{textAlign:'center'}} className='text-light'>Contact Form</h3>
      <div className=' overall-icons-containers-contact'>
        <div>
            <div className='actual-icon bg-light rounded-circle'>
            <FaLocationDot className='text-dark fs-1' />
            </div>
            <div className='contact-info-container'>
            <p><span>Adress:</span></p>
            <p>Murang'a Town</p>
            </div>
        </div> 
        <div>
        <div className='actual-icon bg-light rounded-circle'>
        <FaPhoneAlt className='text-dark fs-3' />
        </div>
        <div className='contact-info-container'>
            <p><span>phone:</span></p>
            <p>+254758420860</p>
            </div>
        </div>
        <div>
        <div className='actual-icon bg-light rounded-circle'>
        <SiMinutemailer className='fs-3' />
        </div>
        <div className='contact-info-container'>
            <p><span>Email:</span></p>
            <p>davismugoikou@ <br/>gmail.com</p>
            </div>
        </div>
      </div>
        </div>
        <div className='bottom-contact-us-section'>
      <h3 style={{textAlign:'center'}} className='text-light'>Get in Touch</h3>
         <Sendmail/>
        </div>
       </div>
        </div>
  )
}

export default Footercomponent