import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import  '../Appointment/Appointment.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Appointment() {
  return (
   
      // <div className="container">
         <div className="appoinment">
<div className='heading'>
            <h1>Book An Appointment </h1>
  
</div>        
  
          <div className="textbox">
            <form> 

  <div className='formbox'>
    <div className="formboxes">
    <Form.Control size="lg" type="date"  id='dates' placeholder="Date" /><br/>
    {/* <Form.Select aria-label="Department" id='department'>
        <option>Department</option>
        <option value="1">Gynecology and Obstetrics</option>
        <option value="2">Pediatrics</option>
        <option value="3">Wellness</option>
        <option value="3">Laparoscopic Surgery </option><br/>
      </Form.Select> */}
    </div>
  
    <div className="formboxes">
    <Form.Control size="lg" type="text" id='doctor'  placeholder=" Doctor Name" /><br/>
    <Form.Control size="lg" type="text"  id='opno' placeholder="OP Card No" /><br/>

    </div> 
    
    <div className="formboxes">
    <Form.Control size="lg" type="text"  id='opno' placeholder="First Name" /><br/>
    <Form.Control size="lg" type="text" id='fullname'  placeholder="Last Name" /><br/>
  </div>
  
    <div className="formboxes">
    <Form.Select aria-label="Gender" id='gender'>
        <option>Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Any</option>
      </Form.Select><br/>
    <MDBInput label='Age (yrs)' id='age' type='text' size='lg' /><br/>
    </div>
  
    <div className="formboxes">
     <Form.Control size="lg" type="number"  id='phone' placeholder="Phone Number" /><br/>
      <Form.Control size="lg" type="text" id='address'  placeholder="Address" /><br/>
    
  </div>
  <Button className='button'> Book An Appointment</Button>

  </div>


            </form>
          </div>
          </div>      
      // </div>
    
  )
}

export default Appointment