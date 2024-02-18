import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [entrada, setEntrada] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/entradas.json");
        const data = await response.json();
        const entrances = data.find((p) => p.id == id);
        setEntrada(entrances);
      } catch (error) {
        console.log("Error en el fetch" + error);
      }
    };

    fetchData();
  }, []);

  console.log(entrada)

  return (
    <div>
      <ItemDetail entrada={entrada} />
    </div>
  );
};

export default ItemDetailContainer
