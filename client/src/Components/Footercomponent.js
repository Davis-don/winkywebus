import React from 'react'
import './Footercomponent.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { SiMinutemailer } from "react-icons/si";
import { useState } from 'react';

function Footercomponent() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    contact:"",
    subject:"",
    message:""
  })
  const handleUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };


  let handlePost = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://project-awesome.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Replace formData with your actual data
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Request successful:', data);
        // Further actions with data if needed

    } catch (error) {
        console.error('Error:', error);
        // Handle specific errors or conditions here
    }
};

//   let handlepost = async (e)=>{
//     e.preventDefault();
// try{
//   const response= await fetch (' https://project-awesome.vercel.app',{
   
// method:'post',
// headers:{
//     "content-type":'application/json'
// },
// body:JSON.stringify(formData)
// })
// if(response){
// const data=await response.json();
// console.log('success')
// }
// else{
// const errordata=await response.json();
// //console.log(errordata)
// console.log('failed')
// }
// }
// catch (error){
// console.log(error)
// }
// }


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
      <form className='contact-form'onSubmit={handlepost}>
        <input onChange={handleUpdate} name='name' type='text' className='form-control' placeholder='Name'/>
        <input onChange={handleUpdate} name='email' type='Email' className='form-control' placeholder='Email'/>
        <input onChange={handleUpdate} name='contact' type='number' className='form-control' placeholder='number'/>
        <input onChange={handleUpdate} name='subject' type='text' className='form-control' placeholder='Subject'/>

        <textarea onChange={handleUpdate} name='message' className='form-control'placeholder='message'/>
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