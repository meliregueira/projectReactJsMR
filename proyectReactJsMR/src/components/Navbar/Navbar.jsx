import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
    <Link to ={'/'}>   
    <h1>Walt Disney World</h1>
    </Link> 

    <ul className='Navbar-ul'>

        <li>
          <NavLink to='/categoria/Atracciones'>Atracciones</NavLink>
        </li>
        <li>
          <NavLink to='/categoria/ParquesDeAgua'>ParquesDeAgua</NavLink>
        </li>
        <li>
          <NavLink to='/categoria/Paquetes'>Paquetes</NavLink>
        </li>

        <li>
          <NavLink>CartWidget</NavLink>
        </li>
    </ul>

  
    
    </div>
  )
}

export default Navbar