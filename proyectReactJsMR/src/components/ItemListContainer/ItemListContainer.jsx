import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection,getDocs,query,where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {

  const [entradas,setEntradas] = useState ([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    const misEntradas = 
    categoryId ? query(collection(db,"item "),where("categoria", "==",categoryId))
    :
    collection(db,"item")

    getDocs(misEntradas)
    .then((respuesta) => {
      const nuevasEntradas = respuesta.docs.map((doc) => {
        const data = doc.data()
        return {id: doc.id,...data}
      })
      setEntradas(nuevasEntradas)
    })
    .catch((error) => console.log(error))

  },[categoryId])

  return (
    <div>
      <h1>{greeting}</h1>

      {entradas.length == 0 
      ?
      <h1>Cargando entradas</h1> 
      : 
      <ItemList entradas={entradas}/>
      }
    </div>
  )
}

export default ItemListContainer
