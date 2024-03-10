import React, {useState} from 'react'

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
    <div>

        <p>Cantidad de Tickets: {contador} </p>

        <button onClick={decrementar}>-</button>

        <button onClick={incrementar}>+</button>

        <button onClick={agregarCarrito}>Agregar al carrito</button>


    </div>
  )
}

export default ItemCount