import React, {useState} from 'react'
import '../ItemCount/Contador.css'

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador,setContador] = useState(1);
    
    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)

        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

  return (
    <div className='contador'>

        <p>Cantidad de Tickets: {contador} </p>
        <div className='botones-contador'>
        <button onClick={decrementar}>-</button>

        <button onClick={incrementar}>+</button>

        <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount