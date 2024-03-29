import React from 'react';
import './CartItem.css'

const CartItem = ({entrada,eliminarEntrada}) => {

  return (
    <div className='cart-item-vw'>

      <h3>{entrada.entrada.nombre}</h3>

      <img src={entrada.entrada.img} alt={entrada.entrada.nombre} />
      <p>Cantidad: {entrada.cantidad}</p>

      <p>Valor unitario: ${entrada.entrada.precio}</p>

      <button onClick={() => eliminarEntrada(entrada.entrada.id)}>Eliminar entrada</button>

    </div>


  )
}

export default CartItem;