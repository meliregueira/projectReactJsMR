import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

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

    </ul>

    <NavLink to='/cart'><CartWidget/></NavLink> 
    
    </div>
  )
}

export default Navbar