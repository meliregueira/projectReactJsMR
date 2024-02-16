import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({entrada}) => {
  return (

    <Link to={`/Entradas/${entrada.id}`}>
      
    <div className='carts' key={entrada.id}>
        <img src={entrada.img} alt={entrada.nombre}/>
        <h2>{entrada.nombre}</h2>
    </div>  
    
    </Link>
    
    )
}

export default Item