import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error/Error';
import './App.css'

const App = () => {

  return (
    <div className='ecomm'>
      <BrowserRouter>

        <Navbar/>

        <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/> 

        <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>

    </BrowserRouter>

        


    </div>
  )
}

export default App
