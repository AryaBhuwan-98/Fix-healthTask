import React from 'react'
import './Hero.css';
import Navbar from '../NavbarComponent/Navbar';
import BookComponent from '../BookComponent/BookComponent';


const Hero = () => {
  return (
    <div className='hero-image'>
  <Navbar /> 
 <div className='appointment'><BookComponent /></div>
    </div>
  )
}

export default Hero