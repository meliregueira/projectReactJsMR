import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        
    <h1><NavLink to='/'>Walt Disney World</NavLink></h1>
    <ul className='Navbar-ul'>

        <li><NavLink to='/Entradas'>Entradas</NavLink></li>
        <li><NavLink to='/Parques'>Parques</NavLink></li>
        <li><NavLink to='/Novedades'>Novedades</NavLink></li>
        <li><NavLink to='/MyDisneyWorld'>My Disney World</NavLink></li>
        <li><NavLink to='/Contacto'>Contacto</NavLink></li>
    </ul>
    
    </div>
  )
}

export default Navbar