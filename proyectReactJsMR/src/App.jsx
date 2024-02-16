import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'

const App = () => {

  return (
    <div className='ecomm'>
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/' element={<ItemListContainer greeting = {"Comprá tus entradas acá"}/>} />

          <Route path='/detalle' element={<ItemDetailContainer id={"MKT"}/>} />

          <Route/>

          <Route/>

          <Route/>

        </Routes>

        <Footer/>

    </BrowserRouter>

        


    </div>
  )
}

export default App
