import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({entrada}) => {
  return (
    <div>
        <h1>{entrada.nombre}</h1>
        <img src={entrada.img} alt={entrada.nombre}/>
        <h2>{entrada.precio}</h2>

        <ItemCount initial={1} stock={entrada.stock}/>
    </div>
  )
}

export default ItemDetail