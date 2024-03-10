import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
    return (
    <div>
        
    <p>Carrito</p>

    <p>{cantidadCarrito == 0 ? null : cantidadCarrito()}</p>

    </div>
  )
}

export default CartWidget