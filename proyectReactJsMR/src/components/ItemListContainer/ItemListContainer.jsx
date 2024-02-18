import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [entradas,setEntradas] = useState ([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    const fetchData = async () => {
        try{
          const response = await fetch("/entradas.json");
          const data = await response.json()

          if(categoryId){

            const filteredEntrances = data.filter((p) => p.categoria == categoryId)
            setEntradas(filteredEntrances)
          }else{
            setEntradas(data)
          }
        }catch(error){
            console.log("Error en el fetch"+error)
        }
    }

    fetchData()

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