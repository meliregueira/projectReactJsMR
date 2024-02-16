import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

  const [entradas,setEntradas] = useState ([]);

  useEffect(()=>{

    const fetchData = async () => {
        try{
          const response = await fetch("./entradas.json")
          const data = await response.json()
          setEntradas(data)
        }catch(error){
            console.log("Error en el fetch"+error)
        }
    }

    fetchData()

  },[])

  return (
    <div>
      <h1>{greeting}</h1>

      {entradas.length == 0 ? <h1>Cargando entradas</h1> : 
          <ItemList entradas={entradas}/>
      }
    </div>
  )
}

export default ItemListContainer