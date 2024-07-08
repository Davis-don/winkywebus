import React from 'react'
import './Footercomponent.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { SiMinutemailer } from "react-icons/si";

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
            <p>davismugoikou@gmail.com</p>
            </div>
        </div>
      </div>
        </div>
        <div className='bottom-contact-us-section'>
      <h3 style={{textAlign:'center'}} className='text-light'>Get in Touch</h3>
      <form className='contact-form'>
        <input type='text' className='form-control' placeholder='Name'/>
        <input type='Email' className='form-control' placeholder='Email'/>
        <input type='Subject' className='form-control' placeholder='Subject'/>
        <textarea className='form-control'placeholder='message'/>
        <div className='submit-btn-holder'>
            <button className='btn btn-lg btn-outline-success'type='submit'>Submit</button>
        </div>
      </form>
        </div>
       </div>
        </div>
  )
}

export default Footercomponent