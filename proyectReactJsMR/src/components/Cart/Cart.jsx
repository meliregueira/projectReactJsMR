import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

  const Cart = () => {

  const {cart,vaciarCarrito,eliminarEntrada,totalCarrito} = useContext(CartContext)

  return (
    <div>

      {cart.length == 0
        ?
        <>
          <h1>No hay entradas seleccionadas</h1>
          <Link to={"/"}>Ir al Inicio</Link>
        </>

        :
        <>
        <h2>Lista de carrito</h2>
        {cart.map((ent) => (
          <CartItem key={ent.id} entrada={ent} eliminarEntrada={eliminarEntrada}/>
        ))}

        <p>Total: ${totalCarrito()}</p>

        <button onClick={vaciarCarrito}>Vaciar carrito</button>

        </>
      }

    </div>
  )
}

export default Cart;