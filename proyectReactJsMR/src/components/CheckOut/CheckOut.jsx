import React, {useContext, useState} from 'react';
import { db } from '../../firebase/config';
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const CheckOut = () => {

    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [idOrden,setidOrden] = useState("")

    const manejadorFormulario = (event) => {

        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los campos obligatorios")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los emails no coinciden")
            return;}

        const orden = {
            items: cart.map((entrada) => ({
                id: entrada.entrada.id,
                nombre: entrada.entrada.nombre,
                cantidad: entrada.cantidad})),


            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (entradaOrden) => {
                const entradaRefe = doc(db,"entrada",entradaOrden.id);
                const entradaDoc = await getDoc(entradaRefe)
                const stockActual = entradaDoc.data().stock

                await updateDoc(entradaRefe, {
                    stock: stockActual - entradaOrden.cantidad
                })
            })
        )
        .then(() => {
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef) => {
                setError("")
                setidOrden(docRef.id)
                vaciarCarrito()
            })


            .catch((error) => {
                console.log(error)
                setError("Hubo un error al crear la orden")
            })

        })
        .catch((error) => {
            console.log(error)
            setError("No es posible actualizar el stock")
        })
    }



    return (
        <div>

            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>

                {cart.map((entrada) => (

                <div key={entrada.entrada.id}>

                        <p>
                            {""}
                            {entrada.entrada.nombre} x {entrada.cantidad}
                        </p>
                        <hr/>

                    </div> 
                ))}

               
               
                <div >

                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Nombre">Teléfono</label>
                        <input name="Teléfono" type='text' onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">Email Confirmacion</label>
                        <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>

                    <button type='submit'>Completar compra</button>

                    {error && <p>{error}</p>}

                    {idOrden && (
                        <h1>
                            Estas listo?? Te vas a Disney!! Tu número de compra es: {idOrden}
                        </h1>
                    )}

                </div>
                
            </form>
        </div>
    );
};

export default CheckOut;