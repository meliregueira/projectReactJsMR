import React, {useState, useContext}from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({entrada}) => {

  const [cart,setCart] = useState(false)

  const {agregarAlCarrito} = useContext(CartContext)

  const onAdd = (cantidad) => {

    setCart(true)

    agregarAlCarrito(entrada,cantidad)

  }

  return (
      
    <div>
        <img src={entrada.img} alt={entrada.nombre}/>
        <h2>{entrada.nombre}</h2>

        {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCount initial={1} stock={entrada.stock} onAdd={onAdd}/>}

        
    </div>  
    
    )
}

export default ItemDetail;