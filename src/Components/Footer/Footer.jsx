import React from 'react'
import '../Footer/Footer.css'


function Footer() {
  return (

<footer className='footer'>
  <div className='footer-container'>


{/* detail-bar */}
<div className="detail-bar">

<div className='footer-wrapp'>
    
  <div className="footerbox">
    <ul className='list-ul'>
     <a href="/"> <li>Home</li></a> 
     <a href="/aboutus"> <li>About Us </li></a>
     <a href="/department"><li>Department</li></a> 
     <a href="/make-an-appointment"> <li>Appointment</li></a> 
     <a href="/contact"><li>Contact</li></a> 
   
      
    </ul>
  </div>
  
  <div className="footerbox">
  <ul className='list-ul'>
      <li>Find A Doctor</li>
      <li>Medical Team</li>
      <li>Diagnostic Services</li>
      <li>Compliance Report</li>
      <li>Feedback</li>
    </ul>
  </div>
  
  <div className="footerbox">
     

    <h2>Heaven Care Hospital</h2>
 
     <div className="location-div">
      <ul className='location'>
      <li>Address Line </li>
      <li>City , State</li>
      <li>Zip Code</li>
      <li>Country</li>
      </ul>

     </div>
  </div>
  <div className="footerbox">
    <h3>Connect with Us!</h3>
    
{/* social-media bar */}
<div className="media-bar">
<div className="media-icon">
  <h4><i class="fa-brands fa-facebook"></i></h4>
  <h4><i class="fa-brands fa-twitter"></i></h4>
  <h4><i class="fa-brands fa-google"></i></h4>
  <h4><i class="fa-brands fa-instagram"></i></h4>
  <h4><i class="fa-brands fa-linkedin"></i></h4>
   </div>
</div>
  </div>
  
</div>

</div>

{/* last-bar */}
<div className="last-bar">
<a href='/'>
    <p>© 2024 Copyright:heaven-care-hospital.com</p>
  
</a></div>

  </div>

</footer>  
  )
}

export default Footer