import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, FormLabel } from 'react-bootstrap';
import '../Contact/Contact.css'


function Contact() {
  return (
    <div className='container'>
        <div className="contact">
<div className='heading'>
            <h1 >Contact Us</h1>
            <h5>Please complete the form to make an enquiry</h5>
</div>       
   <form className='forms'>
<div className='formbox'>
<div className="formboxes">
< Form.Group >
<Form.Label>Full Name </Form.Label><br/>
    <Form.Control size="lg" type="text"  id='fname'  /><br/>
</Form.Group>
< Form.Group >
<Form.Label>Last Name</Form.Label><br/>
  <Form.Control size="lg" type="text"  id='lname' /><br/>
  </Form.Group>  
  </div> 
  <div className="formboxes">
< Form.Group >
<Form.Label>Email Address</Form.Label><br/>
    <Form.Control size="lg" type="mail"  id='email' /><br/>
</Form.Group>
< Form.Group >
<Form.Label>Phone Number</Form.Label><br/>
  <Form.Control size="lg" type="number"  id='phone'  /><br/>
  </Form.Group>  
  </div> 

  < Form.Group >
  <Form.Label className='label'>Write Your Message</Form.Label><br/>
  <Form.Control as="textarea" rows={4} /> <br/>
 </Form.Group> 
 <div className="buttonbox">
  <Button className='btn'>Submit</Button>
</div> 

  </div>
          </form>
        </div>
      
  </div>
  )
}

export default Contact