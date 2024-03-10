import React, {createContext, useState} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const agregarAlCarrito = (entrada,cantidad) => {

        const entradaElegida = cart.findIndex(tick => tick.entrada.id == entrada.id)

        if(entradaElegida == -1){
            setCart([...cart,{entrada,cantidad}])
        }else{
            const nuevoCarrito = [...cart]
            nuevoCarrito[entradaElegida].cantidad += cantidad
            setCart(nuevoCarrito)
        }

    }

    const eliminarEntrada = (entradaId) => {
        const nuevoCarrito = cart.filter(item => item.entrada.id !== entradaId)
        setCart(nuevoCarrito)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const cantidadCarrito = () => {
        const totalCantidad = cart.reduce((total,item) => total+item.cantidad,0)
        return totalCantidad

    }

    const totalCarrito = () => {
        const precioTotal = cart.reduce((total,item) => total + (item.entrada.precio * item.cantidad,0))
        return precioTotal
    }


    return(
            <CartContext.Provider value={{
                cart,
                agregarAlCarrito,
                eliminarEntrada,
                vaciarCarrito,
                cantidadCarrito,
                totalCarrito

            }}>
                {children}
            </CartContext.Provider>

    )
}

export default CartProvider