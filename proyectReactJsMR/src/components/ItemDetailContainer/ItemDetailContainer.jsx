import React, { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [entrada, setEntrada] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db,"item",id)
    getDoc(nuevoDoc).then(respuesta => {
      const data = respuesta.data()
      const nuevaEntrada = {id: respuesta.id,...data}
      setEntrada(nuevaEntrada)

    })

    .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <ItemDetail entrada={entrada} />
    </div>
  );
};

export default ItemDetailContainer
