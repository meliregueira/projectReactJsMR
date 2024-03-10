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
          <h1>Carrito</h1>
          <h2>No hay entradas seleccionadas</h2>
          <Link to={"/"}>Ir al Inicio</Link>
        </>

        :
        <>
        <h2>Lista de carrito</h2>
        {cart.map((l) => (
          <CartItem key={l.entrada.id} entrada={l} eliminarEntrada={eliminarEntrada}/>
        ))}

        <p>Total: ${totalCarrito()}</p>

        <button onClick={vaciarCarrito}>Vaciar carrito</button>

          <Link to={'/CheckOut'}>
            Finalizar compra
          </Link>

        </>
      }

    </div>
  );
};

export default Cart;