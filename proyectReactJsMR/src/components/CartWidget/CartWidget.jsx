import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
    
    return (
    
      
    <div className='CartWidget'>
    
    <img className='CartIcono' src="../../public/assets/img/carrito.png" alt="carrito" />

    <p>{cantidadCarrito == 0 ? null : cantidadCarrito()}</p>

    </div>
  
  )
}

export default CartWidget