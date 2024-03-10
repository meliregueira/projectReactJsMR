import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
    return (
    <div>
        
    <img className='CartWidget' src="../../public/assets/img/carrito.png" alt="carrito" />

    <p>{cantidadCarrito == 0 ? null : cantidadCarrito()}</p>

    </div>
  )
}

export default CartWidget