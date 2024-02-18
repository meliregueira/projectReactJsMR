import React, {useState} from 'react'

const ItemCount = ({initial,stock}) => {

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
        alert("Agregaste "+contador+" entradas a tu carrito")
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