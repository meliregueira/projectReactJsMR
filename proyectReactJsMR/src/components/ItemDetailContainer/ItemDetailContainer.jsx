import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({}) => {

  const [entrada,setEntrada] = useState ([]);

  const {id} = useParams();

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
      <h1>das</h1>
    {/* <ItemDetail entrada={entrada}/> */}
    </div>
  )
}

export default ItemDetailContainer