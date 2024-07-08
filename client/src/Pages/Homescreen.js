import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageSlideshow from '../Components/ImageSlideshow';
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCopyright,FaCheck } from "react-icons/fa";
import timerimage from '../Images/hector-achautla-njZb59XQWqM-unsplash.jpg'
import signature from '../Images/signature.png'
import portfolioDesign from '../Images/Davis Ikou portfolio - Google Chrome 13_02_2024 16_49_26.png'
import platform from '../Images/Davis Ikou portfolio - Google Chrome 13_02_2024 16_54_19.png'
import consultation from '../Images/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg'
import machines from '../Images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg'
import happywoman from '../Images/pexels-wundef-4212959.jpg'
import AutoplayVideo from '../Components/Autoplayvideo';
import AnimatedCounter from '../Components/Animatedcounter';
import video1 from '../videos/3141208-uhd_3840_2160_25fps.mp4'


const images = [
  portfolioDesign,
  platform,
  consultation,
  happywoman,
  machines,
];

function Homescreen() {

  return (
    <div className='overall-homepage-container'>
     
      <div className='homepage-bottom-nav-links-section'>
          <div className='top-nav-section'>
            <div className='nav-left-section'>
              <div className='WB-brand'>
              <h1 className='text-light'>WB</h1>
              </div>
              <div className='wb-brand-name'>
                <p className='text-light'>Winkywebus</p>
                <p className='text-light'>Devs</p>
              </div>
               
            </div>
            {/* <div className='nav-right-section'>
            <IoMenuSharp className='text-light'style={{fontSize:'35px'}}/>
            </div> */}
          </div>
      </div>
      <div className='homepage-body-section'>
        <div className='homepage-intro-section-imaged'>
          <div className='homepage-video-homescreen'>
       <AutoplayVideo/>
       </div>
       <div className='on-vid-content'>
        <h2 className='text-light describe-text'>Imagine. Build. Launch</h2>
        <p className='text-light'>The latest best designs in market</p>
       </div>
      </div>
      <div className='homepage-content-section'>
           <div className='actual-homepage-content-section'>
            <h2 className='text-light'>Web Design Company You Can <span className='text-danger'>Trust</span></h2>
            <p className='text-light'>Our web design and development services blend creativity with cutting-edge technology to build visually stunning and highly functional websites. We prioritize user experience and responsive design to ensure your site looks great and performs flawlessly on any device</p>
           </div>
           <div className='signature-holder container-fluid'>
            <div className='signature-image-container bg-light'>
              <img src={signature}alt='signature image'/>
            </div>
            <div>
              <p className='text-light'><span style={{fontWeight:'bold'}}>Davis Ikou</span> Executive Director</p>
            </div>
           </div>
      </div>
      <div className='homepage-statistics '>
        <div className='statistic-card'>
          <h2 className='text-light' style={{fontSize:'40px',textAlign:'center'}}><AnimatedCounter value={35}/><span className='text-danger'>+</span></h2>
          <p style={{fontWeight:'bold'}} className='fs-3 text-light'>Proffesionals Team</p>
        </div>
        <div className='statistic-card'>
          <h2 className='text-light' style={{fontSize:'40px',textAlign:'center'}}><AnimatedCounter value={200}/><span className='text-danger'>+</span></h2>
          <p style={{fontWeight:'bold'}} className='fs-3 text-light'>Satisfied customers</p>
        </div>
        <div className='statistic-card'>
          <h2 className='text-light' style={{fontSize:'40px',textAlign:'center'}}><AnimatedCounter value={175}/><span className='text-danger'>+</span></h2>
          <p style={{fontWeight:'bold'}} className='fs-3 text-light '>Successful projects</p>
        </div>
        <div className='statistic-card'>
          <h2 className='text-light' style={{fontSize:'40px',textAlign:'center'}}><AnimatedCounter value={8}/><span className='text-danger'>+</span></h2>
          <p style={{fontWeight:'bold'}} className='fs-3 text-light'>Years of experience</p>
        </div>
        <div className='statistic-card'>
          <h2 className='text-light' style={{fontSize:'40px',textAlign:'center'}}><AnimatedCounter value={32}/><span className='text-danger'>+</span></h2>
          <p style={{fontWeight:'bold'}} className='fs-3 text-light'>Proffesionals Team</p>
        </div>
      </div>
      <div className='homepage-project-samples'>
        <div className='image-project-card'>
       <img className='task-display' src={portfolioDesign}alt='computer'/>
        </div>
        <div className='image-project-card'>
       <img className='task-display' src={platform}alt='computer'/>
        </div>
        <div className='image-project-card'>
       <img className='task-display' src={consultation}alt='computer'/>
        </div>
        <div className='image-project-card'>
       <img className='task-display' src={machines}alt='computer'/>
        </div>
      </div>
      <div className='website-design-packages'>
      <h2 className='text-light' style={{textAlign:'center',fontSize:'30px'}}>Website design <span className='text-danger'>Packages</span></h2>
      <p className='text-light' style={{textAlign:'center',margin:'20px',fontSize:'20px'}}>We offer a few standard packages as well as custom projects.Our web design company specialises in 
        the proffessional creation of unique sites.
      </p>
      <div className='overall-design-packages-card card'>
      <div className='landing-page-card'>
        <h3 style={{textAlign:'center'}}>Landing page</h3>
        <p style={{fontSize:'20px,',textAlign:'center'}}>KSH 10,000-20,000</p>
        <ul style={{padding:'30px'}} className='list-unstyled services-li'>
          <li><span><FaCheck className='text-success'/><span></span></span>1-3 responsive pages</li>
          <li><span><FaCheck className='text-success'/><span></span></span>contact page</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Landing page</li>
        </ul>

</div>
<div className='landing-page-card card'>
        <h3 style={{textAlign:'center'}}>Small business website</h3>
        <p style={{fontSize:'20px,',textAlign:'center'}}>KSH 20,000-30,000</p>
        <ul style={{padding:'30px'}} className='list-unstyled services-li'>
          <li><span><FaCheck className='text-success'/><span></span></span>Several pages</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Social Media Integration</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Google My Business Page</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Google Analytics</li>
        </ul>

</div>
<div className='landing-page-card card'>
        <h3 style={{textAlign:'center'}}>One pager website</h3>
        <p style={{fontSize:'20px,',textAlign:'center'}}>KSH 35,000-70,000</p>
        <ul style={{padding:'30px'}} className='list-unstyled services-li'>
          <li><span><FaCheck className='text-success'/><span></span></span> Ecommerce Tools</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Order Management System</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Live Chat</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Delivery Solutions</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Payment Integration</li>
        </ul>

</div>
<div className='landing-page-card card'>
        <h3 style={{textAlign:'center'}}>Corporate Website</h3>
        <p style={{fontSize:'20px,',textAlign:'center'}}>KSH 45,000-90,000</p>
        <ul style={{padding:'30px'}} className='list-unstyled services-li'>
          <li><span><FaCheck className='text-success'/><span></span></span>Advanced functionality</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Unlimited Subpages</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Bespoke design</li>
          <li><span><FaCheck className='text-success'/><span></span></span>Database Population</li>
          <li><span><FaCheck className='text-success'/><span></span></span>CRM Integration</li>
        </ul>

</div>

      </div>
      
      </div>
    
      </div>
      <div className='homepage-footer-section'>

      <div className='contact-section-homepage-footer'>
          <div  className='contact-homepage-image-footer'>
     <img className='contact-footer-diagram' src={happywoman} alt='happy woman'/>
          </div>
          <div className='contact-form-homepage'>
            <h2 className='container-fluid text-light'>GET A  <span className='text-danger'>PROTOTYPE </span>OF YOUR FUTURE WEBSITE</h2>
            
              <p className='text-light container-fluid'>Send your requirements for a website,we will research your specification,create a prototype 
              of the website and send a result to you.!!</p>
              <div className='container-fluid'>
              <form>
              <input className='form-control m-2'placeholder='Your name' type='text'/>
              <input className='form-control m-2'placeholder='Your name' type='text'/>
              <textarea className='form-control m-2'placeholder='message'/>
              <button className='btn btn-outline-danger btn-lg text-light'>Submit</button>
              </form>
              </div>
            
          </div>
        </div>

       
        <div style={{marginTop:'50px'}} className='footer-content-homescreen'>
          <div style={{padding:'10px',margin:'20px',borderBottom:'2px solid grey'}}>
          <h3 className='text-light'>About</h3>
          </div>
          
          <p style={{padding:'20px'}} className='text-light'>We have much planned for the future with great clients and continued software development</p>
          <ul>
        <li className='text-light'>+254758420860</li>
        <li className='text-light'>info@gmail.com</li>
        <li className='text-light'>Follow us</li>
       </ul>
       <div className='copyright-div'>
        <p style={{color:'grey',textAlign:'center'}} className='container-fluid'>copyright <span><FaRegCopyright /></span>2024 All rights reserved.Developed by winkywebus team. </p>
       </div>
        </div>
       
      </div>
      </div>                                    
  )
}

export default Homescreen