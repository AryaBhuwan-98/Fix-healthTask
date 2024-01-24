import React from 'react'
import './BookComponent.css'
import PersonIcon from '@mui/icons-material/Person';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from 'react';

const BookComponent = () => {
    const [value, setValue] = useState();
  return (
    <div className='bookappointment'>
        <h3>Book an Appointment for
<span className='textdecoration'>Rs1000</span>FREE</h3>
   <p>60+ Expert Physiotherapists for 200+ Conditions</p>
   <div className='input-form'>
       <div className='inputform1'><PersonIcon /><input type="text" placeholder="Your Name" /></div> 
    <div className='inputform2'>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          
        </div>
        <div className="buttonClass">
          <button>Start Your Recovery</button>
        </div>
        </div>    
      </div>
   
  )
}

export default BookComponent