import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({entradas}) => {
  return (
    
    <div className='tienda'>
      {entradas.map((entrada) => {
        return(
          <Item entrada={entrada}/>
        )
      })
      
      }
    
    </div>

  )
}

export default ItemList
