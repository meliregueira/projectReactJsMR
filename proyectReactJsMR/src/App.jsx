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

          <Route path='/' element={<ItemListContainer greeting = {"Comprá tus entradas acá"}/>} />

          <Route path='/Entradas/:id' element={<ItemDetailContainer/>} />

          <Route/>

          <Route/>

          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>

    </BrowserRouter>

        


    </div>
  )
}

export default App
