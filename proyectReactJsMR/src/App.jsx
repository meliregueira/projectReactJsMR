import { useState,useEffect } from 'react'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

const App = () => {

  return (
    <div className='ecomm'>
    <Navbar/>
    <ItemListContainer greeting = {"Comprá tus entradas acá"}/>

    <ItemDetailContainer id={"MKT"}/>
    <Footer/>

    </div>
  )
}

export default App
