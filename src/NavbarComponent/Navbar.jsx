import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarrapper'>
       <h3>Fix health</h3>
       <ul>
        <li>
        Home
        </li>
        <li>Services</li>
        <li>Blogs</li>
        <li>About</li>
        <li className='Booknow'>Book now</li>
       </ul>
    </div>
  )
}

export default Navbar