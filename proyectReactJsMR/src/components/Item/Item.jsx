import React from 'react'
import './item.css'

const Item = ({entrada}) => {
  return (
    <div className='carts' key={entrada.id}>
        <img src={entrada.img} alt={entrada.nombre}/>
        <h2>{entrada.nombre}</h2>
        <h2>{entrada.precio}</h2>
    </div>  
    
    )
}

export default Item