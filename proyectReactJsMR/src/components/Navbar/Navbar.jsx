import React, { useState} from 'react';
import './Navbar.css';
import { Link,NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

  return (
    <div className='Navbar'>
    <Link to ={'/'}>   
    <img src="../public/assets/img/Walt-Disney-World-Logo-White.png" alt="Logo" />
    </Link> 


    <ul className='Navbar-ul'>

        <li>
          <NavLink className='Navbar-ul' to='/categoria/Atracciones'>Atracciones</NavLink>
        </li>
        <li>
          <NavLink className='Navbar-ul' to='/categoria/ParquesDeAgua'>Parques De Agua</NavLink>
        </li>
        <li>
          <NavLink className='Navbar-ul' to='/categoria/Paquetes'>Paquetes</NavLink>
        </li>

    </ul>

    <NavLink className='Navbar-ul' to='/cart'><CartWidget/></NavLink> 
    
    </div>
  )
}

export default Navbar