import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <ul className='footer-ul'>
      <li><NavLink className='footer-a' to='/'>Inicio</NavLink> </li>
      <li><NavLink className='footer-a' to='/Parques'>Parques</NavLink></li>
      <li><NavLink className='footer-a' to='/Cart'>Carrito</NavLink></li>
 

      </ul>
    
    <p className='footer-p'>© Disney, Todos los Derechos Reservados. Disney Vacations, LLC PO Box 10250, Lake Buena Vista, FL 32830-0250
        | 81-2564985. ContactUs@DisneyVacationsLLC.com - (011) 5354-8119
        Se aplicarán cargos por llamadas internacionales cuando llames a Disney desde fuera de los Estados Unidos.</p>
    
    </div>
  )
}

export default Footer