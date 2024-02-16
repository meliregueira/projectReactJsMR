import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {

  const [entrada,setEntrada] = useState ([]);

  useEffect(()=>{

    const fetchData = async () => {
        try{
          const response = await fetch("./entradas.json")
          const data = await response.json()
          const entrad = data.find((p)=>p.id == id)
          setEntrada(entrad)
        }catch(error){
            console.log("Error en el fetch"+error)
        }
    }

    fetchData()

  },[id])
  
  return (
    <div>
    <ItemDetail entrada={entrada}/>
    </div>
  )
}

export default ItemDetailContainer